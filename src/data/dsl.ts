import type { Reference } from "../components/References.astro";
import { dslExamples } from "./dsl/example";
import { dslDefinitions as lowlevel } from "./dsl/lowlevel";
import { dslDefinitions as vm } from "./dsl/vm";

export interface DslDefinition {
  name: string;
  link: string | null;
  company_or_brand: string | null;
  arithmetization: string | null;
  syntax: string | null;
  programming_capability: "Yes" | "No" | "VM" | null;
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

export const references: Reference[] = [
  {
    title: "",
    authors: "",
    year: "2025",
    link: "https://github.com/rkdud007/awesome-zkvm",
  },
];

export const examples = dslExamples;
