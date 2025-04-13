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
      id: "stark-resources",
      title: "STARK Deep Dives",
      description: "Comprehensive resources for understanding STARK proofs in detail.",
      emoji: "🔍",
      links: [
        {
          title: "Vitalik's STARK Series",
          description:
            "Detailed explanation of STARKs from basic principles to implementation details.",
          link: "https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html",
          seriesLinks: [
            {
              title: "Part 1: Proofs with Polynomials",
              link: "https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html",
            },
            {
              title: "Part 2: Thank Goodness It's FRI-day",
              link: "https://vitalik.eth.limo/general/2017/11/22/starks_part_2.html",
            },
            {
              title: "Part 3: Into the Weeds",
              link: "https://vitalik.eth.limo/general/2018/07/21/starks_part_3.html",
            },
          ],
        },
        {
          title: "STARK Anatomy Series",
          description: "Comprehensive breakdown of STARK components and implementation.",
          link: "https://aszepieniec.github.io/stark-anatomy/overview",
          seriesLinks: [
            {
              title: "Part I: STARK Overview",
              link: "https://aszepieniec.github.io/stark-anatomy/overview",
            },
            {
              title: "Part II: Basic Tools",
              link: "https://aszepieniec.github.io/stark-anatomy/basic-tools",
            },
            { title: "Part III: FRI", link: "https://aszepieniec.github.io/stark-anatomy/fri" },
            {
              title: "Part IV: The STARK Polynomial IOP",
              link: "https://aszepieniec.github.io/stark-anatomy/stark",
            },
            {
              title: "Part V: A Rescue-Prime STARK",
              link: "https://aszepieniec.github.io/stark-anatomy/rescue-prime",
            },
            {
              title: "Part VI: Speeding Things Up",
              link: "https://aszepieniec.github.io/stark-anatomy/faster",
            },
          ],
        },
        {
          title: "Brainfuck STARK Tutorial",
          description: "Hands-on tutorial implementing a STARK prover for the Brainfuck language.",
          link: "https://neptune.cash/learn/brainfuck-tutorial/",
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
