import type { ResourceSection } from "../../list";

export const knowledgeBase: ResourceSection = {
  id: "knowledge-base",
  title: "Knowledge Base",
  description: "A collective of resources for learning ZK thoroughly.",
  emoji: "📚",
  links: [
    {
      title: "Zero-Knowledge Proofs (Science Resources)",
      description: "A collective of resources for learning ZK on the academic aspect.",
      link: "https://zkp.science/",
      recommended: true,
    },
    {
      title: "ZK Knowledge Base",
      description: "A knowledge base for ZK.",
      link: "https://zkknowledgebase.com/",
    },
    {
      title: "Noir Book",
      description: "Official Noir language documentation and guides.",
      link: "https://noir-lang.org/",
    },
  ],
};
