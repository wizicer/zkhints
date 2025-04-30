import type { ResourceSection } from "../../list";

export const cryptography: ResourceSection = {
  id: "cryptography-theory",
  title: "Cryptography & Theory",
  description: "Mathematical constructions, cryptographic primitives, and security definitions",
  emoji: "🔐",
  subsections: [
    {
      id: "pairing",
      title: "Pairing-Based Cryptography",
      emoji: "🔗",
      links: [],
    },
    {
      id: "algebra",
      title: "Algebraic Foundations",
      emoji: "📐",
      links: [],
    },
    {
      id: "io",
      title: "Indistinguishability Obfuscation",
      emoji: "🎭",
      links: [
        {
          title: "Diamond IO",
          description: "A new approach to iO.",
          link: "https://eprint.iacr.org/2025/236",
          seriesLinks: [
            {
              title: "The first signs of Practical iO",
              link: "https://machina-io.com/posts/hello_world_first.html",
            },
            {
              title: "Diamond IO",
              link: "https://github.com/MachinaIO/diamond-io",
            },
          ],
        },
      ],
    },
  ],
  links: [],
};
