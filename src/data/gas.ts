export interface GasData {
  framework: string;
  curve: "bn254" | "bls12_381";
  schema: string;
  publicInputs: number | string;
  sepoliaDeploymentGas: number[];
  sepoliaFunctionGas: number[];
}

export const gasData: GasData[] = [
  {
    framework: "gnark",
    curve: "bn254",
    schema: "groth16",
    publicInputs: 2,
    sepoliaDeploymentGas: [1917298],
    sepoliaFunctionGas: [220583],
  },
  {
    framework: "gnark",
    curve: "bn254",
    schema: "groth16(compressed proof)",
    publicInputs: 2,
    sepoliaDeploymentGas: [1945169],
    sepoliaFunctionGas: [231209],
  },
  {
    framework: "gnark",
    curve: "bn254",
    schema: "groth16 with pedersen",
    publicInputs: 1,
    sepoliaDeploymentGas: [1439031],
    sepoliaFunctionGas: [337291],
  },
  {
    framework: "gnark",
    curve: "bn254",
    schema: "groth16(compressed with pedersen)",
    publicInputs: 1,
    sepoliaDeploymentGas: [1439031],
    sepoliaFunctionGas: [350842],
  },
  {
    framework: "gnark",
    curve: "bn254",
    schema: "plonk",
    publicInputs: 2,
    sepoliaDeploymentGas: [2083848],
    sepoliaFunctionGas: [287310],
  },
  {
    framework: "snarkjs",
    curve: "bn254",
    schema: "groth16",
    publicInputs: 2,
    sepoliaDeploymentGas: [412528],
    sepoliaFunctionGas: [221305],
  },
  {
    framework: "snarkjs",
    curve: "bn254",
    schema: "plonk",
    publicInputs: 2,
    sepoliaDeploymentGas: [1591128],
    sepoliaFunctionGas: [291197],
  },
  {
    framework: "snarkjs",
    curve: "bn254",
    schema: "fflonk",
    publicInputs: 2,
    sepoliaDeploymentGas: [5273847],
    sepoliaFunctionGas: [201077],
  },
  {
    framework: "snarkjs",
    curve: "bls12_381",
    schema: "groth16",
    publicInputs: 1,
    sepoliaDeploymentGas: [436657],
    sepoliaFunctionGas: [227151],
  },
  {
    framework: "snarkjs",
    curve: "bls12_381",
    schema: "groth16",
    publicInputs: 2,
    sepoliaDeploymentGas: [],
    sepoliaFunctionGas: [235175],
  },
  {
    framework: "snarkjs",
    curve: "bls12_381",
    schema: "groth16",
    publicInputs: 10,
    sepoliaDeploymentGas: [],
    sepoliaFunctionGas: [259403],
  },
  {
    framework: "snarkjs",
    curve: "bls12_381",
    schema: "groth16",
    publicInputs: 50,
    sepoliaDeploymentGas: [],
    sepoliaFunctionGas: [411209],
  },
  {
    framework: "noir",
    curve: "bn254",
    schema: "plonk",
    publicInputs: 1,
    sepoliaDeploymentGas: [2571102],
    sepoliaFunctionGas: [441681],
  },
  {
    framework: "halo2",
    curve: "bn254",
    schema: "plonk(degree:16)",
    publicInputs: 16,
    sepoliaDeploymentGas: [308351, 828497],
    sepoliaFunctionGas: [321377],
  },
  {
    framework: "halo2",
    curve: "bn254",
    schema: "plonk(degree:16)",
    publicInputs: 2,
    sepoliaDeploymentGas: [308315, 828497],
    sepoliaFunctionGas: [305073],
  },
  {
    framework: "halo2",
    curve: "bn254",
    schema: "plonk(degree:16, efixed:200)",
    publicInputs: 2,
    sepoliaDeploymentGas: [2904633, 841012],
    sepoliaFunctionGas: [307900],
  },
];

// Helper function to format gas numbers
export function formatGas(gases: number[]): string {
  const gas = gases.reduce((a, b) => a + (a === "" ? "" : " + ") + b.toLocaleString(), "");
  return gas;
}

// Function to calculate gas consumption level (1-5)
export function getGasLevel(gases: number[], type: "function" | "deployment"): number {
  const gas = gases.reduce((a, b) => a + b, 0);

  // Different thresholds for different gas types
  if (type === "function") {
    if (gas < 220000) return 5; // Excellent
    if (gas < 250000) return 4; // Very good
    if (gas < 300000) return 3; // Good
    if (gas < 350000) return 2; // Moderate
    return 1; // High
  } else {
    // deployment
    if (gas < 500000) return 5; // Excellent
    if (gas < 1000000) return 4; // Very good
    if (gas < 1500000) return 3; // Good
    if (gas < 2000000) return 2; // Moderate
    return 1; // High
  }
}

// Function to get color class based on gas level
export function getGasColorClass(level: number): string {
  switch (level) {
    case 5:
      return "bg-green-100 text-green-800"; // Excellent
    case 4:
      return "bg-emerald-100 text-emerald-800"; // Very good
    case 3:
      return "bg-blue-100 text-blue-800"; // Good
    case 2:
      return "bg-amber-100 text-amber-800"; // Moderate
    case 1:
      return "bg-red-100 text-red-800"; // High
    default:
      return "";
  }
}
