export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
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
        image: "/src/assets/hinta/dsl.png"
      },
      { 
        id: "primitive", 
        title: "SNARK Primitives", 
        description: "Hash functions, Merkle trees, and other ZK building blocks",
        image: "/src/assets/hinta/primitive.png"
      },
      { 
        id: "application", 
        title: "Applications", 
        description: "Real-world applications of zero-knowledge proofs",
        image: "/src/assets/hinta/application.png"
      },
      { 
        id: "gas", 
        title: "Gas Estimation", 
        description: "Cost estimation for ZK circuits and optimizations",
        image: "/src/assets/hinta/gas.png"
      },
      { 
        id: "gnark", 
        title: "Gnark Cheatsheet", 
        description: "Circuit cheatsheet for gnark",
        image: "/src/assets/hinta/gnark.png"
      },
      { 
        id: "r1cs", 
        title: "R1CS Gadgets", 
        construction: true,
        description: "Essential gadgets for building R1CS constraint circuits",
        image: "/src/assets/hinta/r1cs.png"
      },
      { 
        id: "plonkish", 
        title: "Plonkish Gadgets", 
        construction: true,
        description: "Essential gadgets for building Plonkish constraint circuits",
        image: "/src/assets/hinta/plonkish.png"
      },
      { 
        id: "bugs", 
        title: "Common Bugs", 
        construction: true,
        description: "Common ZK bugs and debugging techniques",
        image: "/src/assets/hinta/bug.png"
      },
    ]
  },
  {
    title: "Learning Resources",
    items: [
      { 
        id: "beginner", 
        title: "Beginner Learning", 
        description: "Getting started with zero-knowledge proofs",
        image: "/src/assets/hinta/beginner.png"
      },
      { 
        id: "intermediate", 
        title: "Intermediate Learning", 
        description: "Intermediate topics for ZK practitioners",
        image: "/src/assets/hinta/intermediate.png"
      },
      { 
        id: "awesome", 
        title: "Awesome List", 
        description: "The list of curated collection of ZK resources, tools and projects",
        image: "/src/assets/hinta/awesome.png"
      },
      { 
        id: "news", 
        title: "News Sources", 
        description: "Where to find the latest ZK news and research",
        image: "/src/assets/hinta/news.png"
      },
      { 
        id: "events", 
        title: "Events", 
        description: "Where to find the latest ZK events and research",
        image: "/src/assets/hinta/events.png"
      },
    ]
  },
  {
    title: "SNARK Systems",
    items: [
      { 
        id: "curve", 
        title: "Elliptic Curve", 
        description: "Comparison of common elliptic curves used in zero knowledge proofs",
        image: "/src/assets/hinta/curve.png"
      },
      { 
        id: "constraint", 
        title: "Constraint System", 
        description: "Comparing different ZK constraint systems",
        image: "/src/assets/hinta/constraint.png"
      },
      { 
        id: "snark", 
        title: "Popular zkSNARK", 
        description: "Overview of mainstream zkSNARK systems",
        image: "/src/assets/hinta/popular-snark.png"
      },
      { 
        id: "transpiler", 
        title: "Transpiler", 
        construction: true,
        description: "Transpiling between different DSL or constraint system",
        image: "/src/assets/hinta/transpiler.png"
      },
      { 
        id: "argument", 
        title: "SNARK Argument", 
        construction: true,
        description: "Technical overview of ZK argument structures, like lookup",
        image: "/src/assets/hinta/argument.png"
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
        image: "/src/assets/hinta/paper.png"
      },
      { 
        id: "research", 
        title: "Research Directions", 
        construction: true,
        description: "Current research directions in zero-knowledge proofs",
        image: "/src/assets/hinta/research.png"
      },
      { 
        id: "glossary", 
        title: "Terminology Glossary", 
        construction: true,
        description: "Common terms and definitions in zero-knowledge proofs",
        image: "/src/assets/hinta/glossary.png"
      },
    ],
  },
];
