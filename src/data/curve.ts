import ethereum_compat from "../assets/curve/ethereum_compat.png";
import use_groth16 from "../assets/curve/use_groth16.png";
import long_term_security from "../assets/curve/long_term_security.png";
import non_pairing from "../assets/curve/non_pairing.png";
import in_circuit_curve from "../assets/curve/in_circuit_curve.png";
import recursion_outer_curve from "../assets/curve/recursion_outer_curve.png";

export const curves = [
  {
    id: "bn254",
    name: "BN254",
    family: "BN",
    security_bits: 100,
    field_size: 254,
    fields: {
      q: {
        number: "21888242871839275222246405745257275088696311157297823662689037894645226208583",
        hex: "",
        explain: "",
      },
      r: {
        number: "21888242871839275222246405745257275088548364400416034343698204186575808495617",
        explain: "",
      },
    },
    equation: "y^2 = x^3 + 3",
    pairing_friendly: true,
    in_circuit_friendly: false,
    partners: ["baby_jubjub"],
    used_in: ["ZoKrates", "SnarkJS", "Ethereum (alt_bn128 precompile)"],
    performance: "very_fast",
    links: ["https://eips.ethereum.org/EIPS/eip-196"],
    notes: "Legacy curve with fast proving time. Known as alt_bn128 in Ethereum precompiles.",
  },
  {
    id: "bls12_381",
    name: "BLS12-381",
    family: "BLS12",
    security_bits: 128,
    field_size: 381,
    fields: {
      q: {
        number: "",
        hex: "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab",
        explain: "\frac{1}{3}({\tt x}-1)^2({\tt x}^4-{\tt x}^2+1)+{\tt x}",
      },
      r: {
        number: "",
        hex: "0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001",
        explain: "({\tt x}^4-{\tt x}^2+1)",
      },
    },
    equation: "y^2 = x^3 + 4",
    pairing_friendly: true,
    in_circuit_friendly: false,
    partners: ["jubjub"],
    used_in: ["Ethereum 2.0", "Halo2", "Arkworks", "Zcash"],
    performance: "balanced",
    links: ["https://hackmd.io/@benjaminion/bls12-381"],
    notes: "Modern widely-used pairing curve, often used with Jubjub for in-circuit operations.",
  },
  {
    id: "bls12_377",
    name: "BLS12-377",
    family: "BLS12",
    security_bits: 128,
    field_size: 377,
    pairing_friendly: true,
    in_circuit_friendly: false,
    partners: ["jubjub"],
    used_in: ["Aleo", "Zexe"],
    performance: "efficient",
    notes: "Optimized for use with constraint-efficient in-circuit curves like Jubjub.",
  },
  {
    id: "pasta",
    name: "Pasta (Pallas/Vesta)",
    family: "Cycle",
    security_bits: 128,
    field_size: 255,
    pairing_friendly: false,
    in_circuit_friendly: true,
    partners: ["pasta", "bw6_761"],
    used_in: ["Halo2", "Zcash", "Mina"],
    performance: "very_fast",
    notes:
      "Cycle-paired curves (Pallas and Vesta), designed for efficient recursive SNARKs and in-circuit proof systems.",
  },
  {
    id: "bw6_761",
    name: "BW6-761",
    family: "BW6",
    security_bits: 180,
    field_size: 761,
    pairing_friendly: true,
    in_circuit_friendly: false,
    partners: ["pasta"],
    used_in: ["Mina", "Gnark"],
    performance: "slow",
    notes:
      "High-security outer curve in recursive SNARK systems, typically paired with Pasta curves.",
  },
  {
    id: "cp6_782",
    name: "CP6-782",
    family: "CP6",
    security_bits: 256,
    field_size: 782,
    pairing_friendly: true,
    in_circuit_friendly: false,
    partners: [],
    used_in: ["Experimental"],
    performance: "very_slow",
    notes: "Very high security but impractical performance. Mostly theoretical interest.",
  },
  {
    id: "jubjub",
    name: "Jubjub",
    family: "Twisted Edwards",
    security_bits: 128,
    field_size: 255,
    pairing_friendly: false,
    in_circuit_friendly: true,
    partners: ["bls12_381", "bls12_377"],
    used_in: ["Zcash", "Zexe", "Filecoin"],
    performance: "fast",
    notes:
      "Popular in-circuit curve for privacy-preserving applications like shielded transfers or Pedersen hashes.",
  },
  {
    id: "baby_jubjub",
    name: "Baby Jubjub",
    family: "Twisted Edwards",
    security_bits: 128,
    field_size: 254,
    fields: {
      q: {
        number: "21888242871839275222246405745257275088548364400416034343698204186575808495617",
        explain: "scalar field of BN254",
      },
      r: {
        number: "2736030358979909402780800718157159386076813972158567259200215660948447373041",
        explain: "",
      },
    },
    equation: "168700 x^2 + y^2 = 1 + 168696 x^2 y^2",
    pairing_friendly: false,
    in_circuit_friendly: true,
    partners: ["bn254"],
    used_in: ["Zcash (Sapling)", "circomlib", "Semaphore"],
    performance: "fast",
    notes:
      "Used in BN254 circuits for efficient in-circuit EC operations such as signatures and key derivation.",
  },
  {
    id: "koala_bear",
    name: "Koala Bear",
    family: "Prime Field",
    security_bits: 31,
    field_size: 31,
    pairing_friendly: false,
    in_circuit_friendly: true,
    partners: [],
    used_in: ["Plonky3"],
    performance: "very_fast",
    links: ["https://github.com/Plonky3/Plonky3/blob/main/koala-bear/src/koala_bear.rs"],
    notes: "The prime field 2^31 - 2^24 + 1, a.k.a. the Koala Bear field, is used by Plonky3.",
  },
  {
    id: "baby_bear",
    name: "Baby Bear",
    family: "Prime Field",
    security_bits: 31,
    field_size: 31,
    pairing_friendly: false,
    in_circuit_friendly: true,
    partners: [],
    used_in: ["Plonky3"],
    performance: "very_fast",
    links: ["https://github.com/Plonky3/Plonky3/blob/main/baby-bear/src/baby_bear.rs"],
    notes: "The prime field 2^31 - 2^27 + 1, a.k.a. the Baby Bear field.",
  },
  {
    id: "goldilocks",
    name: "Goldilocks",
    family: "Prime Field",
    security_bits: null,
    field_size: 32,
    fields: {
      p: {
        number: "18446744069414584321",
        hex: "0xffffffff00000001",
        explain: "p=2^{64} - 2^{32} + 1",
      },
    },
    pairing_friendly: true,
    in_circuit_friendly: false,
    partners: [],
    used_in: ["Plonky2", "Plonky3"],
    performance: "very_fast",
    links: ["https://xn--2-umb.com/22/goldilocks/"],
    notes: "",
  },
];

export const cases = [
  {
    id: "ethereum_compat",
    title: "I want to use the curve on Ethereum",
    description: "Only curves supported by Ethereum precompiles are allowed (e.g., alt_bn128).",
    image: ethereum_compat,
  },
  {
    id: "use_groth16",
    title: "I want to use Groth16",
    description: "You need pairing-friendly curves with good Groth16 support and tooling.",
    image: use_groth16,
  },
  {
    id: "long_term_security",
    title: "I care about long-term cryptographic security",
    description: "Prefer curves with at least 128-bit or higher security margin.",
    image: long_term_security,
  },
  {
    id: "non_pairing",
    title: "I want a non-pairing curve",
    description:
      "Pairing-free curves are used in systems like Halo2, STARK-like designs, or recursive circuits.",
    image: non_pairing,
  },
  {
    id: "in_circuit_curve",
    title: "I want to use a curve inside the circuit (e.g., for recursive proof)",
    description:
      "You need a curve with efficient in-circuit arithmetic, often non-pairing and cycle-friendly.",
    image: in_circuit_curve,
  },
  {
    id: "recursion_outer_curve",
    title: "I want to use a curve as the outer wrapper for recursion",
    description: "You need a pairing-friendly curve capable of verifying inner SNARK proofs.",
    image: recursion_outer_curve,
  },
];

export const recommendations = [
  {
    use_case: "ethereum_compat",
    recommended: [
      {
        curve: "bn254",
        comment:
          "BN254 (alt_bn128) is the only pairing curve currently supported as a precompile on Ethereum.",
      },
    ],
  },
  {
    use_case: "use_groth16",
    recommended: [
      {
        curve: "bn254",
        comment: "Widely supported in tools like SnarkJS and ZoKrates.",
      },
      {
        curve: "bls12_381",
        comment: "Modern default with better security and good library support.",
      },
      {
        curve: "bls12_377",
        comment: "Efficient in constraints, used in Zexe-style designs like Aleo.",
      },
    ],
  },
  {
    use_case: "long_term_security",
    recommended: [
      {
        curve: "bls12_381",
        comment: "128-bit security and widely supported, good balance of security and performance.",
      },
      {
        curve: "bls12_377",
        comment: "Same security level as BLS12-381, optimized field arithmetic.",
      },
      {
        curve: "bw6_761",
        comment: "180-bit security, used in recursive proof systems.",
      },
      {
        curve: "cp6_782",
        comment: "Ultra-high 256-bit security, suitable for future-proof applications but slow.",
      },
    ],
  },
  {
    use_case: "non_pairing",
    recommended: [
      {
        curve: "pasta",
        comment: "Non-pairing and cycle-friendly, ideal for Halo2, Mina, and recursive SNARKs.",
      },
    ],
  },
  {
    use_case: "in_circuit_curve",
    recommended: [
      {
        curve: "pasta",
        comment: "Cycle-paired (Pallas/Vesta), allows efficient in-circuit verification.",
      },
    ],
  },
  {
    use_case: "recursion_outer_curve",
    recommended: [
      {
        curve: "bls12_381",
        comment: "Used as outer curve in recursive proof systems, good ecosystem support.",
      },
      {
        curve: "bw6_761",
        comment: "Often paired with Pasta as outer recursive verifier with stronger security.",
      },
    ],
  },
];
