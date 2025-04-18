export interface TableData {
  title: string;
  emoji: string;
  columns: { key: string; header: string }[];
  data: Record<string, any>[];
  footnote?: string;
}

export const primitiveData: TableData[] = [
  {
    title: "Hash Functions",
    emoji: "🔐",
    columns: [
      { key: "name", header: "Name" },
      { key: "type", header: "Type" },
      { key: "useCase", header: "Use Case" },
      { key: "zkFriendly", header: "ZK-Friendly" },
      { key: "recommend", header: "Recommend" },
      { key: "implementations", header: "Implementations" },
      { key: "notes", header: "Notes" },
    ],
    data: [
      {
        name: "Poseidon",
        type: "Permutation",
        useCase: "Merkle Tree, Commitment, PRF",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Circom, Arkworks, Halo2",
        notes: "SNARK-native, fast in R1CS/PLONK",
      },
      {
        name: "MiMC",
        type: "Feistel-like",
        useCase: "Merkle Tree, PRF",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Circom, Arkworks",
        notes: "Minimal constraints per round",
      },
      {
        name: "Rescue",
        type: "Sponge",
        useCase: "Hash, PRF",
        zkFriendly: "✅",
        recommend: "🟡",
        implementations: "Halo2, Winterfell",
        notes: "Algebraic structure, STARK-friendly",
      },
      {
        name: "Pedersen",
        type: "EC-based",
        useCase: "Commitment",
        zkFriendly: "⚠️ Partial",
        recommend: "🟡",
        implementations: "Circom, Sapling, Arkworks",
        notes: "Curve-dependent",
      },
      {
        name: "SHA2/SHA3",
        type: "Standard",
        useCase: "Compatibility with EVM systems",
        zkFriendly: "❌",
        recommend: "🔴",
        implementations: "Circom",
        notes: "Very high cost in R1CS",
      },
    ],
  },
  {
    title: "Merkle Tree Primitives",
    emoji: "🌲",
    columns: [
      { key: "variant", header: "Variant" },
      { key: "hashUsed", header: "Hash Used" },
      { key: "zkFriendly", header: "ZK-Friendly" },
      { key: "recommend", header: "Recommend" },
      { key: "implementations", header: "Implementations" },
      { key: "notes", header: "Notes" },
    ],
    data: [
      {
        variant: "Poseidon MT",
        hashUsed: "Poseidon",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Circom, Noir",
        notes: "Fully SNARK-native",
      },
      {
        variant: "MiMC MT",
        hashUsed: "MiMC",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Circom",
        notes: "Lightweight and efficient",
      },
      {
        variant: "Pedersen MT",
        hashUsed: "Pedersen",
        zkFriendly: "⚠️ Moderate",
        recommend: "🟡",
        implementations: "Sapling",
        notes: "Legacy zkApp use",
      },
      {
        variant: "SHA MT",
        hashUsed: "SHA2/SHA3",
        zkFriendly: "❌",
        recommend: "🔴",
        implementations: "Circom",
        notes: "Expensive in constraint count",
      },
    ],
  },
  {
    title: "Commitment Schemes",
    emoji: "🧾",
    columns: [
      { key: "scheme", header: "Scheme" },
      { key: "binding", header: "Binding" },
      { key: "hiding", header: "Hiding" },
      { key: "zkFriendly", header: "ZK-Friendly" },
      { key: "recommend", header: "Recommend" },
      { key: "implementations", header: "Implementations" },
      { key: "notes", header: "Notes" },
    ],
    data: [
      {
        scheme: "Pedersen",
        binding: "✅",
        hiding: "✅",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Circom, Arkworks",
        notes: "Fast, curve-based",
      },
      {
        scheme: "Poseidon-based",
        binding: "✅",
        hiding: "✅",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Noir, Halo2",
        notes: "Fully arithmetized",
      },
      {
        scheme: "KZG Commitment",
        binding: "✅",
        hiding: "❌",
        zkFriendly: "⚠️ Limited",
        recommend: "🟡",
        implementations: "PLONK (zkEVMs)",
        notes: "Trusted setup required",
      },
    ],
  },
  {
    title: "Polynomial-Related Primitives",
    emoji: "📐",
    columns: [
      { key: "primitive", header: "Primitive" },
      { key: "useCase", header: "Use Case" },
      { key: "zkFriendly", header: "ZK-Friendly" },
      { key: "recommend", header: "Recommend" },
      { key: "implementations", header: "Implementations" },
      { key: "notes", header: "Notes" },
    ],
    data: [
      {
        primitive: "FFT",
        useCase: "Polynomial commitment",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "PLONK, STARK systems",
        notes: "Core of modern SNARKs",
      },
      {
        primitive: "Lagrange Interp.",
        useCase: "Witness construction",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Internal",
        notes: "Used in identity checks",
      },
      {
        primitive: "Kate Commitment",
        useCase: "Openings for poly evals",
        zkFriendly: "✅",
        recommend: "🟡",
        implementations: "PLONK, zkEVM",
        notes: "Pairing-based, used in KZG",
      },
    ],
  },
  {
    title: "Bit-level Encodings",
    emoji: "🔣",
    columns: [
      { key: "primitive", header: "Primitive" },
      { key: "useCase", header: "Use Case" },
      { key: "zkFriendly", header: "ZK-Friendly" },
      { key: "recommend", header: "Recommend" },
      { key: "implementations", header: "Implementations" },
      { key: "notes", header: "Notes" },
    ],
    data: [
      {
        primitive: "Bit Decomposition",
        useCase: "Range proofs, logic",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Circom, Halo2",
        notes: "Common, but costly",
      },
      {
        primitive: "Field Packing",
        useCase: "Efficient encoding",
        zkFriendly: "✅",
        recommend: "🟢",
        implementations: "Circom, Arkworks",
        notes: "Reduce input size",
      },
    ],
  },
  {
    title: "Application Mapping Quick Guide",
    emoji: "🔗",
    columns: [
      { key: "application", header: "Application" },
      { key: "recommendedPrimitives", header: "Recommended Primitive(s)" },
      { key: "notes", header: "Notes" },
    ],
    data: [
      {
        application: "Efficient Merkle Tree",
        recommendedPrimitives: "Poseidon, MiMC",
        notes: "Avoid SHA-based in ZK",
      },
      {
        application: "Privacy-preserving commitment",
        recommendedPrimitives: "Pedersen, Poseidon-based",
        notes: "Group or native",
      },
      {
        application: "Range / logic constraints",
        recommendedPrimitives: "Bit Decomposition",
        notes: "Optimize with custom gadgets",
      },
      {
        application: "Public compatibility (EVM)",
        recommendedPrimitives: "SHA2, Keccak256",
        notes: "Only if EVM compatibility needed",
      },
      {
        application: "Polynomial-based proving system",
        recommendedPrimitives: "FFT, KZG, Lagrange Interp.",
        notes: "Backbone of PLONK/STARK",
      },
    ],
  },
];

export const legendItems = [
  { term: "Use Case", description: "Main application scenarios" },
  { term: "ZK-Friendly", description: "Designed for low constraints" },
  { term: "Recommend", description: "Developer priority recommendation" },
  {
    term: "Implementations",
    description: "Frameworks with mature implementations (Circom, Arkworks, Noir, Halo2, etc.)",
  },
];
