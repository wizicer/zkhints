import type { Resource } from "../list";

export const learning: Resource = {
  id: "learning",
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
        {
          title: "Jack O'Connor: A Zero-Knowledge PCP Theorem",
          description:
            "The intersection of ZK and PCP theorems: every NP statement has a polynomial-size proof that is both locally checkable and zero-knowledge.",
          link: "https://www.youtube.com/watch?v=OWTMrlZW7oc",
          difficulty: "advanced",
        },
      ],
    },
    {
      id: "math-crypto",
      title: "Mathematical & Cryptography",
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
              title:
                "Episode 3: What is a trusted setup and how is it secured? Pairings operations",
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
    {
      id: "visions",
      title: "Visionary Insights",
      description: "Insights about the future of ZK.",
      emoji: "🔮",
      links: [
        {
          title: "The ZK Endgame",
          description: "Where are we going and what should we be optimizing for?",
          link: "https://blog.zkcloud.com/p/the-zk-endgame",
        },
      ],
    },
    {
      id: "proof-systems",
      title: "Understanding Proof Systems",
      description: "Dive deeper into SNARKs, STARKs, and other proving systems.",
      emoji: "📚",
      links: [
        {
          title: "Vitalik's ZK-SNARKs Explained",
          description: "In-depth but accessible explanation of zkSNARKs by Vitalik.",
          link: "https://vitalik.eth.limo/general/2022/12/18/zksnarks.html",
        },
      ],
      subsections: [
        {
          id: "stark",
          title: "STARK",
          description: "",
          emoji: "🔍",
          links: [
            {
              title: "Vitalik's STARK Series",
              description:
                "Detailed explanation of STARKs from basic principles to implementation details.",
              link: "https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html",
              difficulty: "beginner",
              seriesLinks: [
                {
                  title: "Part 1: Proofs with Polynomials",
                  link: "https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html",
                },
                {
                  title: "Part 2: Thank Goodness It's FRI-day",
                  link: "https://vitalik.eth.limo/general/2017/11/22/starks_part_2.html",
                },
                {
                  title: "Part 3: Into the Weeds",
                  link: "https://vitalik.eth.limo/general/2018/07/21/starks_part_3.html",
                },
              ],
            },
            {
              title: "STARK Anatomy Series",
              recommended: true,
              difficulty: "advanced",
              description: "Comprehensive breakdown of STARK components and implementation.",
              link: "https://aszepieniec.github.io/stark-anatomy/overview",
              seriesLinks: [
                {
                  title: "Part I: STARK Overview",
                  link: "https://aszepieniec.github.io/stark-anatomy/overview",
                },
                {
                  title: "Part II: Basic Tools",
                  link: "https://aszepieniec.github.io/stark-anatomy/basic-tools",
                },
                { title: "Part III: FRI", link: "https://aszepieniec.github.io/stark-anatomy/fri" },
                {
                  title: "Part IV: The STARK Polynomial IOP",
                  link: "https://aszepieniec.github.io/stark-anatomy/stark",
                },
                {
                  title: "Part V: A Rescue-Prime STARK",
                  link: "https://aszepieniec.github.io/stark-anatomy/rescue-prime",
                },
                {
                  title: "Part VI: Speeding Things Up",
                  link: "https://aszepieniec.github.io/stark-anatomy/faster",
                },
              ],
            },
            {
              title: "Brainfuck STARK Tutorial",
              recommended: true,
              difficulty: "intermediate",
              description:
                "Hands-on tutorial implementing a STARK prover for the Brainfuck language.",
              link: "https://neptune.cash/learn/brainfuck-tutorial/",
            },
            {
              title: "ZK STARKs Overview",
              recommended: true,
              description: "Explains the motivation and construction of STARKs.",
              difficulty: "beginner",
              link: "https://starkware.co/stark/",
            },
            {
              title: "STARK 101",
              recommended: true,
              description:
                "STARK 101 is a hands-on tutorial on how to write a STARK prover from scratch (in Python).",
              difficulty: "intermediate",
              link: "https://starkware.co/stark-101/",
            },
            {
              title: "FRI is a proof of proximity, not a low-degree test",
              description:
                "Explains the misconception that FRI is a low-degree test and clarifies its true role as a proof of proximity.",
              link: "https://building-babylon.net/2025/01/10/fri-is-a-proof-of-proximity-not-a-low-degree-test/",
              difficulty: "advanced",
              related: [
                {
                  title: "FRI 是鄰近性證明，而非低次測試",
                  link: "https://mp.weixin.qq.com/s/LCMom_jnCWhnGY1SJe5_Yg",
                  short: "翻译",
                },
              ],
            },
          ],
        },
        {
          id: "plonk",
          title: "PLONK",
          description: "",
          emoji: "🧩",
          links: [
            {
              title: "How PLONK Works by sCrypt",
              description: "A two-part explanation of the PLONK proving system.",
              link: "https://xiaohuiliu.medium.com/how-plonk-works-part-1-bc8050f4805e",
              seriesLinks: [
                {
                  title: "Part 1: Basic Structure",
                  link: "https://xiaohuiliu.medium.com/how-plonk-works-part-1-bc8050f4805e",
                },
                {
                  title: "Part 2: Implementation Details",
                  link: "https://xiaohuiliu.medium.com/how-plonk-works-part-2-1072dcd7634a",
                },
              ],
            },
            {
              title: "PLONK on Bitcoin",
              description: "Explanation of how PLONK can be implemented on Bitcoin.",
              link: "https://xiaohuiliu.medium.com/plonk-on-bitcoin-bb5405820e82",
            },
            {
              title: "PLONK by Hand",
              description: "A detailed walkthrough of PLONK calculations by hand from MetaState.",
              link: "https://research.metastate.dev/plonk-by-hand-part-1/",
              seriesLinks: [
                {
                  title: "Part 1: Setup and Arithmetization",
                  link: "https://research.metastate.dev/plonk-by-hand-part-1/",
                },
                {
                  title: "Part 2: The Proving System",
                  link: "https://research.metastate.dev/plonk-by-hand-part-2-1/",
                },
                {
                  title: "Part 3: Verification",
                  link: "https://research.metastate.dev/plonk-by-hand-part-3/",
                },
              ],
            },
            {
              title: "Understanding PLONK by Vitalik",
              description: "Vitalik Buterin's explanation of the PLONK proving system.",
              link: "https://www.vitalik.ca/general/2019/09/22/plonk.html",
            },
            {
              title: "Understanding PLONK by David Wong",
              description: "A clear explanation of PLONK from cryptography expert David Wong.",
              link: "https://www.cryptologie.net/article/527/understanding-plonk/",
            },
            {
              title: "A Python tutorial of the paper PLONK",
              description: "A Python implementation tutorial based on the original PLONK paper.",
              link: "https://github.com/barryWhiteHat/plonk_tutorial",
            },
            {
              title: "ZK Study Club - Plonk with Zac Williamson",
              description: "Zac Williamson explains the PLONK proving system in detail.",
              link: "https://youtu.be/NqrVcDuQ8hM",
            },
            {
              title: "How PLONK works by David Wong",
              description: "Comprehensive 12-part video series explaining PLONK.",
              link: "https://www.youtube.com/playlist?list=PLBJMt6zV1c7Gh9Utg-Vng2V6EYVidTFCC",
            },
            {
              title: "PLONK: Privacy in a World of Universal SNARKs",
              description: "Conference talk by Zac Williamson on PLONK applications.",
              link: "https://youtu.be/V7Hmtan98r8",
            },
            {
              title: "PLONK Explained by Ariel Gabizon",
              description: "Technical overview of PLONK by Protocol Labs researcher.",
              link: "https://youtu.be/dHo56MhQlHk",
            },
          ],
        },
      ],
    },
    {
      id: "awesome-knowledge-base",
      title: "Knowledge Base",
      description: "A collective of resources for learning ZK thoroughly.",
      emoji: "📚",
      links: [
        {
          title: "Zero-Knowledge Proofs (Science Resources)",
          description: "A collective of resources for learning ZK on the academic aspect.",
          link: "https://zkp.science/",
          recommended: true,
        },
        {
          title: "ZK Knowledge Base",
          description: "A knowledge base for ZK.",
          link: "https://zkknowledgebase.com/",
        },
        {
          title: "Noir Book",
          description: "Official Noir language documentation and guides.",
          link: "https://noir-lang.org/",
        },
      ],
    },
    {
      id: "awesome-cheatsheet",
      title: "Cheatsheets",
      description: "Cheatsheets for ZK related works.",
      emoji: "🧱",
      links: [
        {
          title: "ZK Basics Cheatsheet",
          description: "A cheatsheet for ZK basics.",
          link: "https://github.com/baro77/ZKbasicsCS",
        },
        {
          title: "Leo by Aleo",
          description:
            "A ZK-focused programming language designed for writing private applications.",
          link: "https://developer.aleo.org/leo/",
        },
      ],
    },
  ],
};
