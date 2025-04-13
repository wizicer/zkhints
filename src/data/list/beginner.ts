import type { Resource } from "../list";

export const beginner: Resource = {
  id: "beginner",
  sections: [
    {
      id: "intro",
      title: "What is Zero-Knowledge?",
      description: "Basic explanations and intuitive overviews of Zero-Knowledge Proofs.",
      emoji: "🧠",
      links: [
        {
          title: "A beginner's intro to coding zero-knowledge proofs",
          description:
            "This article will cover what a zero-knowledge proof is, how it is used from a developer's perspective, and go through a few languages for writing them.",
          link: "https://dev.to/spalladino/a-beginners-intro-to-coding-zero-knowledge-proofs-c56",
        },
        {
          title: "Zero Knowledge Proofs MOOC, Spring 2023",
          description: "A online MOOC from University of California, Berkeley.",
          recommended: true,
          link: "https://rdi.berkeley.edu/zk-learning/",
        },
      ],
    },
    {
      id: "tools",
      title: "Beginner-Friendly Tools",
      description: "Tools and playgrounds to help beginners start experimenting with ZK.",
      emoji: "🛠️",
      links: [],
    },
    {
      id: "playgrounds",
      title: "Online Playgrounds",
      description:
        "Interactive online environments to experiment with ZK circuits without installation.",
      emoji: "🎮",
      links: [
        {
          title: "ZKrepl",
          description: "An online REPL for Circom circuits.",
          link: "https://zkrepl.dev/",
        },
        {
          title: "Halo2 REPL",
          description: "Interactive environment for Halo2 circuit development.",
          link: "https://www.halo2repl.dev/",
        },
        {
          title: "Plonk Pro",
          description: "Online playground for PLONKish ZK circuits (halo2/plonky3).",
          link: "https://plonk.pro/",
        },
        {
          title: "Gnark Playground",
          description: "Interactive environment for Gnark circuit development.",
          link: "https://play.gnark.io/",
        },
        {
          title: "ZK Accel Playground",
          description: "Interactive playground for ZK circuit development.",
          link: "https://play.zkaccel.io/",
          rip: true,
        },
      ],
    },
  ],
};
