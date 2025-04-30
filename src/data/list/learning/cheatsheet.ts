import type { ResourceSection } from "../../list";

export const cheatsheet: ResourceSection = {
  id: "cheatsheet",
  title: "Cheatsheets",
  description: "Cheatsheets for ZK related works.",
  emoji: "🧱",
  links: [
    {
      title: "ZK Basics Cheatsheet",
      description: "A cheatsheet for ZK basics.",
      link: "https://github.com/baro77/ZKbasicsCS",
    },
    {
      title: "Leo by Aleo",
      description: "A ZK-focused programming language designed for writing private applications.",
      link: "https://developer.aleo.org/leo/",
    },
    {
      title: "ProofLab.dev",
      description: "Comprehensive, up-to-date reports and benchmarks for zkVM.",
      link: "https://prooflab.dev/",
    },
  ],
};
