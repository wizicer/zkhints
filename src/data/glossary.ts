export interface Reference {
  id?: string;
  title: string;
  authors: string | string[];
  year: string;
  link: string;
}

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

const localizedCategoryText: Record<string, { title: string; description: string }> = {
  fundamentals: {
    title: "基礎概念",
    description: "zero-knowledge proofs の中核概念と基礎用語",
  },
  "proof-systems": {
    title: "Proof Systems",
    description: "zero-knowledge proof systems の種類と variants",
  },
  "constraint-systems": {
    title: "Constraint Systems",
    description: "計算を数学的 constraints として表現する方法",
  },
  "cryptographic-primitives": {
    title: "Cryptographic Primitives",
    description: "zero-knowledge proof construction で使われる構成要素",
  },
  "advanced-concepts": {
    title: "発展的な概念",
    description: "ZK systems の高度な techniques と optimizations",
  },
  "zk-applications": {
    title: "ZK Applications",
    description: "zero-knowledge proofs の一般的な applications と use cases",
  },
  "mathematical-foundations": {
    title: "数学的基礎",
    description: "zero-knowledge proofs の背後にある数学的概念",
  },
};

const localizedDefinitions: Record<string, string> = {
  "Zero-Knowledge Proof":
    "ある party (prover) が、statement が真であることを、その statement の正しさ以外の情報を明かさずに別の party (verifier) へ証明できる cryptographic method。",
  Prover:
    "zero-knowledge protocol で secret information (witness) を持ち、その secret を明かさずに statement が真であることを verifier に納得させたい party。",
  Verifier:
    "zero-knowledge protocol で proof の validity を確認する party。statement が真か偽か以外の secret information は学びません。",
  Witness:
    "prover が proof を生成するために使う secret input または private data。witness は verifier には明かされませんが、有効な proof を作るために不可欠です。",
  "Public Input":
    "prover と verifier の双方に知られている data。witness とともに proof の生成・検証に使われ、public parameters や instance とも呼ばれます。",
  Statement:
    "zero-knowledge proof で証明される claim。多くの場合、prover が条件を満たす witness を知っていることを、witness 自体を明かさずに主張します。",
  Soundness:
    "dishonest prover が false statement を verifier に受け入れさせられる確率を negligible に抑える security property。",
  Completeness:
    "valid witness を持つ honest prover なら、statement が真であることを verifier に常に納得させられるという property。",
  "Knowledge Soundness":
    "prover が verifier を納得させられるなら、その prover は実際に witness を「知っている」はずだと保証する、より強い soundness。通常 extractor algorithm により形式化されます。",
  zkSNARK:
    "succinct (proof size が小さい)、non-interactive (往復通信が不要)、proof of knowledge を提供する ZKP の一種。多くの zkSNARKs は trusted setup を必要とします。",
  zkSTARK:
    "transparent (trusted setup 不要)、scalable、post-quantum secure な ZKP の一種。STARKs は一般に SNARKs より proof size が大きい一方、trusted setup assumption を避けます。",
  PLONK:
    "同じ size のすべての circuit に対して単一の trusted setup を使える universal zkSNARK construction。柔軟性と効率のため広く採用されています。",
  Groth16:
    "proof size と verification time の点で非常に効率的な zkSNARK construction の一つ。circuit-specific trusted setup が必要ですが、非常に compact な proofs を生成します。",
  Halo:
    "新しい polynomial commitment scheme を使うことで trusted setup を不要にする recursive proof composition technique。効率的な proof aggregation を可能にします。",
  Bulletproofs:
    "trusted setup を必要としない non-interactive zero-knowledge proof system。効率的な range proofs で知られますが、verification time は linear です。",
  Nova:
    "incrementally verifiable computation (IVC) のための folding scheme。各 step の overhead を小さく抑えながら効率的な recursive proof composition を可能にします。",
  R1CS:
    "各 constraint が (a · s) * (b · s) = (c · s) の形を持つ constraint system。a、b、c は vectors、s は witness vector です。Groth16 などの SNARKs で使われます。",
  Plonkish:
    "PLONK に基づく arithmetization schemes の family。custom gates と lookup arguments を使う table-based approach を採ります。Halo2、Plonky2 などを含みます。",
  AIR:
    "STARKs で使われる constraint system。computation を execution trace 上の polynomial constraints として表現し、各 row で constraints を確認します。",
  QAP:
    "R1CS constraints を polynomials として表す representation。polynomial identity testing による効率的な verification を可能にし、多くの SNARK constructions の中核です。",
  Circuit:
    "finite field 上の addition/multiplication gates からなる directed acyclic graph として computation を表す arithmetic circuit。ZK systems で computation を表現する標準的な方法です。",
  Constraint:
    "witness values が満たす必要のある mathematical equation。circuits は prover が満たすべき constraints の集合へ compile されます。",
  Arithmetization:
    "computation を R1CS、AIR、Plonkish などの arithmetic representation に変換し、zero-knowledge proof system で使えるようにする process。",
  "Polynomial Commitment":
    "prover が polynomial に commit し、後から特定点での evaluation を、polynomial 全体を明かさずに証明できる cryptographic primitive。",
  "KZG Commitment":
    "elliptic curve pairings を使う polynomial commitment scheme。constant-size commitments と proofs を生成しますが、trusted setup が必要です。",
  FRI:
    "STARKs で使われる protocol。committed function が low-degree polynomial に近いことを証明します。transparent な polynomial commitments を可能にします。",
  IPA:
    "pairings や trusted setup を必要としない polynomial commitment scheme。Bulletproofs や Halo で使われます。proof size は logarithmic ですが verification time は linear です。",
  "Pedersen Commitment":
    "computationally binding かつ perfectly hiding な cryptographic commitment scheme。ZK protocols で values に commit するためによく使われます。",
  "Merkle Tree":
    "各 leaf が data の hash、各 non-leaf node が children の hash を持つ tree data structure。ZK systems では効率的な membership proofs に使われます。",
  "Fiat-Shamir Transform":
    "verifier の random challenges を transcript の hash outputs に置き換えることで、interactive proof を non-interactive に変換する technique。",
  Recursion:
    "proof を別の proof の中で verify する technique。proof composition と aggregation を可能にし、ZK systems の scaling に重要です。",
  IVC:
    "computation の各 step が、それ以前のすべての step を verify する proof を生成する technique。long-running computations の効率的な verification を可能にします。",
  "Folding Scheme":
    "relation の複数 instance を単一 instance に combine する technique。各 step で full SNARK verification を行わずに efficient recursive proof composition を可能にします。",
  "Lookup Argument":
    "computation 内の values が predefined table に属することを証明する technique。non-arithmetic operations の効率的な実装を可能にします。",
  "Custom Gates":
    "Plonkish systems において、単純な addition/multiplication を超える gates。特定 operations をより効率的に表現できます。",
  "Proof Aggregation":
    "複数の proofs を単一の proof に combine し、それぞれを個別に verify するより効率的に検証できるようにすること。",
  "Trusted Setup":
    "特定の ZK systems の public parameters を生成する一度限りの ceremony。使用された secret randomness は破棄される必要があり、漏洩すると fake proofs を作れる可能性があります。",
  "Universal Setup":
    "一定 size までの任意の circuit で reuse できる trusted setup。circuit-specific setup と異なり、新しい circuit ごとに再生成する必要がありません。",
  zkRollup:
    "transactions を off-chain で bundle し、validity proof を on-chain に投稿する Layer 2 scaling solution。base layer の security を継承しながら throughput を高めます。",
  zkEVM:
    "Ethereum Virtual Machine と compatible な zero-knowledge virtual machine。既存の Ethereum smart contracts を ZK proof generation とともに実行できます。",
  zkVM:
    "program execution の zero-knowledge proofs を生成できる virtual machine。RISC Zero、SP1、各種 zkEVMs などがあります。",
  "Private Transaction":
    "sender、receiver、amount などの details を zero-knowledge proofs で隠しつつ、validity は証明する blockchain transaction。",
  "Verifiable Computation":
    "computation を再実行せずに、正しく実行されたことを ZK proofs で verify すること。trustless outsourcing of computation を可能にします。",
  zkML:
    "machine learning に zero-knowledge proofs を適用し、model や input data を明かさずに ML inference の verification を可能にする approach。",
  "Finite Field":
    "有限個の elements を持つ field。通常 prime p に対する F_p と表されます。ZK circuits の arithmetic は finite fields 上で行われます。",
  "Elliptic Curve":
    "field 上で y² = x³ + ax + b の形の equation により定義される curve。points の group structure は多くの ZK constructions の基礎です。",
  Pairing:
    "elliptic curve groups の間の bilinear map e: G₁ × G₂ → G_T。exponent 内の polynomial equations の verification を可能にし、Groth16 などの SNARKs に重要です。",
  "Lagrange Interpolation":
    "与えられた点集合を通る polynomial を見つける method。constraints を encode するため、polynomial-based ZK systems で広く使われます。",
  FFT:
    "polynomial multiplication と evaluation のための efficient algorithm。large polynomials を扱う ZK systems の performance に重要です。",
  NTT:
    "FFT の finite-field analog。ZK proof systems で efficient polynomial operations に使われます。field が roots of unity を持つ必要があります。",
  "Schwartz-Zippel Lemma":
    "degree d の non-zero polynomial を random point で evaluate したとき、zero になる確率は高々 d/|F| であるという fundamental result。ZK における polynomial identity testing の基礎です。",
};

export const getGlossaryCategories = (lang: "en" | "ja" = "en"): GlossaryCategory[] => {
  if (lang !== "ja") return glossaryCategories;

  return glossaryCategories.map((category) => ({
    ...category,
    ...(localizedCategoryText[category.id] || {}),
    terms: category.terms.map((term) => ({
      ...term,
      definition: localizedDefinitions[term.term] || term.definition,
    })),
  }));
};

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
