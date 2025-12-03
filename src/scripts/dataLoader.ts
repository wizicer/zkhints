// Data loader for CLI - loads JSON data without image imports
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdirSync, readFileSync } from "fs";
import { getWeekday, type DailyNewsItem, type ProcessedDailyNewsItem } from "../data/daily/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function loadNewsData(): ProcessedDailyNewsItem[] {
  const dataDir = join(__dirname, "..", "data", "daily");
  const files = readdirSync(dataDir).filter((f) => f.match(/^\d{6}\.json$/));

  const allData: DailyNewsItem[] = [];
  for (const file of files) {
    const content = readFileSync(join(dataDir, file), "utf-8");
    const data = JSON.parse(content) as DailyNewsItem[];
    allData.push(...data);
  }

  return allData.map((item): ProcessedDailyNewsItem => {
    const [year, month, day] = item.date.split("-");
    return {
      ...item,
      year,
      month,
      day,
      weekday: getWeekday(item.date),
      weekdayNumber: new Date(item.date).getDay(),
    };
  });
}
