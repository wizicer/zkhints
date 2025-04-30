import type { ResourceSection } from "../../list";

export const io: ResourceSection = {
  id: "io",
  title: "Indistinguishability Obfuscation",
  description: "Resources about indistinguishability obfuscation (iO).",
  emoji: "🔒",
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
};
