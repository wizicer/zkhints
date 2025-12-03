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
function getDateParts() {
  const today = new Date();
  return {
    year: String(today.getFullYear()),
    month: String(today.getMonth() + 1).padStart(2, "0"),
    day: String(today.getDate()).padStart(2, "0"),
  };
}

async function takeScreenshot(language = "zh") {
  const { year, month, day } = getDateParts();

  // Check if content exists for this language in today's data
  const { newsData } = await import("./src/data.js");
  const todayData = newsData.find((entry) => entry.date === `${year}-${month}-${day}`);
  if (todayData && todayData.languages && !todayData.languages.includes(language)) {
    console.log(
      `Skipping screenshot for ${language} as it's not listed in languages array for today`
    );
    return [];
  }

  const screenshotDir = path.join("./screenshots", year, month);
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const htmlDir = path.join("./docs", language, year, month);
  if (!fs.existsSync(htmlDir)) {
    fs.mkdirSync(htmlDir, { recursive: true });
  }

  const htmlPath = path.join(htmlDir, `${day}.html`);

  const puppeteer = (await import("puppeteer")).default;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set high DPI viewport (2x scale)
  await page.setViewport({
    width: 480,
    height: 640,
    deviceScaleFactor: 2,
  });

  // Load the HTML file with language parameter
  await page.goto(`file://${path.resolve(htmlPath)}?lang=${language}`, {
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

  return filepaths;
}

async function sendWecomNotification(imagePath, textPath, language = "zh") {
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

    if (textPath && fs.existsSync(textPath)) {
      const textContent = fs.readFileSync(textPath, "utf-8");
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

async function sendTelegramNotification(imagePath, textPath, language = "zh") {
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

    if (textPath && fs.existsSync(textPath)) {
      const textContent = fs.readFileSync(textPath, "utf-8");

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
  .option("-l, --language <language>", "Language to use (zh or en)", "zh")
  .action(async (options) => {
    try {
      await takeScreenshot(options.language);
    } catch (error) {
      console.error("Failed to take screenshot:", error);
      process.exit(1);
    }
  });

program
  .command("notify")
  .description("Send notification with screenshot and text content")
  .option("-l, --language <language>", "Language to use (zh or en)", "zh")
  .action(async (options) => {
    try {
      const { year, month, day } = getDateParts();
      const imagePaths = await takeScreenshot(options.language);
      const textPath = path.join("./texts", options.language, year, month, `${day}.txt`);

      if (WECOM_WEBHOOK_URL_ZH || WECOM_WEBHOOK_URL_EN) {
        await sendWecomNotification(null, textPath, options.language);
        for (const imagePath of imagePaths) {
          await sendWecomNotification(imagePath, null, options.language);
        }
      }
      if (TELEGRAM_BOT_TOKEN && (TELEGRAM_CHAT_ID_ZH || TELEGRAM_CHAT_ID_EN)) {
        await sendTelegramNotification(null, textPath, options.language);
        for (const imagePath of imagePaths) {
          await sendTelegramNotification(imagePath, null, options.language);
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
      const dataFilePath = path.join(__dirname, "src", "data", `${yearMonth}.json`);

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
