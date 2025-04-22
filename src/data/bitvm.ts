import type { Reference } from "../components/References.astro";
import type { ResourceLink, ResourceSection } from "./list";

export interface Expert {
  name: string;
  role: string;
  contribution: string;
  background: string;
  links: {
    twitter?: string;
    github?: string;
    youtube?: string;
    website?: string;
    interview?: string;
  };
  image?: string;
}

export const experts: Expert[] = [
  {
    name: "Robin Linus",
    role: "Zero Sync",
    contribution: "Author of BitVM work.",
    background: "Appears to be from Stanford.",
    links: {
      twitter: "https://twitter.com/robin_linus",
    },
    image: "",
  },
  {
    name: "Super Testnet",
    role: "Independent Developer",
    contribution:
      "Author of [supertestnet/tapleaf-circuits](https://github.com/supertestnet/tapleaf-circuits) (BitVM 0.1), considered the earliest implementation of BitVM code.",
    background:
      "Independent Bitcoin, Lightning, and Nostr developer, also chairman of Pleb Lab FOSS. [Watch Interview](https://www.youtube.com/watch?v=dsOjDvHONdM)",
    links: {
      twitter: "https://twitter.com/super_testnet",
      youtube: "https://www.youtube.com/@highlevelbitcoin",
    },
    image: "",
  },
  {
    name: "Carter Feldman",
    role: "QED Protocol",
    contribution: "Claims to have implemented Groth16 verification computation in Bitcoin script.",
    background:
      "Graduated from the University of Illinois Urbana-Champaign (UIUC), based in Hong Kong, speaks Chinese. [CV](https://www.linkedin.com/in/carter-feldman-b4a13568/)",
    links: {
      twitter: "https://twitter.com/cmpeq",
      youtube: "https://www.youtube.com/@CarterFeldman",
      website: "https://www.linkedin.com/in/carter-feldman-b4a13568/",
    },
    image: "",
  },
  {
    name: "Weikeng Chen",
    role: "L2 Iterative",
    contribution: "Implemented M31 and BabyBear domain calculations in Bitcoin script.",
    background:
      "PhD from Berkeley. Also one of the main participants in the well-known ZKP project arkworks.",
    links: {
      twitter: "https://twitter.com/weikengchen",
      website: "https://www.chenweikeng.com/",
    },
    image: "",
  },
  {
    name: "Andrew Wang",
    role: "Developer",
    contribution:
      "Optimized [u30_add](https://github.com/BitVM/BitVM/pull/33), was the first to submit a [PR](https://github.com/BitVM/BitVM/pull/54) in the sha256 challenge.",
    background: 'Unknown, appears to be in Beijing, Twitter account contains "binance".',
    links: {
      twitter: "https://twitter.com/czxbinance",
      github: "https://github.com/wz14",
    },
    image: "",
  },
  {
    name: "Comcat Li",
    role: "OKX",
    contribution:
      "Optimized [u32_shr](https://github.com/BitVM/BitVM/pull/59) in the sha256 challenge.",
    background: "From OKX.",
    links: {},
    image: "",
  },
  {
    name: "Martin Jonas",
    role: "BitVMX",
    contribution: "Optimized blake3.",
    background: "From BitVMX.",
    links: {
      github: "https://github.com/jonasmartin",
    },
    image: "",
  },
  {
    name: "Shinobi (SHI256)",
    role: "Bitcoin Magazine",
    contribution:
      "Published articles in Bitcoin Magazine, asks technical novice questions in the TG group.",
    background: "Was criticized by Robin for driving the narrative.",
    links: {
      twitter: "https://twitter.com/shinobimonkey",
    },
    image: "",
  },
  {
    name: "Björn Tackmann",
    role: "DFINITY",
    contribution: "Discussed threshold Schnorr signatures.",
    background: "Head of research at DFINITY.",
    links: {},
    image: "",
  },
];

export const resources: ResourceSection[] = [
  {
    id: "Links",
    title: "Links",
    emoji: "🔗",
    links: [
      {
        title: "BitVM Official Website",
        link: "https://bitvm.org/",
        description: "Official website for BitVM with documentation and resources",
      },
      {
        title: "BitVM GitHub Repository",
        link: "https://github.com/BitVM/BitVM",
        description: "Official GitHub repository for BitVM implementation",
      },
      {
        title: "BitVM Telegram Group",
        link: "https://t.me/bitVM_chat",
        description: "Official Telegram group for BitVM discussions",
      },
      {
        title: "BitVM2: Bridging Bitcoin to Second Layers",
        link: "https://bitvm.org/bitvm_bridge.pdf",
        description: "Technical paper on BitVM2 bridge implementation",
      },
      {
        title: "BitVM Crash Course",
        link: "https://www.youtube.com/watch?v=_Met2lUO0P0",
        description: "Video introduction to BitVM concepts and implementation",
      },
    ],
  },
  {
    id: "Tools",
    title: "Tools",
    emoji: "🔧",
    links: [
      {
        title: "BitIDE by QED Protocol",
        link: "https://bitide.qedprotocol.com/",
        description: "Bitcoin Script IDE for development and testing",
      },
      {
        title: "Bitauth IDE",
        link: "https://ide.bitauth.com/",
        description: "Interactive development environment for Bitcoin Script",
      },
      {
        title: "Bitcoin Transaction Decoder",
        link: "https://www.blockchain.com/explorer/assets/btc/decode-transaction",
        description: "Tool for decoding Bitcoin transactions",
      },
      {
        title: "Rust Bitcoin Script Stack",
        link: "https://github.com/FairgateLabs/rust-bitcoin-script-stack",
        description: "Optimized debugging experience for Bitcoin Script",
      },
    ],
  },
];

export const references: Reference[] = [
  {
    id: "bitvm2-bridge",
    title: "BitVM2: Bridging Bitcoin to Second Layers",
    authors: ["R. Linus", "L. Aumayr", "A. Zamyatin", "A. Pelosi", "Z. Avarikioti", "M. Maffei"],
    link: "https://bitvm.org/bitvm_bridge.pdf",
    year: "2024",
  },
  {
    id: "bitvm2-groth16",
    title: "BitVM2 Groth16 Specification",
    authors: ["Fiamma Chain"],
    link: "https://github.com/fiamma-chain/BitVM2-groth16-specification/blob/main/main.pdf",
    year: "2024",
  },
  {
    id: "mit-bitcoin-expo",
    title: "MIT Bitcoin Expo 2024: Scaling Up - BitVM",
    authors: ["Robin Linus"],
    link: "https://www.youtube.com/watch?v=nhR_g9hPnqM",
    year: "2024",
  },
  {
    id: "bitvm-crash-course",
    title: "BitVM Crash Course",
    authors: [],
    link: "https://www.youtube.com/watch?v=_Met2lUO0P0",
    year: "2024",
  },
  {
    id: "on-proving-pairings",
    title: "On Proving Pairings",
    authors: [],
    link: "https://eprint.iacr.org/2024/640",
    year: "2024",
  },
  {
    id: "op-checksigfromstack",
    title: "OP_CHECKSIGFROMSTACK",
    authors: [],
    link: "https://bitcoinops.org/en/topics/op_checksigfromstack/",
    year: "2023",
  },
  {
    id: "lamport-signature",
    title: "Lamport One-Time Signature Scheme",
    authors: [],
    link: "https://www.geeksforgeeks.org/lamport-one-time-signature-scheme/",
    year: "2022",
  },
  {
    id: "winternitz-signature",
    title: "Winternitz One-Time Signature Scheme",
    authors: [],
    link: "https://www.geeksforgeeks.org/winternitz-one-time-signature-scheme/",
    year: "2022",
  },
];
