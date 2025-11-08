import dsl from "../assets/hinta/dsl.png";
import primitive from "../assets/hinta/primitive.png";
import application from "../assets/hinta/application.png";
import gas from "../assets/hinta/gas.png";
import gnark from "../assets/hinta/gnark.png";
import r1cs from "../assets/hinta/r1cs.png";
import plonkish from "../assets/hinta/plonkish.png";
import bugs from "../assets/hinta/bug.png";
import learning from "../assets/hinta/beginner.png";
import intermediate from "../assets/hinta/intermediate.png";
import discovery from "../assets/hinta/awesome.png";
import news from "../assets/hinta/news.png";
import events from "../assets/hinta/events.png";
import curve from "../assets/hinta/curve.png";
import constraint from "../assets/hinta/constraint.png";
import popularSnark from "../assets/hinta/popular-snark.png";
import transpiler from "../assets/hinta/transpiler.png";
import argument from "../assets/hinta/argument.png";
import paper from "../assets/hinta/paper.png";
import research from "../assets/hinta/research.png";
import glossary from "../assets/hinta/glossary.png";
import eips from "../assets/hinta/learn.png";

export interface Item {
  id: string;
  title: string;
  path?: string;
  description: string;
  image: ImageMetadata;
  construction?: boolean;
  sourceFile?: string;
}

export interface Section {
  title: string;
  items: Item[];
}

export const sections: Section[] = [
  {
    title: "Writing Circuits",
    items: [
      {
        id: "dsl",
        title: "Circuit DSL",
        description: "Domain Specific Language for writing zero-knowledge circuits",
        image: dsl,
        sourceFile: "src/data/dsl.ts",
      },
      {
        id: "primitive",
        title: "SNARK Primitives",
        description: "Hash functions, Merkle trees, and other ZK building blocks",
        image: primitive,
        sourceFile: "src/data/primitive.ts",
      },
      {
        id: "application",
        title: "Applications",
        description: "Real-world applications of zero-knowledge proofs",
        image: application,
        sourceFile: "src/data/application.ts",
      },
      {
        id: "gas",
        title: "Gas Estimation",
        description: "Cost estimation for ZK circuits and optimizations",
        image: gas,
        sourceFile: "src/data/gas.ts",
      },
      {
        id: "gnark",
        title: "Gnark Cheatsheet",
        description: "Circuit cheatsheet for gnark",
        image: gnark,
        sourceFile: "src/data/gnark.ts",
      },
      {
        id: "plonkish",
        title: "Plonkish Gadgets",
        description: "Essential gadgets for building Plonkish constraint circuits",
        image: plonkish,
        sourceFile: "src/pages/plonkish.astro",
      },
      {
        id: "r1cs",
        title: "R1CS Gadgets",
        construction: true,
        description: "Essential gadgets for building R1CS constraint circuits",
        image: r1cs,
        sourceFile: "src/data/r1cs.ts",
      },
      {
        id: "bugs",
        title: "Common Bugs",
        construction: true,
        description: "Common ZK bugs and debugging techniques",
        image: bugs,
        sourceFile: "src/data/bugs.ts",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        id: "learning",
        title: "Learning",
        description: "Getting started with zero-knowledge proofs",
        image: learning,
        sourceFile: "src/data/list/learning.ts",
      },
      {
        id: "discovery",
        title: "Discovery",
        description: "Discover the latest news, events, and awesome lists.",
        image: discovery,
        sourceFile: "src/data/list/discovery.ts",
      },
      {
        id: "paper",
        title: "Research Papers",
        construction: true,
        description: "Current research papers in zero-knowledge proofs",
        image: research,
        sourceFile: "src/data/list/paper.ts",
      },
      {
        id: "daily",
        title: "Daily News",
        description: "Daily digest of ZK news",
        image: news,
        sourceFile: "src/data/daily/index.ts",
      },
    ],
  },
  {
    title: "SNARK Systems",
    items: [
      {
        id: "curve",
        title: "Elliptic Curve",
        description: "Comparison of common elliptic curves used in zero knowledge proofs",
        image: curve,
        sourceFile: "src/data/curve.ts",
      },
      {
        id: "constraint",
        title: "Constraint System",
        construction: true,
        description: "Comparing different ZK constraint systems",
        image: constraint,
      },
      {
        id: "snark",
        title: "Popular zkSNARK",
        construction: true,
        description: "Overview of mainstream zkSNARK systems",
        image: popularSnark,
      },
      {
        id: "transpiler",
        title: "Transpiler",
        construction: true,
        description: "Transpiling between different DSL or constraint system",
        image: transpiler,
      },
      {
        id: "argument",
        title: "SNARK Argument",
        construction: true,
        description: "Technical overview of ZK argument structures, like lookup",
        image: argument,
      },
      {
        id: "commitment",
        title: "Commitment Schemes",
        construction: true,
        description: "Commitment schemes from pedersen to KZG",
        image: events,
      },
    ],
  },
  {
    title: "Foundations & Future",
    items: [
      {
        id: "landmark",
        title: "Landmark Papers",
        description: "Essential academic papers in zero-knowledge research",
        image: paper,
        sourceFile: "src/data/landmark.ts",
      },
      {
        id: "glossary",
        title: "Terminology Glossary",
        construction: true,
        description: "Common terms and definitions in zero-knowledge proofs",
        image: glossary,
      },
    ],
  },
  {
    title: "Ecosystem",
    items: [
      {
        id: "eip",
        title: "EIPs",
        description: "ZKP related EIPs",
        image: eips,
        sourceFile: "docs/eip/eip-parser.js",
      },
      {
        id: "bitvm",
        title: "BitVM",
        description:
          "BitVM is the most significant improvement to Bitcoin, with targeting ZK proofs on Bitcoin.",
        construction: true,
        image: intermediate,
        sourceFile: "src/data/bitvm.ts",
      },
    ],
  },
  {
    title: "Interactive",
    items: [
      {
        id: "3color",
        path: "demo/3color",
        title: "3-Colorability",
        description: "Interactive demonstration of the 3-colorability problem",
        image: news,
      },
    ],
  },
];
