import type { Reference } from "../components/References.astro";
import type { Language } from "../i18n";
import { dslExamples } from "./dsl/example";
import { dslDefinitions as lowlevel } from "./dsl/lowlevel";
import { dslDefinitions as vm } from "./dsl/vm";

export interface DslDefinition {
  name: string;
  link: string | null;
  company_or_brand: string | null;
  arithmetization: string | null;
  syntax: string | null;
  programming_capability: string | null;
  backend_supported: string | null;
  note: string | null;
}

export interface DslExample {
  name: string;
  exampleCode: string;
  exampleCodeHighlightType: string;
  exampleLink: string;
  comment: string;
}

export const dslDefinitions: DslDefinition[] = [...lowlevel, ...vm];

const dslTextJa: Record<string, string> = {
  Yes: "はい",
  No: "いいえ",
  VM: "VM",
  "Constraint definition": "制約定義",
  Special: "特殊",
  "Abstract ACIR intermediate representation (trace), backend can be selected later":
    "抽象 ACIR 中間表現 (trace)。backend は後から選択可能",
  "Low-level assembly language": "低レベル assembly language",
  "High-level language built on top of Vamp-IR": "Vamp-IR 上に構築された高レベル language",
  "More like a simplified wrapper around Halo2 API": "Halo2 API の簡易 wrapper に近い",
  "Tries to do pure lookup IR, relatively rough, only one sentence in the readme, no other examples found":
    "pure lookup IR を目指しているが、まだ粗い。README に 1 文あるのみで他の例は見つからない",
  "Backend is Aurora": "backend は Aurora",
  "Supports FHE and ZKP": "FHE と ZKP を support",
  "Officially abandoned by the team in 2021": "2021 年に team が公式に開発停止",
  "Built on MidenVM": "MidenVM 上に構築",
  "Folded Accumulated Relaxed R1CS": "Folded Accumulated Relaxed R1CS",
  "Accumulated Folding Spartan + {Zeromorph, PSE-Halo2 (KZG)}, Rust":
    "Accumulated Folding Spartan + {Zeromorph, PSE-Halo2 (KZG)}, Rust",
  "Lookup, Sumcheck, Offline Mem Check": "Lookup, Sumcheck, Offline Mem Check",
};

const translate = (value: string | null, lang: Language): string | null => {
  if (lang !== "ja" || !value) return value;
  return dslTextJa[value] || value;
};

export const getDslDefinitions = (lang: Language = "en"): DslDefinition[] =>
  dslDefinitions.map((definition) => ({
    ...definition,
    arithmetization: translate(definition.arithmetization, lang),
    syntax: translate(definition.syntax, lang),
    programming_capability: translate(definition.programming_capability, lang),
    backend_supported: translate(definition.backend_supported, lang),
    note: translate(definition.note, lang),
  }));

export const references: Reference[] = [
  {
    title: "",
    authors: "",
    year: "2025",
    link: "https://github.com/rkdud007/awesome-zkvm",
  },
];

export const examples = dslExamples;
