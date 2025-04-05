export interface ResourceLink {
  title: string;
  description: string;
  link: string;
  recommended?: boolean;
}

export interface ResourceSection {
  id: string;
  title: string;
  description?: string;
  emoji: string;
  links: ResourceLink[];
}

export interface Resource {
  id: string;
  sections: ResourceSection[];
}

export const resourceList: Resource[] = [
  {
    id: "beginner",
    sections: [
      {
        id: "intro",
        title: "What is Zero-Knowledge?",
        description:
          "Basic explanations and intuitive overviews of Zero-Knowledge Proofs.",
        emoji: "🧠",
        links: [
          {
            title: "ZK101 by a16z",
            description:
              "A simple and visual explanation of ZKPs from a16z Crypto.",
            link: "https://a16zcrypto.com/zero-knowledge-101/",
            recommended: true,
          },
          {
            title: "ZK Whiteboard Sessions",
            description: "Visual whiteboard sessions explaining ZK concepts.",
            link: "https://www.zkwhiteboard.com/",
          },
        ],
      },
      {
        id: "tools",
        title: "Beginner-Friendly Tools",
        description:
          "Tools and playgrounds to help beginners start experimenting with ZK.",
        emoji: "🛠️",
        links: [
          {
            title: "ZK Playground",
            description:
              "An interactive environment to build and run ZK circuits.",
            link: "https://zkplayground.com/",
          },
          {
            title: "Circom Starter",
            description:
              "A minimal boilerplate to write your first Circom circuit.",
            link: "https://github.com/iden3/circom-starter",
          },
        ],
      },
    ],
  },
  {
    id: "intermediate",
    sections: [
      {
        id: "proof-systems",
        title: "Understanding Proof Systems",
        description:
          "Dive deeper into SNARKs, STARKs, and other proving systems.",
        emoji: "📚",
        links: [
          {
            title: "Vitalik's ZK-SNARKs Explained",
            description:
              "In-depth but accessible explanation of zkSNARKs by Vitalik.",
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
        description:
          "Intermediate tutorials on languages like Circom and Noir.",
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
  },
  {
    id: "awesome",
    sections: [
      {
        id: "libraries",
        title: "Libraries & Frameworks",
        description: "Popular open-source libraries for building with ZK.",
        emoji: "📦",
        links: [
          {
            title: "snarkjs",
            description:
              "JavaScript tooling for Groth16 and PLONK proof generation and verification.",
            link: "https://github.com/iden3/snarkjs",
          },
          {
            title: "halo2-lib",
            description: "Modular Halo2 gadgets in Rust.",
            link: "https://github.com/zkemail/halo2-lib",
          },
        ],
      },
      {
        id: "zk-vms",
        title: "zkVMs & DSLs",
        description: "Virtual machines and languages built for ZK development.",
        emoji: "🧱",
        links: [
          {
            title: "RISC Zero",
            description: "A general-purpose zkVM that supports Rust programs.",
            link: "https://www.risczero.com/",
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
  },
  {
    id: "news",
    sections: [
      {
        id: "newsletters",
        title: "Newsletters & Weekly Updates",
        description:
          "Trusted sources for staying up to date on ZK-related developments.",
        emoji: "📰",
        links: [
          {
            title: "zkNews",
            description: "Daily summaries of ZK papers, blogs, and events.",
            link: "https://zknews.ai/",
          },
          {
            title: "ZKMesh",
            description:
              "Weekly zk-focused newsletter curated by Geometry and friends.",
            link: "https://zkmesh.substack.com/",
          },
        ],
      },
      {
        id: "feeds",
        title: "Realtime Updates & Blogs",
        description:
          "Dynamic sources like blog posts, Twitter accounts, and GitHub feeds.",
        emoji: "📡",
        links: [
          {
            title: "ZK Collective",
            description:
              "News, updates and podcasts from leading ZK researchers and teams.",
            link: "https://www.zkcollective.org/",
          },
          {
            title: "Zero Knowledge Podcast",
            description:
              "Weekly podcast exploring ZK research and applications.",
            link: "https://www.zeroknowledge.fm/",
          },
        ],
      },
    ],
  },
  {
    id: "paper",
    sections: [
      {
        id: "paper",
        title: "Papers",
        description: "",
        emoji: "📚",
        links: [
          {
            title: "ZK101 by a16z",
            description: "A simple and visual explanation of ZKPs from a16z.",
            link: "https://a16zcrypto.com/zero-knowledge-101/",
          },
          {
            title: "ZK Whiteboard Sessions",
            description: "Visual whiteboard sessions explaining ZK concepts.",
            link: "https://www.zkwhiteboard.com/",
          },
        ],
      },
    ],
  }
];
