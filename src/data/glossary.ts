import type { Reference } from "../components/References.astro";

export interface GlossaryTerm {
  term: string;
  abbreviation?: string;
  definition: string;
  relatedTerms?: string[];
  links?: { title: string; url: string }[];
}

export interface GlossaryCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  terms: GlossaryTerm[];
}

export const glossaryCategories: GlossaryCategory[] = [
  {
    id: "fundamentals",
    title: "Fundamentals",
    emoji: "🧱",
    description: "Core concepts and foundational terms in zero-knowledge proofs",
    terms: [
      {
        term: "Zero-Knowledge Proof",
        abbreviation: "ZKP",
        definition:
          "A cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true, without revealing any information beyond the validity of the statement itself.",
        relatedTerms: ["Prover", "Verifier", "Witness"],
      },
      {
        term: "Prover",
        definition:
          "The party in a zero-knowledge protocol that possesses secret information (the witness) and wants to convince the verifier of a statement's truth without revealing the secret.",
        relatedTerms: ["Verifier", "Witness"],
      },
      {
        term: "Verifier",
        definition:
          "The party in a zero-knowledge protocol that checks the validity of a proof without learning any secret information beyond whether the statement is true or false.",
        relatedTerms: ["Prover", "Proof"],
      },
      {
        term: "Witness",
        definition:
          "The secret input or private data that the prover uses to generate a proof. The witness is never revealed to the verifier but is essential for creating a valid proof.",
        relatedTerms: ["Prover", "Public Input"],
      },
      {
        term: "Public Input",
        definition:
          "Data that is known to both the prover and verifier, used alongside the witness to generate and verify proofs. Also called public parameters or instance.",
        relatedTerms: ["Witness", "Statement"],
      },
      {
        term: "Statement",
        definition:
          "The claim being proven in a zero-knowledge proof. It typically asserts that the prover knows a witness satisfying certain conditions without revealing the witness itself.",
        relatedTerms: ["Witness", "Circuit"],
      },
      {
        term: "Soundness",
        definition:
          "A security property ensuring that a dishonest prover cannot convince the verifier of a false statement, except with negligible probability.",
        relatedTerms: ["Completeness", "Zero-Knowledge"],
      },
      {
        term: "Completeness",
        definition:
          "A property guaranteeing that an honest prover with a valid witness can always convince the verifier that the statement is true.",
        relatedTerms: ["Soundness", "Zero-Knowledge"],
      },
      {
        term: "Knowledge Soundness",
        definition:
          "A stronger form of soundness that guarantees if a prover can convince a verifier, then the prover must actually 'know' the witness (extractable via an extractor algorithm).",
        relatedTerms: ["Soundness", "Extractor"],
      },
    ],
  },
  {
    id: "proof-systems",
    title: "Proof Systems",
    emoji: "⚙️",
    description: "Different types of zero-knowledge proof systems and their variants",
    terms: [
      {
        term: "zkSNARK",
        abbreviation: "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge",
        definition:
          "A type of ZKP that is succinct (small proof size), non-interactive (no back-and-forth communication), and provides a proof of knowledge. Most zkSNARKs require a trusted setup.",
        relatedTerms: ["zkSTARK", "Trusted Setup", "Succinctness"],
      },
      {
        term: "zkSTARK",
        abbreviation: "Zero-Knowledge Scalable Transparent Argument of Knowledge",
        definition:
          "A type of ZKP that is transparent (no trusted setup required), scalable, and post-quantum secure. STARKs typically have larger proof sizes than SNARKs but avoid trusted setup assumptions.",
        relatedTerms: ["zkSNARK", "FRI", "Transparency"],
      },
      {
        term: "PLONK",
        abbreviation:
          "Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge",
        definition:
          "A universal zkSNARK construction that uses a single trusted setup for all circuits of a given size. It's widely adopted due to its flexibility and efficiency.",
        relatedTerms: ["Universal Setup", "KZG", "Polynomial Commitment"],
      },
      {
        term: "Groth16",
        definition:
          "One of the most efficient zkSNARK constructions in terms of proof size and verification time. Requires a circuit-specific trusted setup but produces very compact proofs.",
        relatedTerms: ["Trusted Setup", "Pairing-based"],
      },
      {
        term: "Halo",
        definition:
          "A recursive proof composition technique that eliminates the need for a trusted setup by using a novel polynomial commitment scheme. Enables efficient proof aggregation.",
        relatedTerms: ["Recursion", "IPA", "Accumulation"],
      },
      {
        term: "Bulletproofs",
        definition:
          "A non-interactive zero-knowledge proof system that doesn't require a trusted setup. Known for efficient range proofs but has linear verification time.",
        relatedTerms: ["Range Proof", "IPA"],
      },
      {
        term: "Nova",
        definition:
          "A folding scheme for incrementally verifiable computation (IVC) that enables efficient recursive proof composition with minimal overhead per step.",
        relatedTerms: ["Folding", "IVC", "Recursion"],
      },
    ],
  },
  {
    id: "constraint-systems",
    title: "Constraint Systems",
    emoji: "🔗",
    description: "Representations of computations as mathematical constraints",
    terms: [
      {
        term: "R1CS",
        abbreviation: "Rank-1 Constraint System",
        definition:
          "A constraint system where each constraint is of the form (a · s) * (b · s) = (c · s), where a, b, c are vectors and s is the witness vector. Used in Groth16 and other SNARKs.",
        relatedTerms: ["Constraint", "QAP", "Witness"],
      },
      {
        term: "Plonkish",
        definition:
          "A family of arithmetization schemes based on PLONK that use a table-based approach with custom gates and lookup arguments. Includes Halo2, Plonky2, etc.",
        relatedTerms: ["PLONK", "Custom Gates", "Lookup"],
      },
      {
        term: "AIR",
        abbreviation: "Algebraic Intermediate Representation",
        definition:
          "A constraint system used in STARKs that represents computation as polynomial constraints over an execution trace. Constraints are checked at every row of the trace.",
        relatedTerms: ["STARK", "Execution Trace", "Transition Constraints"],
      },
      {
        term: "QAP",
        abbreviation: "Quadratic Arithmetic Program",
        definition:
          "A representation of R1CS constraints as polynomials, enabling efficient verification using polynomial identity testing. Core to many SNARK constructions.",
        relatedTerms: ["R1CS", "Polynomial"],
      },
      {
        term: "Circuit",
        definition:
          "An arithmetic circuit representing a computation as a directed acyclic graph of addition and multiplication gates over a finite field. The standard way to express computations in ZK systems.",
        relatedTerms: ["Gate", "Wire", "Constraint"],
      },
      {
        term: "Constraint",
        definition:
          "A mathematical equation that must be satisfied by the witness values. Circuits are compiled into sets of constraints that the prover must satisfy.",
        relatedTerms: ["Circuit", "R1CS", "Satisfiability"],
      },
      {
        term: "Arithmetization",
        definition:
          "The process of converting a computation into an arithmetic representation (like R1CS, AIR, or Plonkish) that can be used in a zero-knowledge proof system.",
        relatedTerms: ["R1CS", "AIR", "Circuit"],
      },
    ],
  },
  {
    id: "cryptographic-primitives",
    title: "Cryptographic Primitives",
    emoji: "🔐",
    description: "Building blocks used in zero-knowledge proof constructions",
    terms: [
      {
        term: "Polynomial Commitment",
        definition:
          "A cryptographic primitive that allows a prover to commit to a polynomial and later prove evaluations of that polynomial at specific points without revealing the entire polynomial.",
        relatedTerms: ["KZG", "FRI", "IPA"],
      },
      {
        term: "KZG Commitment",
        abbreviation: "Kate-Zaverucha-Goldberg",
        definition:
          "A polynomial commitment scheme using elliptic curve pairings. Produces constant-size commitments and proofs but requires a trusted setup.",
        relatedTerms: ["Polynomial Commitment", "Pairing", "Trusted Setup"],
      },
      {
        term: "FRI",
        abbreviation: "Fast Reed-Solomon Interactive Oracle Proof of Proximity",
        definition:
          "A protocol used in STARKs to prove that a committed function is close to a low-degree polynomial. Enables transparent (no trusted setup) polynomial commitments.",
        relatedTerms: ["STARK", "Reed-Solomon", "Low-Degree Test"],
      },
      {
        term: "IPA",
        abbreviation: "Inner Product Argument",
        definition:
          "A polynomial commitment scheme that doesn't require pairings or trusted setup. Used in Bulletproofs and Halo. Has logarithmic proof size but linear verification time.",
        relatedTerms: ["Bulletproofs", "Halo", "Polynomial Commitment"],
      },
      {
        term: "Pedersen Commitment",
        definition:
          "A cryptographic commitment scheme that is computationally binding and perfectly hiding. Often used to commit to values in ZK protocols.",
        relatedTerms: ["Commitment", "Hiding", "Binding"],
      },
      {
        term: "Merkle Tree",
        definition:
          "A tree data structure where each leaf contains a hash of data and each non-leaf node contains a hash of its children. Used for efficient membership proofs in ZK systems.",
        relatedTerms: ["Hash Function", "Membership Proof"],
      },
      {
        term: "Fiat-Shamir Transform",
        definition:
          "A technique to convert an interactive proof into a non-interactive one by replacing the verifier's random challenges with hash outputs of the transcript.",
        relatedTerms: ["Non-Interactive", "Random Oracle"],
      },
    ],
  },
  {
    id: "advanced-concepts",
    title: "Advanced Concepts",
    emoji: "🚀",
    description: "Advanced techniques and optimizations in ZK systems",
    terms: [
      {
        term: "Recursion",
        definition:
          "The technique of verifying a proof inside another proof, enabling proof composition and aggregation. Essential for scaling ZK systems.",
        relatedTerms: ["IVC", "Folding", "Aggregation"],
      },
      {
        term: "IVC",
        abbreviation: "Incrementally Verifiable Computation",
        definition:
          "A technique where each step of a computation produces a proof that verifies all previous steps, enabling efficient verification of long-running computations.",
        relatedTerms: ["Recursion", "Nova", "Folding"],
      },
      {
        term: "Folding Scheme",
        definition:
          "A technique to combine multiple instances of a relation into a single instance, enabling efficient recursive proof composition without full SNARK verification at each step.",
        relatedTerms: ["Nova", "IVC", "Accumulation"],
      },
      {
        term: "Lookup Argument",
        definition:
          "A technique that allows proving that values in a computation belong to a predefined table, enabling efficient implementation of non-arithmetic operations.",
        relatedTerms: ["Plookup", "Custom Gates"],
      },
      {
        term: "Custom Gates",
        definition:
          "In Plonkish systems, gates that go beyond simple addition and multiplication, allowing more efficient representation of specific operations.",
        relatedTerms: ["Plonkish", "Gate"],
      },
      {
        term: "Proof Aggregation",
        definition:
          "Combining multiple proofs into a single proof that can be verified more efficiently than verifying each proof individually.",
        relatedTerms: ["Recursion", "Batching"],
      },
      {
        term: "Trusted Setup",
        definition:
          "A one-time ceremony to generate public parameters for certain ZK systems. The secret randomness used must be destroyed; if compromised, fake proofs could be created.",
        relatedTerms: ["CRS", "Powers of Tau", "Toxic Waste"],
      },
      {
        term: "Universal Setup",
        definition:
          "A trusted setup that can be reused for any circuit up to a certain size, unlike circuit-specific setups that must be regenerated for each new circuit.",
        relatedTerms: ["PLONK", "Trusted Setup"],
      },
    ],
  },
  {
    id: "zk-applications",
    title: "ZK Applications",
    emoji: "🌐",
    description: "Common applications and use cases of zero-knowledge proofs",
    terms: [
      {
        term: "zkRollup",
        definition:
          "A Layer 2 scaling solution that bundles (rolls up) transactions off-chain and posts a validity proof on-chain, inheriting the security of the base layer while increasing throughput.",
        relatedTerms: ["Layer 2", "Validity Proof", "Data Availability"],
      },
      {
        term: "zkEVM",
        definition:
          "A zero-knowledge virtual machine compatible with the Ethereum Virtual Machine, allowing existing Ethereum smart contracts to run with ZK proof generation.",
        relatedTerms: ["zkRollup", "EVM", "Compatibility"],
      },
      {
        term: "zkVM",
        abbreviation: "Zero-Knowledge Virtual Machine",
        definition:
          "A virtual machine that can generate zero-knowledge proofs of program execution. Examples include RISC Zero, SP1, and various zkEVMs.",
        relatedTerms: ["zkEVM", "RISC-V"],
      },
      {
        term: "Private Transaction",
        definition:
          "A blockchain transaction where details like sender, receiver, or amount are hidden using zero-knowledge proofs while still proving validity.",
        relatedTerms: ["Zcash", "Tornado Cash"],
      },
      {
        term: "Verifiable Computation",
        definition:
          "Using ZK proofs to verify that a computation was performed correctly without re-executing it, enabling trustless outsourcing of computation.",
        relatedTerms: ["zkVM", "Proof of Computation"],
      },
      {
        term: "zkML",
        abbreviation: "Zero-Knowledge Machine Learning",
        definition:
          "Applying zero-knowledge proofs to machine learning, enabling verification of ML inference without revealing the model or input data.",
        relatedTerms: ["Verifiable Computation", "Privacy"],
      },
    ],
  },
  {
    id: "mathematical-foundations",
    title: "Mathematical Foundations",
    emoji: "📐",
    description: "Mathematical concepts underlying zero-knowledge proofs",
    terms: [
      {
        term: "Finite Field",
        definition:
          "A field with a finite number of elements, typically denoted F_p for prime p. All arithmetic in ZK circuits is performed over finite fields.",
        relatedTerms: ["Prime Field", "Extension Field", "Modular Arithmetic"],
      },
      {
        term: "Elliptic Curve",
        definition:
          "A curve defined by an equation of the form y² = x³ + ax + b over a field. The group structure of points on elliptic curves is fundamental to many ZK constructions.",
        relatedTerms: ["Pairing", "Scalar Multiplication"],
      },
      {
        term: "Pairing",
        abbreviation: "Bilinear Pairing",
        definition:
          "A bilinear map e: G₁ × G₂ → G_T between elliptic curve groups. Enables verification of polynomial equations in the exponent, crucial for SNARKs like Groth16.",
        relatedTerms: ["Elliptic Curve", "KZG"],
      },
      {
        term: "Lagrange Interpolation",
        definition:
          "A method to find a polynomial that passes through a given set of points. Used extensively in polynomial-based ZK systems for encoding constraints.",
        relatedTerms: ["Polynomial", "FFT"],
      },
      {
        term: "FFT",
        abbreviation: "Fast Fourier Transform",
        definition:
          "An efficient algorithm for polynomial multiplication and evaluation. Critical for performance in ZK systems that work with large polynomials.",
        relatedTerms: ["NTT", "Polynomial"],
      },
      {
        term: "NTT",
        abbreviation: "Number Theoretic Transform",
        definition:
          "The finite field analog of FFT, used for efficient polynomial operations in ZK proof systems. Requires the field to have roots of unity.",
        relatedTerms: ["FFT", "Finite Field"],
      },
      {
        term: "Schwartz-Zippel Lemma",
        definition:
          "A fundamental result stating that a non-zero polynomial of degree d evaluated at a random point is zero with probability at most d/|F|. Basis for polynomial identity testing in ZK.",
        relatedTerms: ["Polynomial", "Soundness"],
      },
    ],
  },
];

export const references: Reference[] = [
  // {
  //   title: "Proofs, Arguments, and Zero-Knowledge",
  //   authors: "Justin Thaler",
  //   year: "2022",
  //   link: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf",
  // },
  // {
  //   title: "The MoonMath Manual to zk-SNARKs",
  //   authors: "Least Authority",
  //   year: "2023",
  //   link: "https://leastauthority.com/community-matters/moonmath-manual/",
  // },
  // {
  //   title: "ZKP Science",
  //   authors: "Various Contributors",
  //   year: "2024",
  //   link: "https://zkp.science/",
  // },
];
