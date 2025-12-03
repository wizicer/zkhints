// type definitions for daily news data

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

export const getWeekday = (dateStr: string): BilingualText => {
  const weekdays = {
    zh: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  };
  const date = new Date(dateStr);
  return {
    zh: weekdays.zh[date.getDay()],
    en: weekdays.en[date.getDay()],
  };
};
