export const constraint_systems = [
    {
        name: "R1CS",
        description: "Rank-1 constraint system, the most common constraint system"
    },
    {
        name: "Plonk",
        description: "Plonkish constraint system"
    },
    {
        name: "Halo2",
        description: "Halo2 constraint system"
    },
    {
        name: "CCS",
        description: "Constraint circuit system"
    }
];

export const tools = [
    {
        name: "Plonkify",
        authors: ["Zhu, Pengfei"],
        year: "2025",
        title: "Plonkify: R1CS-to-Plonk Transpiler",
        link: "https://eprint.iacr.org/2025/534",
        abilities: [
            {
                from: "R1CS",
                to: "Plonk"
            }
        ]
    },
    {
        name: "Pianist",
        authors: ["Liu, Tianyi", "Xie, Tiancheng", "Zhang, Jiaheng", "Song, Dawn", "Zhang, Yupeng"],
        year: "2023",
        title: "Pianist: Scalable zkRollups via fully distributed zero-knowledge proofs",
        link: "https://eprint.iacr.org/2023/1271",
        abilities: [
            {
                from: "R1CS",
                to: "Plonk"
            }
        ]
    },
    {
        name: "halo2 ccs+",
        authors: ["pnyda2"],
        year: "2025",
        title: "Transpiling a Halo2 circuit into CCS",
        link: "https://ethresear.ch/t/transpiling-a-halo2-circuit-into-ccs/21963",
        code: "https://github.com/pnyda/halo2-ccs-plus",
        abilities:[
            {
                from: "Halo2",
                to: "CCS"
            }
        ]
    }
];