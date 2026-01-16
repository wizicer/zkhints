import { exec } from "child_process";
import os from "os";

const date = new Date().toISOString().split("T")[0];
const url = `http://localhost:4321/daily/${date}?lang=en`;
const target = process.argv[2] || url;

let command;
if (process.platform === "darwin") {
  command = `open "${target}"`; // Mac
} else if (process.platform === "win32") {
  command = `start "" "${target}"`; // Windows Cmd
} else {
  // Linux / WSL
  // 核心 Trick: 许多 WSL 环境下 os.release() 包含 'microsoft'
  if (os.release().toLowerCase().includes("microsoft")) {
    command = `explorer.exe "${target}"`; // WSL 强制调 Windows 浏览器
  } else {
    command = `xdg-open "${target}"`; // 纯 Linux
  }
}

exec(command, (err) => {
  if (err) console.error("Failed to open browser:", err.message);
});
