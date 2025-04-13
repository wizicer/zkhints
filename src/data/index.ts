import dsl from "../assets/hinta/dsl.png";
import primitive from "../assets/hinta/primitive.png";
import application from "../assets/hinta/application.png";
import gas from "../assets/hinta/gas.png";
import gnark from "../assets/hinta/gnark.png";
import r1cs from "../assets/hinta/r1cs.png";
import plonkish from "../assets/hinta/plonkish.png";
import bugs from "../assets/hinta/bug.png";
import beginner from "../assets/hinta/beginner.png";
import intermediate from "../assets/hinta/intermediate.png";
import awesome from "../assets/hinta/awesome.png";
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

export interface Item {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  construction?: boolean;
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
      },
      {
        id: "primitive",
        title: "SNARK Primitives",
        description: "Hash functions, Merkle trees, and other ZK building blocks",
        image: primitive,
      },
      {
        id: "application",
        title: "Applications",
        description: "Real-world applications of zero-knowledge proofs",
        image: application,
      },
      {
        id: "gas",
        title: "Gas Estimation",
        description: "Cost estimation for ZK circuits and optimizations",
        image: gas,
      },
      {
        id: "gnark",
        title: "Gnark Cheatsheet",
        description: "Circuit cheatsheet for gnark",
        image: gnark,
      },
      {
        id: "plonkish",
        title: "Plonkish Gadgets",
        description: "Essential gadgets for building Plonkish constraint circuits",
        image: plonkish,
      },
      {
        id: "r1cs",
        title: "R1CS Gadgets",
        construction: true,
        description: "Essential gadgets for building R1CS constraint circuits",
        image: r1cs,
      },
      {
        id: "bugs",
        title: "Common Bugs",
        construction: true,
        description: "Common ZK bugs and debugging techniques",
        image: bugs,
      },
    ],
  },
  {
    title: "Learning Resources",
    items: [
      {
        id: "beginner",
        title: "Beginner Learning",
        description: "Getting started with zero-knowledge proofs",
        image: beginner,
      },
      {
        id: "intermediate",
        title: "Intermediate Learning",
        description: "Intermediate topics for ZK practitioners",
        image: intermediate,
      },
      {
        id: "awesome",
        title: "Awesome List",
        description: "The list of curated collection of ZK resources, tools and projects",
        image: awesome,
      },
      {
        id: "news",
        title: "News Sources",
        description: "Where to find the latest ZK news and research",
        image: news,
      },
      {
        id: "events",
        title: "Events",
        description: "Where to find the latest ZK events and research",
        image: events,
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
    ],
  },
  {
    title: "Foundations & Future",
    items: [
      {
        id: "paper",
        title: "Landmark Papers",
        description: "Essential academic papers in zero-knowledge research",
        image: paper,
      },
      {
        id: "research",
        title: "Research Directions",
        construction: true,
        description: "Current research directions in zero-knowledge proofs",
        image: research,
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
];
