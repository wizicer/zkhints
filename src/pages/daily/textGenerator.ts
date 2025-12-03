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

export const typeLabels: Record<"zh" | "en", Record<string, string>> = {
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
};

export const getTypeIcon = (type: string): string => {
  return iconMap[type] || "📌";
};

export const generateTextContent = (
  cards: any[],
  language: string = "zh",
  show_details: boolean = true,
  dig_twitter_handle: boolean = false
): string => {
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
  };

  let text = "";
  cards.forEach((card) => {
    // Skip if the card doesn't support this language
    if (language !== "zh" && card.languages && !card.languages.includes(language)) {
      console.log(`Skipping card ${card.date} for language ${language}`);
      return;
    }

    // Get language-specific weekday
    const weekday =
      card.weekday && typeof card.weekday === "object"
        ? card.weekday[language] || card.weekday.en || card.weekday.zh
        : card.weekday;

    // Use the correct translation for the heading
    text += `${translations[language].heading} ${card.date} ${weekday}\n\n`;

    if (card.projects) {
      card.projects.forEach((project: any) => {
        // Get project icon
        const icon = project.icon || getTypeIcon(project.type);
        text += `${icon} ${project.name}\n`;
        text += `- ${project.url}\n`;

        if (show_details) {
          // Get language-specific summary
          let summary = "";
          if (project.summary) {
            if (typeof project.summary === "object") {
              // Directly get the language-specific summary
              summary = project.summary[language];

              // Fallback if the specified language summary is not available
              if (!summary) {
                if (language === "en" && project.summary.en) {
                  summary = project.summary.en;
                } else if (project.summary.zh) {
                  summary = project.summary.zh;
                }
              }
            } else {
              summary = project.summary;
            }
          }

          text += `- ${summary.replace(/{{name}}/g, "")}\n`;

          // Add notes if they exist
          if (project.notes) {
            let notesToDisplay: string[] = [];

            // Handle language-specific notes
            if (typeof project.notes === "object" && Array.isArray(project.notes[language])) {
              notesToDisplay = project.notes[language];
            } else if (Array.isArray(project.notes)) {
              notesToDisplay = project.notes;
            }

            if (notesToDisplay.length > 0) {
              text += `- Notes:\n`;
              notesToDisplay.forEach((note) => {
                text += `  - ${note}\n`;
              });
            }
          }
        } else if (dig_twitter_handle) {
          // Extract Twitter handle from summary when show_details is false and dig_twitter_handle is true
          let summary = "";
          if (project.summary) {
            if (typeof project.summary === "object") {
              summary = project.summary[language] || project.summary.en || project.summary.zh || "";
            } else {
              summary = project.summary;
            }
          }

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

    text += `---\n${
      translations[language].viewWeb
    } https://news.plonk.pro/${language}/${card.date.replace(/-/g, "/")}.html\n`;
    text += `${translations[language].collectedBy}`;
  });

  return text;
};
