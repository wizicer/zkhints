#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_MODEL = "gemma4:e4b-mlx";
const DEFAULT_OLLAMA_URL = "http://127.0.0.1:11434";
const DAILY_DIR = path.resolve("src/data/daily");

const args = parseArgs(process.argv.slice(2));
const model = args.model || DEFAULT_MODEL;
const ollamaUrl = (args.ollamaUrl || DEFAULT_OLLAMA_URL).replace(/\/$/, "");
const dryRun = Boolean(args.dryRun);
const reportOnly = Boolean(args.report);
const thinking = Boolean(args.thinking);
const targetFile = args.file;
const limit = args.limit ? Number(args.limit) : Number.POSITIVE_INFINITY;
const failureLog = args.failureLog ? path.resolve(args.failureLog) : null;

if (args.help) {
  printHelp();
  process.exit(0);
}

const stats = {
  files: 0,
  fields: 0,
  translated: 0,
  skipped: 0,
  failed: 0,
};

let ollamaWasUsed = false;
let unloadingModel = false;
let progressTotal = 0;
let progressDone = 0;

installSignalHandlers();

try {
  await main();
} finally {
  await unloadModelIfNeeded();
}

async function main() {
  if (!reportOnly) {
    console.log(`Ollama thinking: ${thinking ? "enabled" : "disabled"}`);
    if (failureLog) console.log(`Failure log: ${failureLog}`);
  }

  const dailyFiles = (await fs.readdir(DAILY_DIR))
    .filter((file) => file.endsWith(".json"))
    .filter((file) => !targetFile || file === targetFile || file === `${targetFile}.json`)
    .sort();

  if (dailyFiles.length === 0) {
    throw new Error(targetFile ? `No daily JSON matched ${targetFile}` : "No daily JSON files found");
  }

  const missingByFile = new Map();
  for (const file of dailyFiles) {
    const json = JSON.parse(await fs.readFile(path.join(DAILY_DIR, file), "utf8"));
    const missing = countMissingTranslations(json);
    missingByFile.set(file, missing);
    progressTotal += missing;
  }

  if (!reportOnly) {
    console.log(`Translation progress: 0/${progressTotal} missing fields`);
  }

  for (const file of dailyFiles) {
    const filePath = path.join(DAILY_DIR, file);
    const json = JSON.parse(await fs.readFile(filePath, "utf8"));
    const missingBefore = missingByFile.get(file) || 0;

    if (missingBefore === 0) {
      continue;
    }

    stats.files += 1;
    console.log(`\n${file}: ${missingBefore} missing translation fields`);

    if (reportOnly) {
      continue;
    }

    const saveFile = async () => {
      if (!dryRun) {
        await fs.writeFile(filePath, `${JSON.stringify(json, null, 2)}\n`);
        console.log(`    saved ${file}`);
      }
    };

    const reachedLimit = await translateDailyFile(json, file, saveFile);

    const missingAfter = countMissingTranslations(json);
    console.log(`${file}: translated ${missingBefore - missingAfter}, remaining ${missingAfter}`);

    if (stats.translated >= limit) {
      console.log(`Reached --limit=${limit}`);
      break;
    }

    if (reachedLimit) {
      break;
    }
  }

  console.log("\nDone", stats);
}

async function translateDailyFile(days, file, saveFile) {
  for (const day of days) {
    for (const project of day.projects || []) {
      const summaryLabel = `${file} ${day.date} ${project.name} summary`;
      if (await translateAndSave(days, file, saveFile, summaryLabel, () =>
        translateProjectField(project, "summary", summaryLabel)
      )) {
        if (isLimitReached()) return true;
      }

      const notesLabel = `${file} ${day.date} ${project.name} notes`;
      if (await translateAndSave(days, file, saveFile, notesLabel, () =>
        translateProjectField(project, "notes", notesLabel)
      )) {
        if (isLimitReached()) return true;
      }
    }

    for (const qa of day.qas || []) {
      const questionLabel = `${file} ${day.date} QA question`;
      if (await translateAndSave(days, file, saveFile, questionLabel, () =>
        translateLocalizedField(qa, "question", questionLabel)
      )) {
        if (isLimitReached()) return true;
      }

      const answerLabel = `${file} ${day.date} QA answer`;
      if (await translateAndSave(days, file, saveFile, answerLabel, () =>
        translateLocalizedField(qa, "answer", answerLabel)
      )) {
        if (isLimitReached()) return true;
      }
    }
  }

  return false;
}

async function translateAndSave(days, file, saveFile, label, translateFn) {
  const missingBefore = countMissingTranslations(days);
  let translated;

  try {
    translated = await translateFn();
  } catch (error) {
    stats.failed += 1;
    console.warn(`    failed; skipped ${label}: ${error.message}`);
    await recordFailure({ file, label, error });
    return false;
  }

  if (!translated) {
    return false;
  }

  const completedFields = Math.max(0, missingBefore - countMissingTranslations(days));
  await saveFile();
  reportProgress(file, completedFields);
  return true;
}

async function translateProjectField(owner, key, label) {
  const value = owner[key];
  if (!value) {
    stats.skipped += 1;
    return false;
  }

  if (typeof value === "string") {
    stats.fields += 1;
    console.log(`  - ${label} (legacy zh string)`);
    owner[key] = {
      zh: value,
      en: await translateText(value, label, "en"),
      ja: await translateText(value, label, "ja"),
    };
    stats.translated += 1;
    return true;
  }

  if (Array.isArray(value)) {
    stats.fields += 1;
    console.log(`  - ${label} (legacy zh array ${value.length})`);
    owner[key] = {
      zh: value,
      en: await translateArray(value, label, "en"),
      ja: await translateArray(value, label, "ja"),
    };
    stats.translated += 1;
    return true;
  }

  return translateLocalizedField(owner, key, label);
}

async function translateLocalizedField(owner, key, label) {
  const value = owner[key];
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    stats.skipped += 1;
    return false;
  }

  if (!hasLocalizedValue(value, "zh") && !hasLocalizedValue(value, "en")) {
    stats.skipped += 1;
    return false;
  }

  stats.fields += 1;

  let didTranslate = false;
  const updates = {};

  if (!hasLocalizedValue(value, "en") && hasLocalizedValue(value, "zh")) {
    console.log(`  - ${label} -> en`);
    updates.en = Array.isArray(value.zh)
      ? await translateArray(value.zh, label, "en")
      : await translateText(value.zh, label, "en");
    didTranslate = true;
  }

  if (!hasLocalizedValue(value, "ja")) {
    console.log(`  - ${label}`);
    const source = updates.en || (hasLocalizedValue(value, "en") ? value.en : value.zh);
    updates.ja = Array.isArray(source)
      ? await translateArray(source, label, "ja")
      : await translateText(source, label, "ja");
    didTranslate = true;
  }

  if (!didTranslate) {
    stats.skipped += 1;
    return false;
  }

  Object.assign(value, updates);
  stats.translated += 1;
  return true;
}

async function translateText(text, label, targetLang) {
  const result = await callOllamaJson({
    system:
      `You are a professional English/Chinese to ${targetLang === "ja" ? "Japanese" : "English"} translator for zero-knowledge proof technical content. Preserve technical terms such as zkSNARK, PIOP, PCS, R1CS, frontend, backend, lookup, commitment, prover, verifier when keeping English improves clarity. Preserve placeholders like {{name}} exactly. Return only valid JSON.`,
    prompt: [
      `Translate the following text into natural ${targetLang === "ja" ? "Japanese" : "English"} for a technical ZK audience.`,
      `Return exactly this JSON shape: {"${targetLang}":"..."}`,
      "",
      text,
    ].join("\n"),
  }, label);

  if (typeof result[targetLang] !== "string" || !result[targetLang].trim()) {
    throw new Error(`Invalid translation for ${label}: expected { ${targetLang}: string }`);
  }

  return result[targetLang].trim();
}

async function translateArray(items, label, targetLang) {
  const result = await callOllamaJson({
    system:
      `You are a professional English/Chinese to ${targetLang === "ja" ? "Japanese" : "English"} translator for zero-knowledge proof technical content. Preserve technical terms such as zkSNARK, PIOP, PCS, R1CS, frontend, backend, lookup, commitment, prover, verifier when keeping English improves clarity. Preserve placeholders like {{name}} exactly. Return only valid JSON.`,
    prompt: [
      `Translate each item into natural ${targetLang === "ja" ? "Japanese" : "English"} for a technical ZK audience.`,
      "Keep the same order and the exact same number of items.",
      `Return exactly this JSON shape: {"${targetLang}":["...", "..."]}`,
      "",
      JSON.stringify(items, null, 2),
    ].join("\n"),
  }, label);

  if (!Array.isArray(result[targetLang]) || result[targetLang].length !== items.length) {
    throw new Error(`Invalid translation for ${label}: expected ${items.length} ${targetLang} items`);
  }

  return result[targetLang].map((item, index) => {
    if (typeof item !== "string" || !item.trim()) {
      throw new Error(`Invalid translation for ${label}[${index}]`);
    }
    return item.trim();
  });
}

async function callOllamaJson({ system, prompt }, label) {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      ollamaWasUsed = true;
      const response = await fetch(`${ollamaUrl}/api/generate`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          model,
          system,
          prompt,
          stream: false,
          format: "json",
          think: thinking,
          options: {
            temperature: 0.1,
            top_p: 0.9,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama HTTP ${response.status}: ${await response.text()}`);
      }

      const payload = await response.json();
      return parseJsonResponse(payload.response);
    } catch (error) {
      lastError = error;
      console.warn(`    attempt ${attempt} failed for ${label}: ${error.message}`);
      await sleep(800 * attempt);
    }
  }

  throw lastError;
}

async function unloadModelIfNeeded() {
  if (!ollamaWasUsed || unloadingModel) return;

  unloadingModel = true;
  console.log(`\nUnloading Ollama model: ${model}`);

  try {
    const response = await fetch(`${ollamaUrl}/api/generate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        model,
        prompt: "",
        stream: false,
        keep_alive: 0,
      }),
    });

    if (!response.ok) {
      console.warn(`Could not unload Ollama model ${model}: HTTP ${response.status}`);
      return;
    }

    console.log(`Unloaded Ollama model: ${model}`);
  } catch (error) {
    console.warn(`Could not unload Ollama model ${model}: ${error.message}`);
  }
}

function installSignalHandlers() {
  const handleSignal = (signal) => {
    console.log(`\nReceived ${signal}; shutting down.`);
    unloadModelIfNeeded().finally(() => {
      process.exit(signal === "SIGINT" ? 130 : 143);
    });
  };

  process.once("SIGINT", () => handleSignal("SIGINT"));
  process.once("SIGTERM", () => handleSignal("SIGTERM"));
}

function parseJsonResponse(text) {
  if (!text || typeof text !== "string") {
    throw new Error("Ollama returned an empty response");
  }

  const trimmed = stripJsonFence(text.trim());
  try {
    return JSON.parse(sanitizeJsonBackslashes(trimmed));
  } catch (parseError) {
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) throw new Error(`Could not find JSON object in response: ${trimmed}`);
    try {
      return JSON.parse(sanitizeJsonBackslashes(match[0]));
    } catch (objectParseError) {
      throw new Error(
        `Could not parse JSON object: ${objectParseError.message}; full response starts with: ${trimmed.slice(0, 1000)}`
      );
    }
  }
}

function stripJsonFence(text) {
  return text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function sanitizeJsonBackslashes(text) {
  return text.replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
}

function countMissingTranslations(days) {
  let missing = 0;

  for (const day of days) {
    for (const project of day.projects || []) {
      if (project.summary && typeof project.summary === "string") {
        missing += 2;
      }

      if (project.summary && typeof project.summary === "object" && !Array.isArray(project.summary)) {
        if (hasLocalizedValue(project.summary, "zh") && !hasLocalizedValue(project.summary, "en")) missing += 1;
        if (!hasLocalizedValue(project.summary, "ja")) missing += 1;
      }

      if (Array.isArray(project.notes)) {
        missing += 2;
      }

      if (project.notes && typeof project.notes === "object" && !Array.isArray(project.notes)) {
        if (hasLocalizedValue(project.notes, "zh") && !hasLocalizedValue(project.notes, "en")) missing += 1;
        if (!hasLocalizedValue(project.notes, "ja")) missing += 1;
      }
    }

    for (const qa of day.qas || []) {
      if (qa.question && hasLocalizedValue(qa.question, "zh") && !hasLocalizedValue(qa.question, "en")) missing += 1;
      if (qa.question && !hasLocalizedValue(qa.question, "ja")) missing += 1;
      if (qa.answer && hasLocalizedValue(qa.answer, "zh") && !hasLocalizedValue(qa.answer, "en")) missing += 1;
      if (qa.answer && !hasLocalizedValue(qa.answer, "ja")) missing += 1;
    }
  }

  return missing;
}

function hasLocalizedValue(value, lang) {
  if (!value || typeof value !== "object" || !(lang in value)) return false;

  const localized = value[lang];

  if (typeof localized === "string") {
    return localized.trim().length > 0;
  }

  if (Array.isArray(localized)) {
    return localized.length > 0 && localized.every((item) => typeof item === "string" && item.trim().length > 0);
  }

  return false;
}

function isLimitReached() {
  return stats.translated >= limit;
}

function reportProgress(file, completedFields) {
  progressDone += completedFields;

  const percent = progressTotal > 0 ? Math.min(100, Math.floor((progressDone / progressTotal) * 100)) : 100;
  console.log(`    progress ${progressDone}/${progressTotal} (${percent}%) ${file}`);
}

async function recordFailure({ file, label, error }) {
  if (!failureLog || dryRun) return;

  const entry = {
    at: new Date().toISOString(),
    file,
    label,
    message: error.message,
    stack: error.stack,
  };

  try {
    await fs.appendFile(failureLog, `${JSON.stringify(entry)}\n`);
    console.warn(`    recorded failure in ${failureLog}`);
  } catch (logError) {
    console.warn(`    could not write failure log ${failureLog}: ${logError.message}`);
  }
}

function parseArgs(argv) {
  const parsed = {};

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") parsed.help = true;
    else if (arg === "--dry-run") parsed.dryRun = true;
    else if (arg === "--report") parsed.report = true;
    else if (arg === "--think" || arg === "--thinking") parsed.thinking = true;
    else if (arg === "--no-think" || arg === "--no-thinking") parsed.thinking = false;
    else if (arg === "--failure-log") parsed.failureLog = argv[++index];
    else if (arg.startsWith("--failure-log=")) parsed.failureLog = arg.slice("--failure-log=".length);
    else if (arg === "--file") parsed.file = argv[++index];
    else if (arg.startsWith("--file=")) parsed.file = arg.slice("--file=".length);
    else if (arg === "--model") parsed.model = argv[++index];
    else if (arg.startsWith("--model=")) parsed.model = arg.slice("--model=".length);
    else if (arg === "--ollama-url") parsed.ollamaUrl = argv[++index];
    else if (arg.startsWith("--ollama-url=")) parsed.ollamaUrl = arg.slice("--ollama-url=".length);
    else if (arg === "--limit") parsed.limit = argv[++index];
    else if (arg.startsWith("--limit=")) parsed.limit = arg.slice("--limit=".length);
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return parsed;
}

function printHelp() {
  console.log(`
Usage:
  node scripts/translate-daily-ja.js [options]

Options:
  --report                  Only print files with missing en/ja translation fields.
  --dry-run                 Translate but do not write files.
  --think, --thinking       Enable Ollama thinking. Default: disabled.
  --no-think                Disable Ollama thinking explicitly.
  --failure-log <path>      Append skipped translation failures. Default: disabled.
  --file <YYYYMM.json>      Translate one daily JSON file.
  --limit <number>          Stop after translating this many fields.
  --model <name>            Ollama model. Default: ${DEFAULT_MODEL}
  --ollama-url <url>        Ollama base URL. Default: ${DEFAULT_OLLAMA_URL}
`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
