import type { Resource } from "../list";

export const beginner: Resource = {
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
};
