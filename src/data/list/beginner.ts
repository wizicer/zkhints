import type { Resource } from "../list";

export const beginner: Resource = {
  id: "beginner",
  sections: [
    {
      id: "intro",
      title: "What is Zero-Knowledge?",
      description: "Basic explanations and intuitive overviews of Zero-Knowledge Proofs.",
      emoji: "🧠",
      links: [
        {
          title: "Zero Knowledge Proofs MOOC, Spring 2023",
          description: "A online MOOC from University of California, Berkeley.",
          recommended: true,
          link: "https://rdi.berkeley.edu/zk-learning/",
        },
        {
          title: "A beginner's intro to coding zero-knowledge proofs",
          description:
            "This article will cover what a zero-knowledge proof is, how it is used from a developer's perspective, and go through a few languages for writing them.",
          link: "https://dev.to/spalladino/a-beginners-intro-to-coding-zero-knowledge-proofs-c56",
        },
        {
          title: "ZKP Overview: History, Proving Systems, Circuits, Compilers",
          description:
            "A comprehensive overview of zero-knowledge proofs with interactive visualizations.",
          link: "https://zkp.science",
          recommended: true,
        },
        {
          title: "Prerequisite understanding questions",
          description:
            "A set of questions to test your understanding of zero-knowledge proofs prerequisites.",
          link: "https://0xparc.notion.site/Prerequisite-understanding-questions-c5ebb77a5cc049f39577ec9a7fb7b22c",
        },
        {
          title: "Understanding ZKPs Through Illustrated Examples",
          description: "Visual explanations of zero-knowledge proofs using everyday examples.",
          link: "https://blog.goodaudience.com/understanding-zero-knowledge-proofs-through-simple-examples-df673f796d99",
        },
        {
          title: "Understanding zero-knowledge proofs without cryptography background",
          description:
            "A guide to understanding ZKPs without requiring deep cryptography knowledge.",
          link: "https://medium.com/@grehovodovbo/guide-to-understanding-guides-on-zero-knowledge-proofs-9ec4e8c4dff2",
        },
        {
          title: "A Non-Mathematical Introduction to Zero Knowledge Proof",
          description: "An accessible introduction to ZKPs without heavy mathematics.",
          link: "https://mirror.xyz/krinza.eth/5_Cr91cBK3XdkeHPQ9yjc7z_4NoTNxyqBiM4Jz4d5VE",
        },
        {
          title: "Zero Knowledge Proofs: An Illustrated Primer",
          description: "A visual introduction to the concepts behind zero-knowledge proofs.",
          link: "https://blog.cryptographyengineering.com/2014/11/27/zero-knowledge-proofs-illustrated-primer/",
        },
        {
          title: "What are zk-SNARKs?",
          description: "An explanation of zk-SNARKs from the Zcash team.",
          link: "https://z.cash/technology/zksnarks/",
        },
        {
          title: "ZKPs for Engineers: Introduction",
          description: "A technical but accessible introduction to ZKPs for engineers.",
          link: "https://blog.zkga.me/intro-to-zksnarks",
        },
        {
          title: "zkSNARKs in a nutshell",
          description: "A concise explanation of zkSNARKs from the Ethereum blog.",
          link: "https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/",
        },
        {
          title: "The RareSkills Book of Zero Knowledge",
          description: "A comprehensive book on zero-knowledge proofs.",
          link: "https://www.rareskills.io/zk-book",
        },
        {
          title: "An approximate introduction to how zk-SNARKs are possible",
          description:
            "Vitalik Buterin's explanation of the underlying concepts that make zk-SNARKs possible.",
          link: "https://vitalik.eth.limo/general/2021/01/26/snarks.html",
        },
        {
          title: "Privacy in Cryptocurrencies: An Overview",
          description: "An overview of privacy technologies in cryptocurrencies, including ZKPs.",
          link: "https://medium.com/@yi.sun/privacy-in-cryptocurrencies-d4b268157f6c",
        },
        {
          title: "Zero Knowledge virtual machine step by step",
          description: "A step-by-step guide to understanding zero-knowledge virtual machines.",
          link: "https://blog.adaptframework.solutions/2023/06/30/zero-knowledge-virtual-machine-step-by-step",
        },
        {
          title: "Comments on paper: zkSNARKs in a Nutshell by Aaron",
          description: "Detailed comments and explanations on a key zkSNARK paper.",
          link: "https://github.com/ventali/awesome-zk/tree/main/zk-intro",
        },
      ],
    },
    {
      id: "math-crypto",
      title: "Mathematical Foundations",
      description: "Essential mathematics and cryptography resources for understanding ZK proofs.",
      emoji: "📐",
      links: [
        {
          title: "Introduction to Mathematical Cryptography",
          description:
            "Comprehensive textbook covering the mathematical foundations of cryptography.",
          link: "https://github.com/isislovecruft/library--/blob/master/cryptography%20%26%20mathematics/An%20Introduction%20to%20Mathematical%20Cryptography%20(2014)%20-%20Hoffstein%2C%20Pipher%2C%20Silverman.pdf",
        },
        {
          title: "Modern Computer Algebra",
          description:
            "Textbook on computer algebra, essential for understanding ZK implementations.",
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
          description:
            "Accessible introduction to number theory and algebra with computational focus.",
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
      ],
    },
    {
      id: "tools",
      title: "Beginner-Friendly Tools",
      description: "Tools and playgrounds to help beginners start experimenting with ZK.",
      emoji: "🛠️",
      links: [],
    },
    {
      id: "playgrounds",
      title: "Online Playgrounds",
      description:
        "Interactive online environments to experiment with ZK circuits without installation.",
      emoji: "🎮",
      links: [
        {
          title: "ZKrepl",
          description: "An online REPL for Circom circuits.",
          link: "https://zkrepl.dev/",
        },
        {
          title: "Halo2 REPL",
          description: "Interactive environment for Halo2 circuit development.",
          link: "https://www.halo2repl.dev/",
        },
        {
          title: "Plonk Pro",
          description: "Online playground for PLONKish ZK circuits (halo2/plonky3).",
          link: "https://plonk.pro/",
        },
        {
          title: "Gnark Playground",
          description: "Interactive environment for Gnark circuit development.",
          link: "https://play.gnark.io/",
        },
        {
          title: "ZK Accel Playground",
          description: "Interactive playground for ZK circuit development.",
          link: "https://play.zkaccel.io/",
          rip: true,
        },
      ],
    },
  ],
};
