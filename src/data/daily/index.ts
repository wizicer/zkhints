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

const getWeekday = (dateStr: string) => {
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

export const newsData = [
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
].map(item => {
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
