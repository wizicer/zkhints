const iconMap: Record<string, string> = {
  论文: "📄",
  新闻: "📰",
  开源: "💻",
  视频: "🎥",
  博客: "📝",
  活动: "🎪",
  工具: "🛠️",
  应用: "📱",
  信息: "📃",
  漏洞: "🪳",
  教程: "📝",
};

export const categoryNameMapEn: Record<string, string> = {
  论文: "Paper",
  新闻: "News",
  开源: "OSS",
  视频: "Video",
  博客: "Blog",
  活动: "Event",
  工具: "Tool",
  应用: "App",
  信息: "News",
  漏洞: "Vulnerability",
  教程: "Tutorial",
};

export const categoryNameMapJa: Record<string, string> = {
  论文: "論文",
  新闻: "ニュース",
  开源: "OSS",
  视频: "動画",
  博客: "ブログ",
  活动: "イベント",
  工具: "ツール",
  应用: "アプリ",
  信息: "情報",
  漏洞: "脆弱性",
  教程: "チュートリアル",
};

type DailyLang = "zh" | "en" | "ja";

export const typeLabels: Record<DailyLang, Record<string, string>> = {
  zh: {
    论文: "论文",
    新闻: "新闻",
    开源: "开源",
    视频: "视频",
    博客: "博客",
    活动: "活动",
    工具: "工具",
    应用: "应用",
    信息: "信息",
    漏洞: "漏洞",
    教程: "教程",
  },
  en: categoryNameMapEn,
  ja: categoryNameMapJa,
};

export const getTypeIcon = (type: string): string => {
  return iconMap[type] || "📌";
};

export const generateTextContent = (
  cards: any[],
  language: string = "zh",
  show_details: boolean = true,
  dig_twitter_handle: boolean = false,
  show_qas: boolean = false
): string => {
  const lang = (["zh", "en", "ja"].includes(language) ? language : "zh") as DailyLang;
  const translations: Record<string, { heading: string; viewWeb: string; collectedBy: string }> = {
    zh: {
      heading: "🚀zkDaily 前沿热点追踪",
      viewWeb: "📄 网页查看：",
      collectedBy: "🪶 由 @icerdesign 收集",
    },
    en: {
      heading: "🚀zkDaily Frontier Tracker",
      viewWeb: "📄 View on web:",
      collectedBy: "🪶 Collected by @icerdesign",
    },
    ja: {
      heading: "🚀zkDaily フロンティアトラッカー",
      viewWeb: "📄 Webで見る：",
      collectedBy: "🪶 @icerdesign が収集",
    },
  };

  const getLocalizedText = (content: any, fallback = ""): string => {
    if (!content) return fallback;
    if (typeof content === "string") return lang === "en" ? fallback : content;
    if (typeof content === "object") {
      return content[lang] || (lang === "ja" ? content.zh || content.en : content.en || content.zh) || fallback;
    }
    return fallback;
  };

  const getLocalizedList = (content: any): string[] => {
    if (!content) return [];
    if (Array.isArray(content)) return lang === "en" ? [] : content;
    if (typeof content === "object") {
      return content[lang] || (lang === "ja" ? content.zh || content.en : content.en || content.zh) || [];
    }
    return [];
  };

  let text = "";
  cards.forEach((card) => {
    // Skip English-only requests when a legacy card explicitly lacks English.
    if (lang === "en" && card.languages && !card.languages.includes(lang)) {
      console.log(`Skipping card ${card.date} for language ${lang}`);
      return;
    }

    // Get language-specific weekday
    const weekday =
      card.weekday && typeof card.weekday === "object"
        ? card.weekday[lang] || card.weekday.zh || card.weekday.en
        : card.weekday;

    // Use the correct translation for the heading
    text += `${translations[lang].heading} ${card.date} ${weekday}\n\n`;

    if (card.projects) {
      card.projects.forEach((project: any) => {
        // Get project icon
        const icon = project.icon || getTypeIcon(project.type);
        text += `${icon} ${project.name}\n`;
        text += `- ${project.url}\n`;

        if (show_details) {
          // Get language-specific summary
          const summary = getLocalizedText(project.summary);

          text += `- ${summary.replace(/{{name}}/g, "")}\n`;

          // Add notes if they exist
          if (project.notes) {
            const notesToDisplay = getLocalizedList(project.notes);

            if (notesToDisplay.length > 0) {
              text += `- ${lang === "en" ? "Notes" : "要点"}:\n`;
              notesToDisplay.forEach((note) => {
                text += `  - ${note}\n`;
              });
            }
          }
        } else if (dig_twitter_handle) {
          // Extract Twitter handle from summary when show_details is false and dig_twitter_handle is true
          const summary = getLocalizedText(project.summary);

          // Use regex to find Twitter handles
          const twitterHandleRegex = /@([A-Za-z0-9_]+)/g;
          const matches = summary.match(twitterHandleRegex);

          if (matches && matches.length > 0) {
            text += `- ${matches.join(" ")}\n`;
          }
        }

        text += "\n";
      });
    }

    // Add Q&A section if exists
    if (show_qas && card.qas && card.qas.length > 0) {
      const qaHeading =
        lang === "zh" ? "💬 今日要点 深入解析" : lang === "ja" ? "💬 今日の要点 深掘り" : "💬 Q&A Deep Dive";
      text += `${qaHeading}\n\n`;
      card.qas.forEach((qa: any, index: number) => {
        const question = getLocalizedText(qa.question);
        const answer = getLocalizedText(qa.answer);
        text += `Q${index + 1}: ${question}\n`;
        text += `A${index + 1}: ${answer}\n\n`;
      });
    }

    text += `---\n${
      translations[lang].viewWeb
    } https://hints.plonk.pro${lang === "ja" ? "/ja" : ""}/daily/${card.date.substring(
      0,
      card.date.indexOf("-", 5)
    )}?lang=${lang}\n`;
    text += `${translations[lang].collectedBy}`;
  });

  return text;
};
