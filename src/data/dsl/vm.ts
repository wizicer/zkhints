import type { DslDefinition } from "../dsl";

export const dslDefinitions: DslDefinition[] = [
  {
    name: "Cairo",
    link: null,
    company_or_brand: "StarkWare",
    arithmetization: "VM",
    syntax: "Rust",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "Zinc",
    link: "https://github.com/matter-labs/zinc",
    company_or_brand: "zkSync",
    arithmetization: "VM",
    syntax: "Rust",
    programming_capability: "Yes",
    backend_supported: null,
    note: "Officially abandoned by the team in 2021",
  },
  {
    name: "zkas",
    link: "https://darkrenaissance.github.io/darkfi/zkas/index.html",
    company_or_brand: "Darkfi",
    arithmetization: "VM",
    syntax: "C-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "Polylang",
    link: "https://polylang.dev/docs",
    company_or_brand: "Polybase",
    arithmetization: "VM",
    syntax: "JS-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: "Built on MidenVM",
  },
  {
    name: "cairo",
    link: "https://github.com/lambdaclass/cairo-vm",
    company_or_brand: "Cairo",
    arithmetization: "AIR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: null,
    note: "FRI",
  },
  {
    name: "ceno",
    link: "https://github.com/scroll-tech/ceno",
    company_or_brand: "Scroll",
    arithmetization: "GKR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Brakedown, Rust",
    note: "Lookup, Sumcheck",
  },
  {
    name: "eigen zkvm",
    link: "https://github.com/0xEigenLabs/eigen-zkvm",
    company_or_brand: "EigenLabs",
    arithmetization: "eAIR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Groth16, Solidity",
    note: null,
  },
  {
    name: "jolt",
    link: "https://github.com/a16z/jolt",
    company_or_brand: "a16z",
    arithmetization: "R1CS",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Spartan, WASM",
    note: "Lookup, Sumcheck, Offline Mem Check",
  },
  {
    name: "miden",
    link: "https://github.com/0xPolygonMiden/miden-vm",
    company_or_brand: "Polygon",
    arithmetization: "AIR (winterfell)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Rust",
    note: "Lookup, Winterfell",
  },
  {
    name: "mozak vm",
    link: "https://github.com/0xmozak/mozak-vm",
    company_or_brand: "Mozak",
    arithmetization: "AIR (Starky)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Rust",
    note: "Lookup, FRI",
  },
  {
    name: "nexus",
    link: "https://github.com/nexus-xyz/nexus-zkvm",
    company_or_brand: "Nexus",
    arithmetization: "Folded Accumulated Relaxed R1CS",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Accumulated Folding Spartan + {Zeromorph, PSE-Halo2 (KZG)}, Rust",
    note: null,
  },
  {
    name: "o1vm",
    link: "https://github.com/o1-labs/proof-systems/tree/master/o1vm",
    company_or_brand: "O(1) Labs",
    arithmetization: "Plonkish",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "IPA, Rust",
    note: "Lookup",
  },
  {
    name: "olavm",
    link: "https://github.com/Sin7Y/olavm",
    company_or_brand: "Ola",
    arithmetization: "AIR (plonky2)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup",
  },
  {
    name: "openvm",
    link: "https://github.com/openvm-org/openvm",
    company_or_brand: "OpenVM",
    arithmetization: "AIR (plonky3), GKR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: null,
  },
  {
    name: "pico",
    link: "https://github.com/brevis-network/pico",
    company_or_brand: "Brevis",
    arithmetization: "AIR (plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust, Solidity",
    note: "Lookup",
  },
  {
    name: "powdrVM",
    link: "https://github.com/powdr-labs/powdr",
    company_or_brand: "Powdr Labs",
    arithmetization: "AIR -ish (PIL, plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported:
      "PSE-Halo2 (KZG), Plonky3, FRI([eSTARK](https://eprint.iacr.org/2023/474)), Solidity",
    note: null,
  },
  {
    name: "risc0",
    link: "https://github.com/risc0/risc0",
    company_or_brand: "Risc Zero",
    arithmetization: "PLONK",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Plookup, Rust, Solidity",
    note: "[DEEP-FRI & ALI](https://eprint.iacr.org/2021/582.pdf)",
  },
  {
    name: "sp1",
    link: "https://github.com/succinctlabs/sp1",
    company_or_brand: "Succinct",
    arithmetization: "AIR (plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust, Solidity",
    note: "Lookup",
  },
  {
    name: "sphinx",
    link: "https://github.com/argumentcomputer/sphinx",
    company_or_brand: "Argument Computer",
    arithmetization: "AIR (core), PLONK (wrap)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup",
  },
  {
    name: "triton vm",
    link: "https://github.com/TritonVM/triton-vm",
    company_or_brand: "TritonVM",
    arithmetization: "AIR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup, [Contiguity](https://triton-vm.org/spec/memory-consistency.html)",
  },
  {
    name: "valida",
    link: "https://github.com/lita-xyz/valida-releases",
    company_or_brand: "Valida",
    arithmetization: "AIR (plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI",
    note: null,
  },
  {
    name: "zisk",
    link: "https://github.com/0xPolygonHermez/zisk",
    company_or_brand: "Polygon Hermez",
    arithmetization: "?",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "?",
    note: "?",
  },
  {
    name: "zkm",
    link: "https://github.com/zkMIPS/zkm",
    company_or_brand: "zkMIPS",
    arithmetization: "AIR (plonky2)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup",
  },
  {
    name: "zkWasm",
    link: "https://github.com/DelphinusLab/zkWasm",
    company_or_brand: "DelphinusLab",
    arithmetization: "PLONK",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "IPA?, Rust",
    note: null,
  },
];
