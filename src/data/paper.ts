import alice from "../assets/role/alice.png";
import bob from "../assets/role/bob.png";
import GMR85 from "../assets/paper_abs/GMR85.png";
import GMW87 from "../assets/paper_abs/GMW87.png";
import Kilian92 from "../assets/paper_abs/Kilian92.png";
import FS86 from "../assets/paper_abs/FS86.png";
import BGGHKMR90 from "../assets/paper_abs/BGGHKMR90.png";
import Shamir92 from "../assets/paper_abs/Shamir92.png";

export interface Paper {
  id: string;
  title: string;
  authors: string;
  year: string;
  link: string;
  drawing?: {
    left: ImageMetadata;
    right: ImageMetadata;
    center: ImageMetadata;
    centerWidth: number;
    centerPosition: [number, number];
  };
}

export interface Contribution {
  id: string;
  contribution: string;
  summary: string;
}

export const papers: Paper[] = [
  {
    id: "GMR85",
    title: "The knowledge complexity of interactive proof-systems",
    authors: "Goldwasser, S., Micali, S., & Rackoff, C.",
    year: "1985",
    link: "https://dl.acm.org/doi/10.1145/22145.22178",
    drawing: {
      left: alice,
      right: bob,
      center: GMR85,
      centerWidth: 190,
      centerPosition: [0, -10],
    },
  },
  {
    id: "FS86",
    title: "How to prove yourself: Practical solutions to identification and signature problems",
    authors: "Fiat, A., & Shamir, A.",
    year: "1986",
    link: "https://link.springer.com/content/pdf/10.1007/3-540-47721-7_12",
    drawing: {
      left: alice,
      right: bob,
      center: FS86,
      centerWidth: 116,
      centerPosition: [0, -10],
    },
  },
  {
    id: "GMW87",
    title:
      "How to prove all NP statements in zero-knowledge and a methodology of cryptographic protocol design",
    authors: "Goldreich, O., Micali, S., & Wigderson, A.",
    year: "1987",
    link: "https://link.springer.com/content/pdf/10.1007/3-540-47721-7_11.pdf",
    drawing: {
      left: alice,
      right: bob,
      center: GMW87,
      centerWidth: 76,
      centerPosition: [0, -10],
    },
  },
  {
    id: "Kilian92",
    title: "A note on efficient zero-knowledge proofs and arguments",
    authors: "Kilian, J.",
    year: "1992",
    link: "https://people.csail.mit.edu/vinodv/6892-Fall2013/efficientargs.pdf",
    drawing: {
      left: alice,
      right: bob,
      center: Kilian92,
      centerWidth: 36,
      centerPosition: [0, 10],
    },
  },
  {
    id: "BGGHKMR90",
    title: "Everything provable is provable in zero-knowledge",
    authors:
      "Ben-Or, M., Goldreich, O., Goldwasser, S., Håstad, J., Kilian, J., Micali, S., & Rogaway, P.",
    year: "1990",
    link: "https://dl.acm.org/doi/pdf/10.5555/88314.88333",
    drawing: {
      left: alice,
      right: bob,
      center: BGGHKMR90,
      centerWidth: 210,
      centerPosition: [0, -30],
    },
  },
  {
    id: "Shamir92",
    title: "IP=PSPACE",
    authors: "Shamir, A.",
    year: "1992",
    link: "https://dl.acm.org/doi/pdf/10.1145/146585.146609",
    drawing: {
      left: alice,
      right: bob,
      center: Shamir92,
      centerWidth: 151,
      centerPosition: [-2, -20],
    },
  },
  {
    id: "Micali00",
    title: "Computationally sound proofs",
    authors: "Micali, S.",
    year: "2000",
    link: "https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Proof%20Systems/Computationally_Sound_Proofs.pdf",
  },
  {
    id: "ALMSS92",
    title: "Proof Verification and Hardness of Approximation Problems",
    authors: "Sanjeev Arora, Carsten Lund, Rajeev Motwani, Madhu Sudan, Mario Szegedy",
    year: "1992",
    link: "https://madhu.seas.harvard.edu/papers/1992/almss-conf.pdf",
  },
  {
    id: "Kilian92",
    title: "A note on efficient zero-knowledge proofs and arguments",
    authors: "Kilian, J.",
    year: "1992",
    link: "https://people.csail.mit.edu/vinodv/6892-Fall2013/efficientargs.pdf",
  },
  {
    id: "GKR08",
    title: "Delegating computation: interactive proofs for muggles",
    authors: "Goldwasser, S., Kalai, Y. T., & Rothblum, G. N.",
    year: "2008",
    link: "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/12/2008-DelegatingComputation.pdf",
  },
  {
    id: "LFK92",
    title: "Algebraic methods for interactive proof systems",
    authors: "CARSTEN LUND, LANCE FORTNOW, AND HOWARD KARLOFF",
    year: "1992",
    link: "https://dl.acm.org/doi/pdf/10.1145/146585.146605",
  },
  {
    id: "Thaler15",
    title: "A note on the GKR protocol",
    authors: "Thaler, J.",
    year: "2015",
    link: "https://people.cs.georgetown.edu/jthaler/GKRNote.pdf",
  },
  {
    id: "GGPR13",
    title: "Quadratic span programs and succinct NIZKs without PCPs",
    authors: "Gennaro, R., Gentry, C., Parno, B., & Raykova, M.",
    year: "2013",
    link: "https://eprint.iacr.org/2012/215.pdf",
  },
  {
    id: "Groth10",
    title: "Short pairing-based non-interactive zero-knowledge arguments",
    authors: "Groth, J.",
    year: "2010",
    link: "https://www.iacr.org/archive/asiacrypt2010/6477323/6477323.pdf",
  },
  {
    id: "PHGR16",
    title: "Pinocchio: Nearly practical verifiable computation",
    authors: "Parno, B., Howell, J., Gentry, C., & Raykova, M.",
    year: "2016",
    link: "https://eprint.iacr.org/2013/279.pdf",
  },
  {
    id: "Groth16",
    title: "On the size of pairing-based non-interactive arguments",
    authors: "Groth, J.",
    year: "2016",
    link: "https://eprint.iacr.org/2016/260.pdf",
  },
  {
    id: "BCGGMTV14",
    title: "Zerocash: Decentralized anonymous payments from bitcoin",
    authors: "Sasson, E. B., Chiesa, A., Garman, C., Green, M., Miers, I., Tromer, E., & Virza, M.",
    year: "2014",
    link: "http://zerocash-project.org/media/pdf/zerocash-oakland2014.pdf",
  },
  {
    id: "GWC19",
    title:
      "Plonk: Permutations over lagrange-bases for oecumenical noninteractive arguments of knowledge",
    authors: "Gabizon, A., Williamson, Z. J., & Ciobotaru, O.",
    year: "2019",
    link: "https://eprint.iacr.org/2019/953.pdf",
  },
  {
    id: "KZG10",
    title: "Constant-size commitments to polynomials and their applications",
    authors: "Kate, A., Zaverucha, G. M., & Goldberg, I.",
    year: "2010",
    link: "https://www.cypherpunks.ca/~iang/pubs/PolyCommit-AsiaCrypt.pdf",
  },
  {
    id: "BBHR18",
    title: "Scalable, transparent, and post-quantum secure computational integrity",
    authors: "Ben-Sasson, E., Bentov, I., Horesh, Y., & Riabzev, M.",
    year: "2018",
    link: "https://eprint.iacr.org/2018/046.pdf",
  },
  {
    id: "BBHR18b",
    title: "Fast reed-solomon interactive oracle proofs of proximity",
    authors: "Ben-Sasson, E., Bentov, I., Horesh, Y., & Riabzev, M.",
    year: "2018",
    link: "https://eccc.weizmann.ac.il/report/2017/134/",
  },
  {
    id: "Valiant08",
    title:
      "Incrementally verifiable computation or proofs of knowledge imply time/space efficiency",
    authors: "Valiant, P.",
    year: "2008",
    link: "https://iacr.org/archive/tcc2008/49480001/49480001.pdf",
  },
  {
    id: "KST22",
    title: "Nova: Recursive zero-knowledge arguments from folding schemes",
    authors: "Kothapalli, A., Setty, S., & Tzialla, I.",
    year: "2022",
    link: "https://eprint.iacr.org/2021/370.pdf",
  },
  {
    id: "BCTV14",
    title: "Succinct Non-Interactive zero knowledge for a von neumann architecture",
    authors: "Ben-Sasson, E., Chiesa, A., Tromer, E., & Virza, M.",
    year: "2014",
    link: "https://eprint.iacr.org/2013/879.pdf",
  },
  {
    id: "GPR21",
    title: "Cairo–a Turing-complete STARK-friendly CPU architecture",
    authors: "Goldberg, L., Papini, S., & Riabzev, M.",
    year: "2021",
    link: "https://eprint.iacr.org/2021/1063.pdf",
  },
];

export const contributions: Contribution[] = [
  {
    id: "GMR85",
    contribution: "The origins of zero-knowledge proofs",
    summary:
      "This foundational paper introduced the concept of knowledge complexity in interactive proof systems, defining the relationship between the prover and verifier and formalizing zero-knowledge proofs with quadratic residuosity as an example.",
  },
  {
    id: "FS86",
    contribution: "First practical applications",
    summary:
      "Fiat and Shamir introduced the first practical applications of zero-knowledge proofs, including an identification scheme and a signature scheme, using the Fiat-Shamir heuristic to convert interactive proofs into non-interactive ones.",
  },
  {
    id: "GMW87",
    contribution: "Proving NP statements in zero-knowledge",
    summary:
      "This paper demonstrated that every NP language admits a zero-knowledge proof system, providing a specific example with the graph 3-colorability problem, which could be proven without revealing any additional information.",
  },
  {
    id: "BGGHKMR90",
    contribution: "Zero-knowledge for all languages",
    summary:
      "This work proved that every language in NP admits a zero-knowledge proof system, which was a major theoretical milestone for zero-knowledge proofs, further expanding the scope of provable languages.",
  },
  {
    id: "Shamir92",
    contribution: "IP = PSPACE",
    summary:
      "Shamir showed that the complexity class IP (Interactive Polynomial time) is equivalent to PSPACE, providing a deeper understanding of the computational power of interactive proof systems.",
  },
  {
    id: "Micali00",
    contribution: "First SNARK construction",
    summary:
      "Micali’s paper introduced the first succinct non-interactive proof (SNARK) construction, transforming probabilistically checkable proofs (PCPs) into efficient non-interactive proofs using Merkle trees.",
  },
  {
    id: "ALMSS92",
    contribution: "Proof verification and approximation hardness",
    summary:
      "This paper introduced algebraic methods for proof verification and provided key insights into the hardness of approximation problems, contributing to the development of PCPs and interactive proof systems.",
  },
  {
    id: "Kilian92",
    contribution: "Efficient zero-knowledge arguments",
    summary:
      "Kilian proposed an efficient zero-knowledge argument system that demonstrated the feasibility of practical zero-knowledge proofs for cryptographic protocols.",
  },
  {
    id: "GKR08",
    contribution: "Efficient delegation of computation",
    summary:
      "The GKR protocol introduced an interactive proof system for delegating computation with arithmetic circuits, achieving doubly-efficient proofs where both the prover and verifier run in polynomial time.",
  },
  {
    id: "LFK92",
    contribution: "Algebraic methods for proofs",
    summary:
      "Lund, Fortnow, and Karloff introduced algebraic methods for interactive proof systems, contributing to the development of efficient proof systems that use algebraic structures for verification.",
  },
  {
    id: "Thaler15",
    contribution: "GKR protocol overview",
    summary:
      "Thaler’s note provided a detailed overview of the GKR protocol, explaining how it can be used to verify computations performed by arithmetic circuits, contributing to the practical application of interactive proofs.",
  },
  {
    id: "GGPR13",
    contribution: "Practical SNARK construction",
    summary:
      "This paper presented a practical SNARK construction based on quadratic span programs, offering significant improvements in efficiency over previous theoretical SNARKs and laying the groundwork for later systems like Groth16.",
  },
  {
    id: "Groth10",
    contribution: "Short pairing-based SNARKs",
    summary:
      "Groth introduced a short, pairing-based non-interactive zero-knowledge argument, which became one of the first widely-used SNARK systems, particularly suitable for practical applications like blockchain.",
  },
  {
    id: "PHGR16",
    contribution: "Verifiable computation via Pinocchio",
    summary:
      "The Pinocchio protocol provided a practical, verifiable computation framework using SNARKs, enabling secure and efficient computation delegation with cryptographic guarantees.",
  },
  {
    id: "Groth16",
    contribution: "Efficient pairing-based SNARK",
    summary:
      "Groth’s 2016 paper optimized pairing-based SNARKs for efficiency, becoming a standard in the field due to its reduced proof sizes and improved verification times.",
  },
  {
    id: "BCGGMTV14",
    contribution: "Decentralized anonymous payment system",
    summary:
      "Zerocash introduced a decentralized anonymous payment system based on zk-SNARKs, allowing for privacy-preserving transactions in blockchain systems.",
  },
  {
    id: "GWC19",
    contribution: "Introduced universal SNARK",
    summary:
      "The PlonK SNARK introduced a universal SNARK based on polynomial interactive oracle proofs, greatly enhancing the scalability and flexibility of zk-SNARKs for general applications.",
  },
  {
    id: "KZG10",
    contribution: "Polynomial commitment scheme",
    summary:
      "The KZG commitment scheme introduced constant-size commitments to polynomials, which is foundational for polynomial-based proof systems like PlonK and other zk-SNARKs.",
  },
  {
    id: "BBHR18",
    contribution: "Post-quantum secure integrity",
    summary:
      "This paper proposed scalable, transparent, and post-quantum secure computational integrity systems using zero-knowledge proofs, advancing the field of quantum-resistant cryptographic protocols.",
  },
  {
    id: "BBHR18b",
    contribution: "Reed-Solomon IOPs",
    summary:
      "The introduction of fast Reed-Solomon interactive oracle proofs (IOPs) improved the efficiency of verifiable computation protocols, enhancing the performance of zero-knowledge systems.",
  },
  {
    id: "Valiant08",
    contribution: "Incrementally verifiable computation",
    summary:
      "Valiant proposed the concept of incrementally verifiable computation, allowing proofs of long computations to be verified step by step, enhancing proof efficiency and scalability.",
  },
  {
    id: "KST22",
    contribution: "Recursive ZK arguments",
    summary:
      "The Nova paper introduced recursive zero-knowledge arguments, a major step forward in achieving efficient and scalable proofs for increasingly complex computations.",
  },
  {
    id: "BCTV14",
    contribution: "zkVM architecture",
    summary:
      "This paper introduced the concept of zkVMs, enabling the execution of arbitrary programs while generating verifiable proofs for their correctness, which became foundational for zk-rollups in blockchain systems.",
  },
  {
    id: "GPR21",
    contribution: "STARK-friendly CPU",
    summary:
      "The Cairo CPU architecture, optimized for STARK-based proof systems, provided a Turing-complete architecture that could be efficiently proven with zero-knowledge proofs.",
  },
];

export const references = [
  {
    title: "Bilinear Pairings-based Zero-Knowledge Proofs",
    authors: "Jens Groth, DFINITY",
    year: "2019",
    link: "https://www.youtube.com/watch?v=X-z3JYlFdzs",
  },
  {
    title: "10 Must-Read Papers That Shaped Modern Zero-Knowledge Proofs",
    authors: "zksecurity",
    year: "2024",
    link: "https://blog.zksecurity.xyz/posts/ten-zk-papers/",
  },
];
