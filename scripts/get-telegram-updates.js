import "dotenv/config";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("缺少 TELEGRAM_BOT_TOKEN，请在 .env 文件中配置");
  process.exit(1);
}

const url = `https://api.telegram.org/bot${token}/getUpdates`;

const res = await fetch(url);
const data = await res.json();

if (!data.ok) {
  console.error("获取 updates 失败:", data);
  process.exit(1);
}

if (data.result.length === 0) {
  console.log("没有获取到任何 updates。请先给 bot 发一条消息（或把它加入群组并发言），然后重试。");
  process.exit(0);
}

for (const update of data.result) {
  const msg = update.message || update.channel_post;
  if (!msg) {
    console.log("(无 message 字段的 update)", JSON.stringify(update));
    continue;
  }

  const chat = msg.chat;
  console.log("----------------------------------------");
  console.log("chat.id     :", chat.id);
  console.log("chat.type   :", chat.type);
  console.log("chat.title  :", chat.title || chat.username || `${chat.first_name || ""} ${chat.last_name || ""}`.trim());
  console.log("from        :", msg.from ? `${msg.from.first_name || ""} ${msg.from.last_name || ""} (@${msg.from.username || "-"})`.trim() : "-");
  console.log("text        :", msg.text || msg.caption || "(无文本内容)");
  console.log("date        :", new Date(msg.date * 1000).toLocaleString());
}
console.log("----------------------------------------");
console.log(`共 ${data.result.length} 条 update。找到目标消息对应的 chat.id 即为你需要的 CHAT_ID。`);
