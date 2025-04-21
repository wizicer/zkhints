import type { ResourceLink } from "./list";

export const references = [
  {
    title: "Commitment Schemes",
    authors: "Shuang Liang, zkShanghai",
    year: "2023",
    link: "https://zkshanghai.xyz/notes/lecture5.html",
  },
];

export const resources: ResourceLink[] = [
  {
    title: "Polynomial Commitments: Building Block for Universal SNARKs",
    description:
      "Includes a taxonomy of PCS based on the cryptographic primitives used (hash, pairing, etc.).",
    link: "https://www.youtube.com/watch?v=bz16BURH_u8",
    seriesLinks: [
      {
        title: "Part 1",
        link: "https://www.youtube.com/watch?v=bz16BURH_u8",
      },
      {
        title: "Part 2",
        link: "https://www.youtube.com/watch?v=BfV7HBHXfC0",
      },
      {
        title: "Part 3",
        link: "https://www.youtube.com/watch?v=TbNauD5wgXM",
      },
    ],
    author: "Justin Drake",
    difficulty: "intermediate",
  },
  {
    title: "KZG Polynomial Commitments",
    description:
      "An introduction to the KZG polynomial commitment scheme, and how to extend it to multiproofs and vector commitments.",
    link: "https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html",
    author: "Dankrad Feist",
    difficulty: "intermediate",
  },
  {
    title: "Inner Product Arguments",
    description:
      "An introduction to the inner product argument (IPA) protocol, a primitive used to build PCS. Often instantiated with the vector Pedersen commitment.",
    link: "https://dankradfeist.de/ethereum/2021/07/27/inner-product-arguments.html",
    author: "Dankrad Feist",
    difficulty: "intermediate",
  },
  {
    title: "Inner Product Proof Notes (Bulletproofs)",
    description: "An excellent write-up on inner product arguments in the context of Bulletproofs.",
    link: "https://doc-internal.dalek.rs/bulletproofs/notes/inner_product_proof/index.html",
    difficulty: "intermediate",
  },
  {
    title: "Anatomy of a STARK, Part 3: FRI",
    description:
      "An introduction to the FRI (Fast Reed-Solomon IOP of Proximity) protocol, an oracle proof of proximity used in STARKs.",
    link: "https://aszepieniec.github.io/stark-anatomy/fri.html",
    author: "Alan Szepieniec",
    difficulty: "intermediate",
  },
  {
    title: "arkworks-rs/poly-commit",
    description: "A Rust library supporting four polynomial commitment schemes.",
    link: "https://github.com/arkworks-rs/poly-commit",
    difficulty: "intermediate",
  },
  {
    title: "Polynomial Commitment Benchmark",
    description:
      "Benchmarks for the Commit algorithm in KZG, IPA-based, and FRI-based polynomial commitment implementations.",
    link: "https://2π.com/23/pc-bench/",
    author: "Remco Bloemen",
    difficulty: "intermediate",
  },
];
