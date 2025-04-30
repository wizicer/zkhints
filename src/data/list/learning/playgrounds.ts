import type { ResourceSection } from "../../list";

export const playgrounds: ResourceSection = {
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
};
