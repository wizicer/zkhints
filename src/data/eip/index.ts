import type { EIP } from "../model";
import json_eips from "./eip.json";
import flags_data from "./eip-flags.json";
import ja_titles from "./eip-ja.json";
import type { Language } from "../../i18n";

const stars = [196, 197, 2537];
const flags = flags_data as Record<string, "new" | "update">;
const jaTitles = ja_titles as Record<string, string>;

export const eips: EIP[] = json_eips.map((eip) => ({
  id: eip.id,
  title: eip.title,
  translations: {
    title: {
      ja: jaTitles[eip.id],
    },
  },
  status: eip.status,
  authors: eip.authors,
  erc: eip.erc,
  star: stars.includes(eip.id),
  flag: flags[eip.id],
}));

export const getEips = (lang: Language = "en"): EIP[] =>
  eips.map((eip) => ({
    ...eip,
    title: lang === "ja" ? eip.translations?.title?.ja || eip.title : eip.title,
  }));
