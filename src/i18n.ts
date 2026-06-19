export const languages = ["en", "ja"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

export const languageLabels: Record<Language, string> = {
  en: "English",
  ja: "日本語",
};

export interface LocalizedText {
  en: string;
  ja?: string;
  zh?: string;
}

export const ui = {
  home: { en: "Home", ja: "ホーム" },
  about: { en: "About", ja: "概要" },
  search: { en: "Search...", ja: "検索..." },
  noResults: { en: "No results found", ja: "検索結果がありません" },
  tableOfContents: { en: "Table of Contents", ja: "目次" },
  backToCheatsheets: { en: "Back to Cheatsheets", ja: "チートシート一覧へ戻る" },
  builtWith: { en: "Built with", ja: "Built with" },
  by: { en: "by @icerdesign", ja: "by @trainbit_jp" },
  reportIssue: { en: "Report an issue", ja: "問題を報告" },
  editPage: { en: "Edit this page", ja: "このページを編集" },
  wip: { en: "WIP", ja: "作成中" },
  workInProgress: { en: "Work in Progress", ja: "作成中" },
  underConstruction: { en: "This page is under construction", ja: "このページは作成中です" },
  underConstructionBody: {
    en: "Content for this section is being developed and will be available soon.",
    ja: "このセクションの内容は準備中です。近日中に公開されます。",
  },
  recentNews: { en: "Recent News", ja: "最新ニュース" },
  viewDetails: { en: "View details", ja: "詳細を見る" },
  viewAll: { en: "View All", ja: "すべて見る" },
  dailyDigest: { en: "Daily Digest", ja: "デイリーダイジェスト" },
  language: { en: "Language", ja: "言語" },
} satisfies Record<string, LocalizedText>;

export const homeCopy = {
  intro: {
    en: "Hey! I'm",
    ja: "こんにちは、",
  },
  introTail: {
    en: "and this is a modest collection of ZK Hints I've written.",
    ja: "が書いた ZK Hints の小さな知識ベースです。",
  },
};

export const getLanguageFromPath = (pathname: string): Language => {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLanguage(segment) ? segment : defaultLanguage;
};

export const isLanguage = (value: unknown): value is Language => {
  return typeof value === "string" && languages.includes(value as Language);
};

export const t = (key: keyof typeof ui, lang: Language = defaultLanguage): string => {
  return localize(ui[key], lang);
};

export const localize = (
  value: string | LocalizedText | undefined,
  lang: Language = defaultLanguage
): string => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || "";
};

export const withoutLanguagePrefix = (pathname: string): string => {
  const parts = pathname.split("/").filter(Boolean);
  if (isLanguage(parts[0])) parts.shift();
  const path = `/${parts.join("/")}`;
  return path === "/" ? "/" : path.replace(/\/$/, "");
};

export const withLanguagePrefix = (pathname: string, lang: Language): string => {
  const cleanPath = withoutLanguagePrefix(pathname);
  return lang === defaultLanguage ? cleanPath : `/${lang}${cleanPath === "/" ? "" : cleanPath}`;
};

export const localizedPath = (path: string | undefined, lang: Language): string => {
  const cleanPath = path ? `/${path.replace(/^\/+/, "")}` : "/";
  return withLanguagePrefix(cleanPath, lang);
};
