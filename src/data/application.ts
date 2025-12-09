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
  links?: { title: string; url: string }[];
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
  // === Privacy: Identity & Authentication ===
  {
    id: "zklogin",
    application: "ZK Login",
    description:
      "Authenticate with OAuth providers (Google, Apple) without revealing identity to the chain",
    constructs: "JWT verification, OAuth signature check",
    primitives: "zk-SNARKs, RSA/ECDSA in-circuit",
    notes: "Used in Sui zkLogin, zkLogin on Base",
    links: [
      { title: "Sui zkLogin", url: "https://docs.sui.io/concepts/cryptography/zklogin" },
      { title: "zkLogin on Base", url: "https://github.com/shield-labs-xyz/zklogin" },
    ],
  },
  {
    id: "identity",
    application: "Identity Proof",
    description: "Prove identity attributes without revealing the full identity",
    constructs: "Hash preimages, Merkle proofs, selective disclosure",
    primitives: "Poseidon hash, Hash preimage check",
    notes: "Foundation for ZK login, age verification, KYC",
  },
  {
    id: "credential",
    application: "ZK Credential / Anonymous Credentials",
    description: "Show qualifications without revealing issuer or full credential",
    constructs: "Signature verification, range proof, selective disclosure",
    primitives: "zk-SNARKs, BBS+ signatures, Hyrax commitments",
    notes: "Used with DID, Verifiable Credentials, SD-JWT, mDL",
    links: [{ title: "OpenAC (zkID)", url: "https://github.com/privacy-ethereum/zkID" }],
  },
  {
    id: "group-membership",
    application: "Group Membership",
    description: "Prove you belong to a group without revealing which member you are",
    constructs: "Merkle tree inclusion proof",
    primitives: "Poseidon hash, Merkle inclusion",
    notes: "Core of Semaphore protocol, used for anonymous signaling",
    links: [{ title: "Semaphore", url: "https://semaphore.pse.dev/" }],
  },
  {
    id: "zk-cookies",
    application: "ZK Cookies / Continuous Auth",
    description: "Anonymous continuous authentication using behavior signals",
    constructs: "Behavior signal analysis, differential privacy",
    primitives: "zkSNARKs, commitment schemes",
    notes: "Prevents credential sharing/theft while preserving privacy",
  },

  // === Privacy: Transactions & Finance ===
  {
    id: "mixer",
    application: "ZK Mixer",
    description: "Hide sender and receiver of transactions, breaking on-chain linkability",
    constructs: "Merkle proofs, nullifiers, commitments",
    primitives: "Poseidon, Pedersen, ElGamal",
    notes: "Tornado Cash-style privacy pools",
    links: [{ title: "Tornado Cash Manual", url: "https://zk.bearblog.dev/tornado-cash-manual/" }],
  },
  {
    id: "private-tx",
    application: "Private Transactions",
    description: "Confidential transfers hiding amounts and/or participants",
    constructs: "Pedersen commitments, range proofs, nullifiers",
    primitives: "Bulletproofs, zk-SNARKs",
    notes: "Used in Zcash, Aztec, Aleo",
  },
  {
    id: "por",
    application: "Proof of Reserves",
    description: "Prove solvency without revealing individual balances",
    constructs: "Merkle sum trees, range proofs",
    primitives: "zk-SNARKs, recursive proofs",
    notes: "Exchange solvency verification",
    links: [{ title: "MProve-Nova", url: "https://eprint.iacr.org/2025/665" }],
  },
  {
    id: "auction",
    application: "ZK Auction",
    description: "Bid privately, prove winner fairly without revealing losing bids",
    constructs: "Commitment & reveal, range proofs",
    primitives: "Commit-reveal, range proof",
    notes: "Sealed-bid auctions with fairness guarantees",
  },
  {
    id: "p2p",
    application: "ZK P2P Payments",
    description: "Peer-to-peer payments with privacy-preserving verification",
    constructs: "Email verification, payment proofs",
    primitives: "zkEmail, zk-SNARKs",
    notes: "Venmo/PayPal-style payments with ZK verification",
  },

  // === Privacy: Voting & Governance ===
  {
    id: "voting",
    application: "Anonymous Voting",
    description: "Cast vote without revealing identity, ensure one-person-one-vote",
    constructs: "Nullifier, commitment, Merkle proof",
    primitives: "Hash, Commitment scheme, Nullifier",
    notes: "Requires uniqueness & unlinkability",
  },
  {
    id: "reputation",
    application: "Reputation System",
    description: "Prove reputation score without revealing underlying actions",
    constructs: "Range proof, selective disclosure",
    primitives: "Range proof, Merkle trees",
    notes: "ZK reputation points, sybil resistance",
  },
  {
    id: "personas",
    application: "Cryptographic Personas",
    description: "Responsible pseudonyms with revocable anonymity for rule violations",
    constructs: "zk-promises, proof folding",
    primitives: "Privacy Pass, zkSNARKs",
    notes: "Balances anonymity with community accountability",
  },

  // === Privacy: Communication & Data ===
  {
    id: "zkemail",
    application: "ZK Email",
    description: "Prove email contents/sender without revealing the full email",
    constructs: "DKIM signature verification, regex matching",
    primitives: "zk-SNARKs, RSA in-circuit",
    notes: "Email-based identity and payment verification",
    links: [{ title: "zkEmail", url: "https://prove.email/" }],
  },
  {
    id: "zktls",
    application: "ZK TLS",
    description: "Prove web data authenticity without revealing full content",
    constructs: "TLS handshake verification, selective disclosure",
    primitives: "zk-SNARKs, MPC",
    notes: "Verifiable web data for DeFi, identity",
    links: [{ title: "DiStefano Protocol", url: "https://brave.com/blog/distefano/" }],
  },
  {
    id: "witness-encryption",
    application: "Witness Encryption",
    description: "Encrypt to computation statements, decrypt with valid witness",
    constructs: "Circuit-based decryption conditions",
    primitives: "R1CS, Circom circuits",
    notes: "No key exchange needed, computation-based access control",
    links: [{ title: "zkEnc", url: "https://zkenc.limaois.me/" }],
  },

  // === Privacy: Games & Entertainment ===
  {
    id: "games",
    application: "Private Games",
    description: "Play hidden state games (poker, battleship) with provable fairness",
    constructs: "Commitment, reveal, proof of action",
    primitives: "Commitments, ZK verifications",
    notes: "zkBattleship, zkPoker, zkChess",
  },
  {
    id: "dark-forest",
    application: "Fog of War Games",
    description: "Games with hidden map exploration and private moves",
    constructs: "Location commitments, move proofs",
    primitives: "Poseidon hash, zk-SNARKs",
    notes: "Dark Forest pioneered this category",
    links: [{ title: "Dark Forest", url: "https://zkga.me/" }],
  },

  // === Privacy: ML & Computation ===
  {
    id: "zkml",
    application: "ZK ML Inference",
    description: "Prove ML model inference without revealing input, model, or both",
    constructs: "Arithmetic circuit of ML model",
    primitives: "zkML, polynomial constraints",
    notes: "Growing use cases in AI verification",
    links: [{ title: "EZKL", url: "https://ezkl.xyz/" }],
  },
  {
    id: "image",
    application: "Private Image Processing",
    description: "Prove image manipulation without revealing original",
    constructs: "Matrix calculation, Transformation proofs",
    primitives: "zk-SNARKs, Commitment",
    notes: "Provenance verification, content authenticity",
  },
  {
    id: "zkdb",
    application: "ZK Database Queries",
    description: "Prove SQL query results without revealing full database",
    constructs: "Query verification, result proofs",
    primitives: "NIZKs, Merkle trees",
    notes: "Confidential data with verifiable queries",
    links: [{ title: "PoneglyphDB", url: "https://arxiv.org/abs/2411.15031" }],
  },

  // === Scalability: L2 & Rollups ===
  {
    id: "rollup",
    application: "ZK Rollup",
    description: "Batch and prove L2 state transitions for Ethereum scalability",
    constructs: "State diff proof, Merkle root updates",
    primitives: "zk-SNARKs/zk-STARKs",
    notes: "Core of L2 scaling: zkSync, Scroll, Linea, Polygon zkEVM",
    links: [
      { title: "zkSync", url: "https://zksync.io/" },
      { title: "Scroll", url: "https://scroll.io/" },
      { title: "Linea", url: "https://linea.build/" },
    ],
  },
  {
    id: "zkvm",
    application: "ZK Virtual Machine",
    description: "General-purpose computation with validity proofs",
    constructs: "RISC-V/custom ISA circuits, memory checks",
    primitives: "Lasso lookups, sum-check, folding",
    notes: "SP1, RISC Zero, Jolt, Valida",
    links: [
      { title: "SP1", url: "https://github.com/succinctlabs/sp1" },
      { title: "RISC Zero", url: "https://risczero.com/" },
      { title: "Awesome zkVM", url: "https://github.com/rkdud007/awesome-zkvm" },
    ],
  },
  {
    id: "zkevm",
    application: "ZK EVM",
    description: "EVM-compatible execution with ZK validity proofs",
    constructs: "EVM opcode circuits, state proofs",
    primitives: "zk-SNARKs, Plonkish arithmetization",
    notes: "Type 1-4 zkEVMs with different compatibility levels",
  },

  // === Scalability: Cross-chain ===
  {
    id: "bridge",
    application: "ZK Bridge",
    description: "Prove state/receipt across chains without trusted intermediaries",
    constructs: "SNARK-verifiable state, light client proofs",
    primitives: "zk-SNARKs, consensus verification",
    notes: "Trustless cross-chain messaging",
    links: [{ title: "Polymer Hub", url: "https://www.polymerlabs.org/" }],
  },
  {
    id: "light-client",
    application: "ZK Light Client",
    description: "Verify blockchain state with minimal data and computation",
    constructs: "Header chain proofs, consensus verification",
    primitives: "Recursive SNARKs, BLS aggregation",
    notes: "Mobile-friendly blockchain verification",
  },

  // === Scalability: Compression & Verification ===
  {
    id: "recursive-proofs",
    application: "Recursive Proofs",
    description: "Aggregate multiple proofs into one for constant verification",
    constructs: "Proof composition, folding schemes",
    primitives: "Nova, Hypernova, proof folding",
    notes: "Key to scalable proof systems",
    links: [{ title: "Nova", url: "https://github.com/microsoft/Nova" }],
  },
  {
    id: "proof-aggregation",
    application: "Proof Aggregation",
    description: "Combine multiple proofs for batch verification",
    constructs: "Proof batching, aggregation circuits",
    primitives: "Recursive SNARKs, accumulation",
    notes: "Reduces on-chain verification costs",
  },
  {
    id: "coprocessor",
    application: "ZK Coprocessor",
    description: "Offload heavy computation off-chain with validity proofs",
    constructs: "Computation proofs, state access",
    primitives: "zkVM, storage proofs",
    notes: "Axiom, Brevis, Lagrange",
    links: [{ title: "Axiom", url: "https://axiom.xyz/" }],
  },

  // === Private L1 Blockchains ===
  {
    id: "zcash",
    application: "Zcash",
    description: "Privacy-focused cryptocurrency with shielded transactions",
    constructs: "Sapling/Orchard circuits, nullifiers",
    primitives: "Groth16, Halo 2",
    notes: "Pioneer of ZK in blockchain",
    links: [{ title: "Zcash", url: "https://z.cash/" }],
  },
  {
    id: "mina",
    application: "Mina Protocol",
    description: "Succinct blockchain with constant-size state proof",
    constructs: "Recursive proofs, Pickles",
    primitives: "Kimchi, Pasta curves",
    notes: "22KB blockchain, zkApps platform",
    links: [{ title: "Mina", url: "https://minaprotocol.com/" }],
  },
  {
    id: "aleo",
    application: "Aleo",
    description: "Privacy-by-default smart contract platform",
    constructs: "Leo language, Marlin proofs",
    primitives: "zk-SNARKs, record model",
    notes: "Private programmable money",
    links: [{ title: "Aleo", url: "https://aleo.org/" }],
  },
  {
    id: "aztec",
    application: "Aztec",
    description: "Private smart contracts on Ethereum",
    constructs: "Noir circuits, private state",
    primitives: "Plonk, UltraPlonk",
    notes: "Programmable privacy for Ethereum",
    links: [
      { title: "Aztec", url: "https://aztec.network/" },
      { title: "Noir", url: "https://noir-lang.org/" },
    ],
  },
];

const links: ResourceLink[] = [
  {
    title: "MProve-Nova: A Privacy-Preserving Proof of Reserves Protocol for Monero",
    short: "MProve-Nova",
    description:
      "MProve-Nova is a privacy-preserving Monero proof-of-reserves protocol that uses recursive SNARKs to verify exchange solvency.",
    link: "https://eprint.iacr.org/2025/665",
    difficulty: "advanced",
    category: "por",
  },
  {
    title:
      "SAVER: SNARK-friendly, Additively-homomorphic, and Verifiable Encryption and decryption with Rerandomization",
    short: "SAVER",
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
      {
        title: "Video",
        link: "https://www.youtube.com/watch?v=kiZIJ9ojc3U",
      },
    ],
  },
];

const privacyApplications: ApplicationType[] = [
  {
    type: "Identity & Authentication",
    examples: ["zklogin", "identity", "credential", "group-membership", "zk-cookies"],
    notes: "Prove identity, membership, or credentials without revealing sensitive details",
  },
  {
    type: "Private Transactions & Finance",
    examples: ["mixer", "private-tx", "por", "auction", "p2p"],
    notes: "Confidential transfers, proof of reserves, and private financial operations",
  },
  {
    type: "Voting & Governance",
    examples: ["voting", "reputation", "personas"],
    notes: "Anonymous voting, reputation systems, and accountable pseudonymity",
  },
  {
    type: "Communication & Data",
    examples: ["zkemail", "zktls", "witness-encryption"],
    notes: "Prove email/web data authenticity, computation-based encryption",
  },
  {
    type: "Games & Entertainment",
    examples: ["games", "dark-forest"],
    notes: "Hidden state games with provable fairness",
  },
  {
    type: "ML & Computation",
    examples: ["zkml", "image", "zkdb"],
    notes: "Private ML inference, image processing, and database queries",
  },
  {
    type: "Private L1 Blockchains",
    examples: ["zcash", "mina", "aleo", "aztec"],
    notes: "Native privacy with built-in proving systems",
  },
];

const scalabilityApplications: ApplicationType[] = [
  {
    type: "L2 Rollups",
    examples: ["rollup", "zkvm", "zkevm"],
    notes: "Batch transactions and prove state transitions for Ethereum scalability",
  },
  {
    type: "Cross-chain & Interoperability",
    examples: ["bridge", "light-client"],
    notes: "Trustless cross-chain messaging and lightweight state verification",
  },
  {
    type: "Proof Compression & Aggregation",
    examples: ["recursive-proofs", "proof-aggregation", "coprocessor"],
    notes: "Aggregate proofs, reduce verification costs, offload computation",
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
