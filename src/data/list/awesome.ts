import type { Resource } from "../list";

export const awesome: Resource = {
  id: "awesome",
  sections: [
    {
      id: "awesome-list",
      title: "Awesome List",
      description: "",
      emoji: "📦",
      links: [
        {
          title: "ventali's Awesome ZK",
          description:
            "A curated list of awesome ZK resources, libraries, tools and more.",
          link: "https://github.com/ventali/awesome-zk",
        },
        {
          title: "sCrypt-Inc's Awesome ZKPs",
          description:
            "A curated list of awesome ZKP resources, libraries, tools and more.",
          link: "https://github.com/sCrypt-Inc/awesome-zero-knowledge-proofs",
        },
        {
          title: "matter-labs' Awesome Zero Knowledge Proofs",
          description:
            "A curated list of awesome things related to learning zero knowledge proofs.",
          link: "https://github.com/matter-labs/awesome-zero-knowledge-proofs",
        },
      ],
    },
    {
      id: "awesome-knowledge-base",
      title: "Knowledge Base",
      description: "",
      emoji: "📚",
      links: [
        {
          title: "ZK Knowledge Base",
          description: "A knowledge base for ZK.",
          link: "https://zkknowledgebase.com/",
        },
      ],
    },
    {
      id: "awesome-cheatsheet",
      title: "Cheatsheets",
      description: "",
      emoji: "🧱",
      links: [
        {
          title: "ZK Basics Cheatsheet",
          description: "A cheatsheet for ZK basics.",
          link: "https://github.com/baro77/ZKbasicsCS",
        },
        {
          title: "Leo by Aleo",
          description:
            "A ZK-focused programming language designed for writing private applications.",
          link: "https://developer.aleo.org/leo/",
        },
      ],
    },
  ],
};
