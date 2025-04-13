import type { Resource } from "../list";

export const intermediate: Resource = {
  id: "intermediate",
  sections: [
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
        {
          title: "ZK STARKs Overview",
          description: "Explains the motivation and construction of STARKs.",
          link: "https://starkware.co/stark/",
        },
      ],
    },
    {
      id: "stark-resources",
      title: "STARK Deep Dives",
      description: "Comprehensive resources for understanding STARK proofs in detail.",
      emoji: "🔍",
      links: [
        {
          title: "Vitalik's STARK Series",
          description:
            "Detailed explanation of STARKs from basic principles to implementation details.",
          link: "https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html",
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
          description: "Hands-on tutorial implementing a STARK prover for the Brainfuck language.",
          link: "https://neptune.cash/learn/brainfuck-tutorial/",
        },
      ],
    },
    {
      id: "plonk-resources",
      title: "PLONK Resources",
      description: "Tutorials and explanations of the PLONK proving system.",
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
    {
      id: "dsl-guides",
      title: "ZK DSL Guides",
      description: "Intermediate tutorials on languages like Circom and Noir.",
      emoji: "💻",
      links: [
        {
          title: "Noir Book",
          description: "Official Noir language documentation and guides.",
          link: "https://noir-lang.org/",
        },
        {
          title: "Awesome Circom",
          description: "A collection of Circom examples and useful links.",
          link: "https://github.com/Obscuronet/awesome-circom",
        },
      ],
    },
  ],
};
