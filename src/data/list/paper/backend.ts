import type { ResourceSection } from "../../list";

export const backend: ResourceSection = {
  id: "backend-proving",
  title: "Backend & Proving System",
  description: "Proving systems, structural optimizations, and reusable backend modules",
  emoji: "⚙️",
  subsections: [
    {
      id: "proving-schemes",
      title: "Proving Schemes",
      emoji: "🔍",
      links: [],
    },
    {
      id: "optimization",
      title: "Proof Optimization Techniques",
      emoji: "⚡",
      links: [],
    },
    {
      id: "zkvm",
      title: "zkVM",
      emoji: "💻",
      links: [],
    },
    {
      id: "primitives",
      title: "Primitives",
      emoji: "🧩",
      links: [],
    },
  ],
  links: [],
};
