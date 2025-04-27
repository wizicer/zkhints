import type { ResourceLink } from "./list";
import privacy from "/src/assets/hinta/privacy.png";
import scaling from "/src/assets/hinta/scaling.png";

export interface Application {
  id: string;
  application: string;
  description: string;
  constructs: string;
  primitives: string;
  notes: string;
}

export interface ApplicationType {
  type: string;
  examples: string[];
  notes: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  applications: ApplicationType[];
}

export const applications: Application[] = [
  {
    id: "identity",
    application: "Identity Proof",
    description: "Prove identity without revealing it",
    constructs: "Hash preimages, Merkle proofs",
    primitives: "Poseidon hash, Hash preimage check",
    notes: "Used in ZK login, selective disclosure",
  },
  {
    id: "group-membership",
    application: "Group Membership",
    description: "Prove you belong to a group",
    constructs: "Merkle tree inclusion proof",
    primitives: "Poseidon hash, Merkle inclusion",
    notes: "Often used with Semaphore",
  },
  {
    id: "voting",
    application: "Anonymous Voting",
    description: "Cast vote without revealing identity",
    constructs: "Nullifier, commitment, Merkle proof",
    primitives: "Hash, Commitment scheme, Nullifier",
    notes: "Requires uniqueness & unlinkability",
  },
  {
    id: "reputation",
    application: "Reputation System",
    description: "Prove score without revealing details",
    constructs: "Range proof, selective disclosure",
    primitives: "Range proof, Merkle trees",
    notes: "ZK reputation points, sybil resistance",
  },
  {
    id: "mixer",
    application: "ZK Mixer",
    description: "Hide sender and receiver of transaction",
    constructs: "Merkle proofs, nullifiers, commitments",
    primitives: "Poseidon, Pedersen, ElGamal",
    notes: "Tornado Cash-style privacy",
  },
  {
    id: "bridge",
    application: "ZK Bridge",
    description: "Prove state/receipt across chains",
    constructs: "SNARK-verifiable state",
    primitives: "zk-SNARKs, light clients",
    notes: "Light client or SPV logic inside ZK",
  },
  {
    id: "auction",
    application: "ZK Auction",
    description: "Bid privately, prove winner fairly",
    constructs: "Commitment & reveal",
    primitives: "Commit-reveal, range proof",
    notes: "Fairness + privacy tradeoff",
  },
  {
    id: "credential",
    application: "ZK Credential",
    description: "Show qualifications without revealing source",
    constructs: "Signature verification, range proof",
    primitives: "zk-SNARKs, BBS+ signatures",
    notes: "Often used with DID, Verifiable Credentials",
  },
  {
    id: "games",
    application: "Private Games",
    description: "Play hidden state games (e.g., poker)",
    constructs: "Commitment, reveal, proof of action",
    primitives: "Commitments, ZK verifications",
    notes: "Used in zkBattleship, zkPoker",
  },
  {
    id: "ml",
    application: "ML Inference Verification",
    description: "Prove a model inference without revealing input or model",
    constructs: "Arithmetic circuit of ML model",
    primitives: "zkML, polynomial constraints",
    notes: "High cost, but use cases growing",
  },
  {
    id: "rollup",
    application: "ZK Rollup",
    description: "Batch and prove L2 state transition",
    constructs: "State diff proof, Merkle root updates",
    primitives: "zk-SNARKs/zk-STARKs",
    notes: "Core of scalability protocols",
  },
  {
    id: "image",
    application: "Private Image Manipulation",
    description: "Privately prove the image manipulation",
    constructs: "Matrix calculation, Transformation",
    primitives: "zk-SNARKs, Commitment",
    notes: "",
  },
];

const links: ResourceLink[] = [
  {
    title: "MProve-Nova: A Privacy-Preserving Proof of Reserves Protocol for Monero",
    description:
      "MProve-Nova is a privacy-preserving Monero proof-of-reserves protocol that uses recursive SNARKs to verify exchange solvency.",
    link: "https://eprint.iacr.org/2025/665",
    difficulty: "advanced",
    category: "por",
  },
  {
    title:
      "SAVER: SNARK-friendly, Additively-homomorphic, and Verifiable Encryption and decryption with Rerandomization",
    description:
      "SAVER is a SNARK-friendly, additively-homomorphic, and verifiable encryption and decryption with rerandomization.",
    link: "https://eprint.iacr.org/2019/1270",
    difficulty: "advanced",
    category: "encryption",
    seriesLinks: [
      {
        title: "Source Code",
        link: "https://github.com/jiwonlee-dev/SAVER",
      },
    ],
  },
];

const privacyApplications: ApplicationType[] = [
  {
    type: "Private L1 Blockchain",
    examples: ["zCash", "Mina", "Aleo"],
    notes: "Fully private blockchain, often built-in proving system",
  },
  {
    type: "Private Transactions",
    examples: ["Tornado Cash", "mixer"],
    notes: "Uses Merkle trees and nullifiers for unlinkable transfers",
  },
  {
    type: "Private Control",
    examples: ["email", "credential", "group-membership", "identity", "auction"],
    notes: "Uses ZK for proving auth state without exposing logic",
  },
  {
    type: "Incomplete Info Games",
    examples: ["games", "dark-forest"],
    notes: "Hidden map + private moves",
  },
  {
    type: "Privacy Proof",
    examples: ["market", "ml", "por", "kyc", "voting", "reputation"],
    notes: "Application-specific proofs for data, ML, or identity",
  },
];

const scalabilityApplications: ApplicationType[] = [
  {
    type: "zk-Rollup (L2)",
    examples: ["Scroll", "zkSync", "Linea", "rollup"],
    notes: "Compress multiple transactions into a single proof",
  },
  {
    type: "Cross-chain Messaging",
    examples: ["bridge"],
    notes: "Prove state inclusion from source chain to target chain",
  },
  {
    type: "Compressed Messaging",
    examples: ["email"],
    notes: "ZK-based email metadata hiding + compression",
  },
];

export const sections: Section[] = [
  {
    id: "privacy",
    title: "Privacy Applications",
    description: "Applications related to privacy and confidentiality in zero-knowledge systems.",
    image: privacy,
    applications: privacyApplications,
  },
  {
    id: "scalability",
    title: "Scalability Applications",
    description: "Applications related to scalability and performance in zero-knowledge systems.",
    image: scaling,
    applications: scalabilityApplications,
  },
];
