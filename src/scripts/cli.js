import { Command } from "commander";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import axios from "axios";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();

// WeChat Work webhook URL - this should be configured via environment variable
const WECOM_WEBHOOK_URL_ZH = process.env.WECOM_WEBHOOK_URL_ZH || process.env.WECOM_WEBHOOK_URL;
const WECOM_WEBHOOK_URL_EN = process.env.WECOM_WEBHOOK_URL_EN || process.env.WECOM_WEBHOOK_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID_ZH = process.env.TELEGRAM_CHAT_ID_ZH || process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_CHAT_ID_EN = process.env.TELEGRAM_CHAT_ID_EN || process.env.TELEGRAM_CHAT_ID;

// Date utility function
function getDateParts(dateStr = null) {
  const date = dateStr ? new Date(dateStr) : new Date();
  return {
    year: String(date.getFullYear()),
    month: String(date.getMonth() + 1).padStart(2, "0"),
    day: String(date.getDate()).padStart(2, "0"),
  };
}

// Load news data (using dataLoader to avoid image imports)
async function loadNewsData() {
  const { loadNewsData: load } = await import("./dataLoader.ts");
  return load();
}

// Load text generator
async function loadTextGenerator() {
  const { generateTextContent } = await import("../pages/daily/textGenerator.ts");
  return generateTextContent;
}

async function takeScreenshot(language = "zh", dateStr = null) {
  const { year, month, day } = getDateParts(dateStr);
  const dateString = `${year}-${month}-${day}`;

  // Check if content exists for this language in the data
  const newsData = await loadNewsData();
  const dayData = newsData.find((entry) => entry.date === dateString);
  if (!dayData) {
    console.log(`No data found for ${dateString}`);
    return [];
  }
  if (dayData.languages && !dayData.languages.includes(language)) {
    console.log(
      `Skipping screenshot for ${language} as it's not listed in languages array for ${dateString}`
    );
    return [];
  }

  const screenshotDir = path.join("./screenshots", year, month);
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // Start Astro dev server
  const { dev } = await import("astro");
  const puppeteer = (await import("puppeteer")).default;

  // Workaround: disable devToolbar before starting preview server
  const configPath = path.join(process.cwd(), "astro.config.mjs");
  const configContent = fs.readFileSync(configPath, "utf-8");
  const modifiedConfig = configContent.replace(
    /devToolbar:\s*\{\s*enabled:\s*true\s*,?\s*\}/,
    "devToolbar: { enabled: false }"
  );
  fs.writeFileSync(configPath, modifiedConfig, "utf-8");

  const defaultPort = 51234;
  let server;
  try {
    server = await dev({
      server: {
        port: defaultPort,
      },
    });
  } catch (err) {
    // Restore config on error
    fs.writeFileSync(configPath, configContent, "utf-8");
    throw err;
  }

  // Get the server URL from the address info
  const address = server.host || "localhost";
  const port = server.port || defaultPort;
  const url = `http://${address}:${port}/`;
  console.log("Dev server started at:", url);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set high DPI viewport (2x scale)
  await page.setViewport({
    width: 480,
    height: 640,
    deviceScaleFactor: 2,
  });

  // Load the page from Astro server
  const targetUrl = `${url}daily/${dateString}?lang=${language}`;
  console.log(`Loading: ${targetUrl}`);
  await page.goto(targetUrl, {
    waitUntil: "networkidle0",
  });

  // Small delay to ensure all content is rendered
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Get all news cards
  const cards = await page.$$(".news-card, .insight-card");
  const filepaths = [];

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const filepath = path.join(screenshotDir, `${day}-${i + 1}-${language}.png`);

    // Screenshot individual card
    await card.screenshot({
      path: filepath,
    });

    filepaths.push(filepath);
    console.log(`Card ${i + 1} (${language}) screenshot saved to: ${filepath}`);
  }

  await browser.close();
  await server.stop();

  // Restore devToolbar config
  fs.writeFileSync(configPath, configContent, "utf-8");

  return filepaths;
}

// Generate text content using textGenerator
async function generateText(language = "zh", dateStr = null) {
  const { year, month, day } = getDateParts(dateStr);
  const dateString = `${year}-${month}-${day}`;

  const newsData = await loadNewsData();
  const dayData = newsData.find((entry) => entry.date === dateString);

  if (!dayData) {
    console.log(`No data found for ${dateString}`);
    return null;
  }

  const generateTextContent = await loadTextGenerator();
  return generateTextContent([dayData], language, true, true);
}

async function sendWecomNotification(imagePath, textContent, language = "zh") {
  const webhookUrl = language === "zh" ? WECOM_WEBHOOK_URL_ZH : WECOM_WEBHOOK_URL_EN;

  if (!webhookUrl) {
    throw new Error(`WECOM_WEBHOOK_URL${language.toUpperCase()} environment variable is not set`);
  }

  try {
    if (imagePath) {
      const imageBuffer = fs.readFileSync(imagePath);
      const md5Hash = crypto.createHash("md5").update(imageBuffer).digest("hex");
      const base64Image = imageBuffer.toString("base64");

      const imagePayload = {
        msgtype: "image",
        image: {
          base64: base64Image,
          md5: md5Hash,
        },
      };
      await axios.post(webhookUrl, imagePayload);
      console.log(`Image sent successfully to Wecom (${language})`);
    }

    if (textContent) {
      const textPayload = {
        msgtype: "markdown",
        markdown: {
          content: textContent,
        },
      };
      await axios.post(webhookUrl, textPayload);
      console.log(`Text content sent successfully to Wecom (${language})`);
    }
  } catch (error) {
    console.error(
      `Failed to send notification (${language}):`,
      error.response?.data || error.message
    );
    throw error;
  }
}

async function sendTelegramNotification(imagePath, textContent, language = "zh") {
  const chatIdConfig = language === "zh" ? TELEGRAM_CHAT_ID_ZH : TELEGRAM_CHAT_ID_EN;

  if (!TELEGRAM_BOT_TOKEN || !chatIdConfig) {
    console.error(
      `Telegram configuration missing for ${language}. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID_${language.toUpperCase()} in .env file`
    );
    return;
  }

  const TelegramBot = (await import("node-telegram-bot-api")).default;
  const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

  try {
    // Split the chat IDs by comma
    const chatConfigs = chatIdConfig.split(",").map((id) => {
      const trimmedId = id.trim();
      // Parse chat_id and message_thread_id if in format: chatId(threadId)
      const match = trimmedId.match(/^([^(]+)(?:\((\d+)\))?$/);
      if (match) {
        return {
          chatId: match[1],
          threadId: match[2] ? parseInt(match[2]) : undefined,
        };
      }
      return { chatId: trimmedId };
    });

    if (imagePath) {
      for (const { chatId, threadId } of chatConfigs) {
        await retrySend(async () => {
          const options = threadId ? { message_thread_id: threadId } : {};
          await bot.sendPhoto(chatId, imagePath, options);
          console.log(
            `Image sent successfully to Telegram chat ${chatId}${
              threadId ? " thread " + threadId : ""
            } (${language})`
          );
        }).catch((telegramError) => {
          console.error(
            `Error sending image to Telegram chat ${chatId}${
              threadId ? " thread " + threadId : ""
            } (${language}):`,
            telegramError
          );
        });
      }
    }

    if (textContent) {
      for (const { chatId, threadId } of chatConfigs) {
        await retrySend(async () => {
          const options = threadId ? { message_thread_id: threadId } : {};
          await bot.sendMessage(chatId, textContent, options);
          console.log(
            `Text content sent successfully to Telegram chat ${chatId}${
              threadId ? " thread " + threadId : ""
            } (${language})`
          );
        }).catch((telegramError) => {
          console.error(
            `Error sending text to Telegram chat ${chatId}${
              threadId ? " thread " + threadId : ""
            } (${language}):`,
            telegramError
          );
        });
      }
    }
  } catch (error) {
    console.error("Failed to send Telegram notification:", error.message);
    throw error;
  }
}

// Function to retry sending a message or photo
async function retrySend(action, maxRetries = 3) {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      await action();
      return;
    } catch (error) {
      attempts++;
      if (attempts >= maxRetries) {
        throw error;
      }
    }
  }
}

program.name("zkpnewscards-cli").description("CLI for ZKP News Cards operations").version("1.0.0");

program
  .command("screenshot")
  .description("Take a screenshot of the news card")
  .option("-l, --language <language>", "Language to use (zh, en, or all)", "all")
  .option("-d, --date <date>", "Date to screenshot (YYYY-MM-DD format)", null)
  .action(async (options) => {
    try {
      const languages = options.language === "all" ? ["zh", "en"] : [options.language];
      for (const lang of languages) {
        await takeScreenshot(lang, options.date);
      }
    } catch (error) {
      console.error("Failed to take screenshot:", error);
      process.exit(1);
    }
  });

program
  .command("notify")
  .description("Send notification with screenshot and text content")
  .option("-l, --language <language>", "Language to use (zh, en, or all)", "all")
  .option("-d, --date <date>", "Date to notify (YYYY-MM-DD format)", null)
  .action(async (options) => {
    try {
      const { year, month, day } = getDateParts(options.date);
      const dateString = `${year}-${month}-${day}`;

      // Check if data exists for the specified date
      const newsData = await loadNewsData();
      const todayData = newsData.find((entry) => entry.date === dateString);
      console.log(
        "Data for",
        dateString + ":",
        todayData ? JSON.stringify(todayData, null, 2) : "No data found"
      );

      if (!todayData) {
        console.error(`No data found for ${dateString}. Aborting notification.`);
        process.exit(1);
      }

      const languages = options.language === "all" ? ["zh", "en"] : [options.language];

      for (const lang of languages) {
        // Generate text content on-the-fly
        const textContent = await generateText(lang, options.date);
        if (!textContent) {
          console.log(`Skipping ${lang} - no text content generated`);
          continue;
        }

        // Take screenshots
        const imagePaths = await takeScreenshot(lang, options.date);
        if (imagePaths.length === 0) {
          console.log(`Skipping ${lang} - no screenshots generated`);
          continue;
        }

        if (WECOM_WEBHOOK_URL_ZH || WECOM_WEBHOOK_URL_EN) {
          await sendWecomNotification(null, textContent, lang);
          for (const imagePath of imagePaths) {
            await sendWecomNotification(imagePath, null, lang);
          }
        }
        if (TELEGRAM_BOT_TOKEN && (TELEGRAM_CHAT_ID_ZH || TELEGRAM_CHAT_ID_EN)) {
          await sendTelegramNotification(null, textContent, lang);
          for (const imagePath of imagePaths) {
            await sendTelegramNotification(imagePath, null, lang);
          }
        }
      }
    } catch (error) {
      console.error("Error in notify command:", error);
      process.exit(1);
    }
  });

program
  .command("today")
  .description("Add today's entry to the corresponding JSON file")
  .action(async () => {
    try {
      const { year, month, day } = getDateParts();
      const yearMonth = `${year}${month}`;
      const dateString = `${year}-${month}-${day}`;
      const dataFilePath = path.join(__dirname, "..", "data", "daily", `${yearMonth}.json`);

      // Check if the file exists
      if (!fs.existsSync(dataFilePath)) {
        // Create new file with today's entry
        const newData = [
          {
            date: dateString,
            projects: [],
          },
        ];
        fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2) + "\n", "utf-8");
        console.log(`Created new file: ${dataFilePath}`);
        console.log(`Added entry for ${dateString}`);
      } else {
        // Read existing file
        const fileContent = fs.readFileSync(dataFilePath, "utf-8");
        const data = JSON.parse(fileContent);

        // Check if entry for today already exists
        const existingEntry = data.find((entry) => entry.date === dateString);
        if (existingEntry) {
          console.log(`Entry for ${dateString} already exists in ${dataFilePath}`);
          return;
        }

        // Add new entry
        const newEntry = {
          date: dateString,
          projects: [],
        };
        data.push(newEntry);

        // Write back to file
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
        console.log(`Added entry for ${dateString} to ${dataFilePath}`);
      }
    } catch (error) {
      console.error("Error adding today's entry:", error);
      process.exit(1);
    }
  });

program.parse();
