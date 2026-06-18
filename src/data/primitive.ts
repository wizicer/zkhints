export interface TableData {
  title: string;
  emoji: string;
  columns: { key: string; header: string }[];
  data: Record<string, any>[];
  footnote?: string;
}

const primitiveJa: Record<string, string> = {
  "Hash Functions": "ハッシュ関数",
  "Merkle Tree Primitives": "Merkle Tree 基本部品",
  "Commitment Schemes": "Commitment スキーム",
  "Polynomial-Related Primitives": "Polynomial 関連の基本部品",
  "Bit-level Encodings": "bit-level encoding",
  "Application Mapping Quick Guide": "用途別クイックガイド",
  Name: "名称",
  Type: "種類",
  "Use Case": "用途",
  "ZK-Friendly": "ZK 向き",
  Recommend: "推奨",
  Implementations: "実装",
  Notes: "メモ",
  Variant: "variant",
  "Hash Used": "使用 hash",
  Scheme: "scheme",
  Binding: "binding",
  Hiding: "hiding",
  Primitive: "primitive",
  Application: "用途",
  "Recommended Primitive(s)": "推奨 primitive",
  Permutation: "Permutation",
  "Feistel-like": "Feistel-like",
  Sponge: "Sponge",
  "EC-based": "EC-based",
  Standard: "標準",
  "Merkle Tree, Commitment, PRF": "Merkle Tree、Commitment、PRF",
  "Merkle Tree, PRF": "Merkle Tree、PRF",
  "Hash, PRF": "Hash、PRF",
  Commitment: "Commitment",
  "Compatibility with EVM systems": "EVM systems との互換性",
  "SNARK-native, fast in R1CS/PLONK": "SNARK-native で R1CS/PLONK 内でも高速",
  "Minimal constraints per round": "round あたりの constraints が少ない",
  "Algebraic structure, STARK-friendly": "代数構造を持ち、STARK-friendly",
  "Curve-dependent": "curve に依存",
  "Very high cost in R1CS": "R1CS では非常に高コスト",
  "Fully SNARK-native": "完全に SNARK-native",
  "Lightweight and efficient": "軽量で効率的",
  "Legacy zkApp use": "legacy zkApp で利用",
  "Expensive in constraint count": "constraint count が高い",
  "Fast, curve-based": "高速、curve-based",
  "Fully arithmetized": "完全に arithmetized",
  "⚠️ Limited": "⚠️ 限定的",
  "Trusted setup required": "trusted setup が必要",
  "Polynomial commitment": "polynomial commitment",
  "Witness construction": "witness construction",
  "Openings for poly evals": "polynomial evaluation の opening",
  "Core of modern SNARKs": "現代 SNARKs の中核",
  "Used in identity checks": "identity check で利用",
  "Pairing-based, used in KZG": "pairing-based、KZG で利用",
  "Range proofs, logic": "range proofs、logic",
  "Efficient encoding": "効率的な encoding",
  "Common, but costly": "一般的だが高コスト",
  "Reduce input size": "input size を削減",
  "Efficient Merkle Tree": "効率的な Merkle Tree",
  "Privacy-preserving commitment": "privacy-preserving commitment",
  "Range / logic constraints": "range / logic constraints",
  "Public compatibility (EVM)": "public compatibility (EVM)",
  "Polynomial-based proving system": "polynomial-based proving system",
  "Avoid SHA-based in ZK": "ZK では SHA-based を避ける",
  "Group or native": "group-based または native",
  "Optimize with custom gadgets": "custom gadgets で最適化",
  "Only if EVM compatibility needed": "EVM compatibility が必要な場合のみ",
  "Backbone of PLONK/STARK": "PLONK/STARK の基盤",
  "Main application scenarios": "主な利用 scenario",
  "Designed for low constraints": "low constraints 向けに設計されているか",
  "Developer priority recommendation": "developer 向けの優先度 recommendation",
  "Frameworks with mature implementations (Circom, Arkworks, Noir, Halo2, etc.)":
    "成熟した実装がある frameworks (Circom, Arkworks, Noir, Halo2 など)",
};

const translatePrimitive = (value: unknown): unknown =>
  typeof value === "string" ? primitiveJa[value] || value : value;

export const getPrimitiveData = (lang: "en" | "ja" = "en"): TableData[] =>
  lang === "ja"
    ? primitiveData.map((section) => ({
        ...section,
        title: primitiveJa[section.title] || section.title,
        columns: section.columns.map((column) => ({
          ...column,
          header: primitiveJa[column.header] || column.header,
        })),
        data: section.data.map((row) =>
          Object.fromEntries(Object.entries(row).map(([key, value]) => [key, translatePrimitive(value)]))
        ),
        footnote: primitiveJa[section.footnote || ""] || section.footnote,
      }))
    : primitiveData;

export const getLegendItems = (lang: "en" | "ja" = "en") =>
  lang === "ja"
    ? legendItems.map((item) => ({
        term: primitiveJa[item.term] || item.term,
        description: primitiveJa[item.description] || item.description,
      }))
    : legendItems;

export const getConstraintStatistics = (lang: "en" | "ja" = "en") =>
  lang === "ja"
    ? contraintStatistics.map((stat) => ({
        ...stat,
        description: `hash_to_curve(msg)

Input: msg。任意長の byte string。
Output: P。secp256k1 curve 上の point。

Steps:
1. u = hash_to_field(msg)
2. Q0 = map_to_curve(u[0])
3. Q1 = map_to_curve(u[1])
4. R = iso_map(Q0) + iso_map(Q1)
5. P を返す`,
      }))
    : contraintStatistics;

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

export const contraintStatistics = [
  {
    name: "Hash To Curve (Sha256 + Secp256k1)",
    repo: "https://github.com/geometryxyz/secp256k1_hash_to_curve",
    constraints: [
      {
        name: "hash_to_field",
        file: {
          name: "hash_to_field_test.circom",
          link: "https://github.com/geometryxyz/secp256k1_hash_to_curve/blob/main/circuits/circom/test/hash_to_field_test.circom",
        },
        non_linear_constraints: 288787,
        linear_constraints: 15572,
        proportion: 1,
      },
      {
        name: "map_to_curve",
        file: {
          name: "map_to_curve_test.circom",
          link: "https://github.com/geometryxyz/secp256k1_hash_to_curve/blob/main/circuits/circom/test/map_to_curve_test.circom",
        },
        non_linear_constraints: 147600,
        linear_constraints: 5202,
        proportion: 2,
      },
      // {
      //   name: "iso_map",
      //   file: {
      //     name: "iso_map_test.circom",
      //     link: "https://github.com/geometryxyz/secp256k1_hash_to_curve/blob/main/circuits/circom/test/iso_map_test.circom",
      //   },
      //   non_linear_constraints: 85762,
      //   linear_constraints: 3061,
      //   proportion: 2,
      // },
      {
        name: "hash_to_curve",
        file: {
          name: "hash_to_curve_test.circom",
          link: "https://github.com/geometryxyz/secp256k1_hash_to_curve/blob/main/circuits/circom/test/hash_to_curve_test.circom",
        },
        non_linear_constraints: 586502,
        linear_constraints: 26091,
        proportion: 1,
      },
    ],
    description: `hash_to_curve(msg)

Input: msg, an arbitrary-length byte string.
Output: P, a point in the secp256k1 curve.

Steps:
1. u = hash_to_field(msg)
2. Q0 = map_to_curve(u[0])
3. Q1 = map_to_curve(u[1])
4. R = iso_map(Q0) + iso_map(Q1)
5. return P`,
  },
];
