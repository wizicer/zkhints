import news2412 from './202412.json' with { type: 'json' }
import news2501 from './202501.json' with { type: 'json' }
import news2502 from './202502.json' with { type: 'json' }
import news2503 from './202503.json' with { type: 'json' }
import news2504 from './202504.json' with { type: 'json' }
import news2505 from './202505.json' with { type: 'json' }
import news2506 from './202506.json' with { type: 'json' }
import news2507 from './202507.json' with { type: 'json' }
import news2508 from './202508.json' with { type: 'json' }
import news2509 from './202509.json' with { type: 'json' }
import news2510 from './202510.json' with { type: 'json' }
import news2511 from './202511.json' with { type: 'json' }

// Import avatars for each category
import paperImg from "../../assets/hinta/paper.png";
import newsImg from "../../assets/hinta/news.png";
import applicationImg from "../../assets/hinta/application.png";
import eventsImg from "../../assets/hinta/events.png";
import dslImg from "../../assets/hinta/dsl.png";
import bugImg from "../../assets/hinta/bug.png";
import gnarkImg from "../../assets/hinta/gnark.png";
import researchImg from "../../assets/hinta/research.png";

// Category to avatar mapping (deterministic)
export const categoryAvatars: Record<string, any> = {
  '论文': paperImg,
  '新闻': newsImg,
  '开源': applicationImg,
  '视频': eventsImg,
  '博客': dslImg,
  '活动': eventsImg,
  '工具': gnarkImg,
  '应用': applicationImg,
  '信息': newsImg,
  '漏洞': bugImg,
};

// Default avatar for unknown categories
export const defaultAvatar = researchImg;

// Type definitions for daily news data
export interface BilingualText {
  zh: string;
  en: string;
}

export interface BilingualNotes {
  zh: string[];
  en: string[];
}

export interface Project {
  name: string;
  url: string;
  type: string;
  tags: (string | BilingualText)[];
  summary: string | BilingualText;
  notes?: string[] | BilingualNotes;
  icon?: string;
}

export interface DailyNewsItem {
  date: string;
  projects: Project[];
  languages?: string[];
  insights?: any[];
}

export interface ProcessedDailyNewsItem extends DailyNewsItem {
  year: string;
  month: string;
  day: string;
  weekday: BilingualText;
  weekdayNumber: number;
}

const getWeekday = (dateStr: string): BilingualText => {
  const weekdays = {
    zh: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  const date = new Date(dateStr);
  return {
    zh: weekdays.zh[date.getDay()],
    en: weekdays.en[date.getDay()]
  };
};

export const newsData: ProcessedDailyNewsItem[] = [
  ...news2412,
  ...news2501,
  ...news2502,
  ...news2503,
  ...news2504,
  ...news2505,
  ...news2506,
  ...news2507,
  ...news2508,
  ...news2509,
  ...news2510,
  ...news2511,
].map((item: DailyNewsItem): ProcessedDailyNewsItem => {
  const [year, month, day] = item.date.split('-');
  return {
    ...item,
    year,
    month,
    day,
    weekday: getWeekday(item.date),
    weekdayNumber: new Date(item.date).getDay(),
  };
});
