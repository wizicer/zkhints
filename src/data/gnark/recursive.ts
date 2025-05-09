export type SchemeType = "GROTH16" | "PLONK" | "PLONKwoCommit" | "PLONKwCommit";
export type CurveType = "BN254" | "BW6" | "BLS12" | "BLS12381";

export interface RecursiveSchemeData {
  innerScheme: SchemeType;
  outerScheme: SchemeType;
  innerCurve: CurveType;
  outerCurve: CurveType;
  constraints: number;
  setupSizeMB: number;
  pkSizeMB: number;
  constraintSizeMB: number;
  e2eTestTimeS: number;
}

export const recursiveSchemeData: RecursiveSchemeData[] = [
  {
    innerScheme: "GROTH16",
    outerScheme: "GROTH16",
    innerCurve: "BN254",
    outerCurve: "BN254",
    constraints: 1654099,
    setupSizeMB: 520.69,
    pkSizeMB: 437.6,
    constraintSizeMB: 83.08,
    e2eTestTimeS: 234.08,
  },
  {
    innerScheme: "GROTH16",
    outerScheme: "GROTH16",
    innerCurve: "BW6",
    outerCurve: "BN254",
    constraints: 4962866,
    setupSizeMB: 1613.27,
    pkSizeMB: 1381.87,
    constraintSizeMB: 231.39,
    e2eTestTimeS: 704.4,
  },
  {
    innerScheme: "GROTH16",
    outerScheme: "GROTH16",
    innerCurve: "BLS12",
    outerCurve: "BW6",
    constraints: 19344,
    setupSizeMB: 16.36,
    pkSizeMB: 9.23,
    constraintSizeMB: 7.13,
    e2eTestTimeS: 10.06,
  },
  {
    innerScheme: "PLONKwoCommit",
    outerScheme: "PLONK",
    innerCurve: "BLS12",
    outerCurve: "BW6",
    constraints: 249260,
    setupSizeMB: 52.76,
    pkSizeMB: 48.14,
    constraintSizeMB: 4.62,
    e2eTestTimeS: 79.68,
  },
  {
    innerScheme: "PLONKwoCommit",
    outerScheme: "PLONK",
    innerCurve: "BLS12381",
    outerCurve: "BN254",
    constraints: 10258175,
    setupSizeMB: 1255.72,
    pkSizeMB: 1024.03,
    constraintSizeMB: 231.68,
    e2eTestTimeS: 1025.29,
  },
  {
    innerScheme: "PLONKwoCommit",
    outerScheme: "PLONK",
    innerCurve: "BW6",
    outerCurve: "BN254",
    constraints: 26821707,
    setupSizeMB: 2655.37,
    pkSizeMB: 2048.03,
    constraintSizeMB: 607.34,
    e2eTestTimeS: 3304.7,
  },
  {
    innerScheme: "PLONKwCommit",
    outerScheme: "PLONK",
    innerCurve: "BLS12",
    outerCurve: "BW6",
    constraints: 300262,
    setupSizeMB: 101.88,
    pkSizeMB: 96.14,
    constraintSizeMB: 5.74,
    e2eTestTimeS: 134.75,
  },
  {
    innerScheme: "PLONKwCommit",
    outerScheme: "PLONK",
    innerCurve: "BLS12381",
    outerCurve: "BN254",
    constraints: 10770107,
    setupSizeMB: 1267.43,
    pkSizeMB: 1024.03,
    constraintSizeMB: 243.39,
    e2eTestTimeS: 742.53,
  },
  {
    innerScheme: "PLONKwCommit",
    outerScheme: "PLONK",
    innerCurve: "BN254",
    outerCurve: "BN254",
    constraints: 7973944,
    setupSizeMB: 691.78,
    pkSizeMB: 512.03,
    constraintSizeMB: 179.75,
    e2eTestTimeS: 320.4,
  },
  {
    innerScheme: "PLONKwCommit",
    outerScheme: "PLONK",
    innerCurve: "BW6",
    outerCurve: "BN254",
    constraints: 28206610,
    setupSizeMB: 2686.4,
    pkSizeMB: 2048.03,
    constraintSizeMB: 638.37,
    e2eTestTimeS: 4147.34,
  },
];
