import type { Resource } from "../list";

export const intermediate: Resource = {
  id: "intermediate",
  sections: [
    {
      id: "proof-systems",
      title: "Understanding Proof Systems",
      description: "Dive deeper into SNARKs, STARKs, and other proving systems.",
      emoji: "📚",
      links: [
        {
          title: "Vitalik's ZK-SNARKs Explained",
          description: "In-depth but accessible explanation of zkSNARKs by Vitalik.",
          link: "https://vitalik.eth.limo/general/2022/12/18/zksnarks.html",
        },
        {
          title: "ZK STARKs Overview",
          description: "Explains the motivation and construction of STARKs.",
          link: "https://starkware.co/stark/",
        },
      ],
    },
    {
      id: "dsl-guides",
      title: "ZK DSL Guides",
      description: "Intermediate tutorials on languages like Circom and Noir.",
      emoji: "💻",
      links: [
        {
          title: "Noir Book",
          description: "Official Noir language documentation and guides.",
          link: "https://noir-lang.org/",
        },
        {
          title: "Awesome Circom",
          description: "A collection of Circom examples and useful links.",
          link: "https://github.com/Obscuronet/awesome-circom",
        },
      ],
    },
  ],
};
