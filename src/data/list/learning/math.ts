import type { ResourceSection } from "../../list";

export const math: ResourceSection = {
  id: "math-crypto",
  title: "Mathematical & Cryptography",
  description: "Essential mathematics and cryptography resources for understanding ZK proofs.",
  emoji: "📐",
  links: [
    {
      title: "Introduction to Mathematical Cryptography",
      description: "Comprehensive textbook covering the mathematical foundations of cryptography.",
      link: "https://github.com/isislovecruft/library--/blob/master/cryptography%20%26%20mathematics/An%20Introduction%20to%20Mathematical%20Cryptography%20(2014)%20-%20Hoffstein%2C%20Pipher%2C%20Silverman.pdf",
    },
    {
      title: "Modern Computer Algebra",
      description: "Textbook on computer algebra, essential for understanding ZK implementations.",
      link: "https://maths-people.anu.edu.au/~brent/pd/mca-cup-0.5.9.pdf",
    },
    {
      title: "Explicit-Formulas Database",
      description:
        "Collection of formulas for efficient implementation of elliptic curve operations.",
      link: "http://hyperelliptic.org/EFD/",
    },
    {
      title: "Abstract Algebra",
      description:
        "Textbook covering group theory, rings, and fields - fundamental to cryptography.",
      link: "http://abstract.ups.edu/download/aata-20220728.pdf",
    },
    {
      title: "Computational Introduction to Number Theory and Algebra",
      description: "Accessible introduction to number theory and algebra with computational focus.",
      link: "https://shoup.net/ntb/ntb-v2.pdf",
    },
    {
      title: "A Graduate Course in Applied Cryptography",
      description: "Comprehensive cryptography textbook from Stanford professors.",
      link: "https://crypto.stanford.edu/~dabo/cryptobook/BonehShoup_0_4.pdf",
    },
    {
      title: "Elliptic Curves: Number Theory And Cryptography",
      description: "Deep dive into elliptic curves and their applications in cryptography.",
      link: "https://people.cs.nctu.edu.tw/~rjchen/ECC2012S/Elliptic%20Curves%20Number%20Theory%20And%20Cryptography%202n.pdf",
    },
    {
      title: "Pairings for Beginners",
      description: "Introduction to pairing-based cryptography, essential for many ZK systems.",
      link: "https://static1.squarespace.com/static/5fdbb09f31d71c1227082339/t/5ff394720493bd28278889c6/1609798774687/PairingsForBeginners.pdf",
    },
    {
      title: "The MoonMath Manual to zk-SNARKs",
      description: "Accessible introduction to the mathematics behind zk-SNARKs.",
      link: "https://leastauthority.com/community-matters/moonmath-manual/",
    },
    {
      title: "Explaining SNARKs Series",
      description: "Step-by-step explanation of how SNARKs work from Electric Coin Company.",
      link: "https://electriccoin.co/blog/snark-explain/",
      seriesLinks: [
        {
          title: "Part I: Homomorphic Hidings",
          link: "https://electriccoin.co/blog/snark-explain/",
        },
        {
          title: "Part II: Blind Evaluation of Polynomials",
          link: "https://electriccoin.co/blog/snark-explain2/",
        },
        {
          title: "Part III: The Knowledge of Coefficient Test and Assumption",
          link: "https://electriccoin.co/blog/snark-explain3/",
        },
        {
          title: "Part IV: How to make Blind Evaluation of Polynomials Verifiable",
          link: "https://electriccoin.co/blog/snark-explain4/",
        },
        {
          title: "Part V: From Computations to Polynomials",
          link: "https://electriccoin.co/blog/snark-explain5/",
        },
        {
          title: "Part VI: The Pinocchio Protocol",
          link: "https://electriccoin.co/blog/snark-explain6/",
        },
        {
          title: "Part VII: Pairings of Elliptic Curves",
          link: "https://electriccoin.co/blog/snark-explain7/",
        },
      ],
    },
    {
      title: "Proofs, Arguments, and Zero-Knowledge",
      description: "Comprehensive textbook on interactive proofs and zero-knowledge.",
      link: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf",
    },
    {
      title: "Succinct Proofs and Linear Algebra",
      description: "Research paper connecting linear algebra to succinct proof systems.",
      link: "https://eprint.iacr.org/2023/1478.pdf",
    },
    {
      title: "zkMarek Session 1: Elliptic Curves to Verkle Trees",
      description:
        "Season 1 of zkMarek aimed at intuitively explaining topics like elliptic curves, ECDSA, trusted setup, KZG and Vector commitments, Blobs, Merkle and Verkle Trees.",
      link: "https://www.youtube.com/playlist?list=PLj0C1OnlNNly58s-JI_bDAdCY7JLgcy5I",
      seriesLinks: [
        {
          title: "Episode 1: Build Ethereum Wallet with Elliptic Curves",
          link: "https://www.youtube.com/watch?v=_JiPcvtr8sY",
        },
        {
          title: "Episode 2: How Ethereum transactions are secured by ECDSA algorithm",
          link: "https://www.youtube.com/watch?v=P-wVEDnnB10",
        },
        {
          title: "Episode 3: What is a trusted setup and how is it secured? Pairings operations",
          link: "https://www.youtube.com/watch?v=IDKn2Y9Kkc4",
        },
        {
          title: "Episode 4: How KZG Commitment Works: Polynomial Commitments Simplified",
          link: "https://www.youtube.com/watch?v=H7AeoqzAfD0",
        },
        {
          title: "Episode 5: How do Ethereum blobs really work? Vector commitments simplified",
          link: "https://www.youtube.com/watch?v=CaRNm6g2nVc",
        },
        {
          title: "Episode 6: Ethereum's Storage Secret: Why Merkle Patricia Tries Matter",
          link: "https://www.youtube.com/watch?v=DGvRY9BjLRs",
        },
      ],
    },
  ],
};
