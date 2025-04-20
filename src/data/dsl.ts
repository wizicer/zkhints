import type { Reference } from "../components/References.astro";

export interface DslDefinition {
  name: string;
  link: string | null;
  company_or_brand: string | null;
  arithmetization: string | null;
  syntax: string | null;
  programming_capability: "Yes" | "No" | "VM" | null;
  backend_supported: string | null;
  note: string | null;
}

export interface DslExample {
  name: string;
  exampleCode: string;
  exampleCodeHighlightType: string;
  exampleLink: string;
  comment: string;
}

export const dslDefinitions: DslDefinition[] = [
  {
    name: "Plonk Script",
    link: "https://plonk.pro",
    company_or_brand: "-",
    arithmetization: "Plonkish",
    syntax: "Rust-like",
    programming_capability: "Yes",
    backend_supported: "Halo2/Plonky3",
    note: null,
  },
  {
    name: "CIRCOM",
    link: null,
    company_or_brand: "IDEN3",
    arithmetization: "R1CS",
    syntax: "C-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "ZoKrates",
    link: "https://zokrates.github.io/",
    company_or_brand: "-",
    arithmetization: "R1CS",
    syntax: "Python-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "CirC",
    link: "https://github.com/circify/circ",
    company_or_brand: "-",
    arithmetization: "R1CS",
    syntax: "C/ZoKrates",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "SnarkyJs",
    link: null,
    company_or_brand: "Mina",
    arithmetization: "R1CS",
    syntax: "Typescript",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "Leo",
    link: null,
    company_or_brand: "Aleo",
    arithmetization: "R1CS",
    syntax: "Rust-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "Noir",
    link: "https://noir-lang.org/",
    company_or_brand: "Aztec",
    arithmetization: "R1CS",
    syntax: "Rust-like",
    programming_capability: "Yes",
    backend_supported:
      "Abstract ACIR intermediate representation (trace), backend can be selected later",
    note: null,
  },
  {
    name: "lurk",
    link: "https://github.com/lurk-lab/lurk-rs",
    company_or_brand: "-",
    arithmetization: "R1CS",
    syntax: "Lisp",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "PIL",
    link: "https://wiki.polygon.technology/docs/zkevm/PIL/pil-plonk/",
    company_or_brand: "Polygon zkEVM",
    arithmetization: "Constraint definition",
    syntax: "Special",
    programming_capability: "No",
    backend_supported: null,
    note: null,
  },
  {
    name: "Cairo",
    link: null,
    company_or_brand: "StarkWare",
    arithmetization: "VM",
    syntax: "Rust",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "Zinc",
    link: "https://github.com/matter-labs/zinc",
    company_or_brand: "zkSync",
    arithmetization: "VM",
    syntax: "Rust",
    programming_capability: "Yes",
    backend_supported: null,
    note: "Officially abandoned by the team in 2021",
  },
  {
    name: "AirScript",
    link: "https://0xpolygonmiden.github.io/air-script/",
    company_or_brand: "Polygon Miden",
    arithmetization: "Plonkish",
    syntax: "Yaml-like",
    programming_capability: "No",
    backend_supported: null,
    note: null,
  },
  {
    name: "Vamp-IR",
    link: "https://github.com/anoma/vamp-ir",
    company_or_brand: "anoma",
    arithmetization: "Plonkish",
    syntax: "Haskell-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: "Low-level assembly language",
  },
  {
    name: "ALucard",
    link: "https://github.com/anoma/alucard",
    company_or_brand: "anoma",
    arithmetization: "Plonkish",
    syntax: "Lisp",
    programming_capability: "Yes",
    backend_supported: null,
    note: "High-level language built on top of Vamp-IR",
  },
  {
    name: "powdr",
    link: "https://docs.powdr.org/",
    company_or_brand: "Powdr lab",
    arithmetization: "Plonkish+VM",
    syntax: "JS-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: "Low-level assembly language",
  },
  {
    name: "Chiquito",
    link: "https://github.com/privacy-scaling-explorations/chiquito",
    company_or_brand: "PSE",
    arithmetization: "Plonkish",
    syntax: "Rust/Python",
    programming_capability: "Yes",
    backend_supported: null,
    note: "More like a simplified wrapper around Halo2 API",
  },
  {
    name: "zkas",
    link: "https://darkrenaissance.github.io/darkfi/zkas/index.html",
    company_or_brand: "Darkfi",
    arithmetization: "VM",
    syntax: "C-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "Polylang",
    link: "https://polylang.dev/docs",
    company_or_brand: "Polybase",
    arithmetization: "VM",
    syntax: "JS-like",
    programming_capability: "Yes",
    backend_supported: null,
    note: "Built on MidenVM",
  },
  {
    name: "plaf",
    link: "https://github.com/Dhole/polyexen",
    company_or_brand: "-",
    arithmetization: "Plonkish",
    syntax: "toml-like",
    programming_capability: null,
    backend_supported: null,
    note: null,
  },
  {
    name: "halo2-repl",
    link: "https://github.com/axiom-crypto/halo2-repl",
    company_or_brand: "Axiom",
    arithmetization: "Plonkish",
    syntax: "JS",
    programming_capability: "Yes",
    backend_supported: null,
    note: null,
  },
  {
    name: "lir",
    link: "https://github.com/jeong0982/lir",
    company_or_brand: "-",
    arithmetization: "Lookup",
    syntax: "IR",
    programming_capability: "No",
    backend_supported: null,
    note: "Tries to do pure lookup IR, relatively rough, only one sentence in the readme, no other examples found",
  },
  {
    name: "Keelung",
    link: "https://btq.gitbook.io/keelung/",
    company_or_brand: "BTQ",
    arithmetization: null,
    syntax: null,
    programming_capability: null,
    backend_supported: "Backend is Aurora",
    note: null,
  },
  {
    name: "noname",
    link: "https://github.com/zksecurity/noname",
    company_or_brand: "zksecurity",
    arithmetization: null,
    syntax: null,
    programming_capability: null,
    backend_supported: null,
    note: null,
  },
  {
    name: "sunscreen",
    link: "https://docs.sunscreen.tech/zkp/zkp_programs/zkp_programs.html",
    company_or_brand: null,
    arithmetization: null,
    syntax: null,
    programming_capability: null,
    backend_supported: "Supports FHE and ZKP",
    note: null,
  },
  {
    name: "zirgen",
    link: "https://github.com/risc0/zirgen",
    company_or_brand: "RISC0",
    arithmetization: null,
    syntax: null,
    programming_capability: null,
    backend_supported: null,
    note: null,
  },
  {
    name: "Zinnia",
    link: "https://eprint.iacr.org/2025/572",
    company_or_brand: "HKUST",
    arithmetization: null,
    syntax: "Python-like",
    programming_capability: null,
    backend_supported: null,
    note: null,
  },
  {
    name: "cairo",
    link: "https://github.com/lambdaclass/cairo-vm",
    company_or_brand: "Cairo",
    arithmetization: "AIR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: null,
    note: "FRI",
  },
  {
    name: "ceno",
    link: "https://github.com/scroll-tech/ceno",
    company_or_brand: "Scroll",
    arithmetization: "GKR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Brakedown, Rust",
    note: "Lookup, Sumcheck",
  },
  {
    name: "eigen zkvm",
    link: "https://github.com/0xEigenLabs/eigen-zkvm",
    company_or_brand: "EigenLabs",
    arithmetization: "eAIR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Groth16, Solidity",
    note: null,
  },
  {
    name: "jolt",
    link: "https://github.com/a16z/jolt",
    company_or_brand: "a16z",
    arithmetization: "R1CS",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Spartan, WASM",
    note: "Lookup, Sumcheck, Offline Mem Check",
  },
  {
    name: "miden",
    link: "https://github.com/0xPolygonMiden/miden-vm",
    company_or_brand: "Polygon",
    arithmetization: "AIR (winterfell)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Rust",
    note: "Lookup, Winterfell",
  },
  {
    name: "mozak vm",
    link: "https://github.com/0xmozak/mozak-vm",
    company_or_brand: "Mozak",
    arithmetization: "AIR (Starky)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Rust",
    note: "Lookup, FRI",
  },
  {
    name: "nexus",
    link: "https://github.com/nexus-xyz/nexus-zkvm",
    company_or_brand: "Nexus",
    arithmetization: "Folded Accumulated Relaxed R1CS",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Accumulated Folding Spartan + {Zeromorph, PSE-Halo2 (KZG)}, Rust",
    note: null,
  },
  {
    name: "o1vm",
    link: "https://github.com/o1-labs/proof-systems/tree/master/o1vm",
    company_or_brand: "O(1) Labs",
    arithmetization: "Plonkish",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "IPA, Rust",
    note: "Lookup",
  },
  {
    name: "olavm",
    link: "https://github.com/Sin7Y/olavm",
    company_or_brand: "Ola",
    arithmetization: "AIR (plonky2)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup",
  },
  {
    name: "openvm",
    link: "https://github.com/openvm-org/openvm",
    company_or_brand: "OpenVM",
    arithmetization: "AIR (plonky3), GKR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: null,
  },
  {
    name: "pico",
    link: "https://github.com/brevis-network/pico",
    company_or_brand: "Brevis",
    arithmetization: "AIR (plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust, Solidity",
    note: "Lookup",
  },
  {
    name: "powdrVM",
    link: "https://github.com/powdr-labs/powdr",
    company_or_brand: "Powdr Labs",
    arithmetization: "AIR -ish (PIL, plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported:
      "PSE-Halo2 (KZG), Plonky3, FRI([eSTARK](https://eprint.iacr.org/2023/474)), Solidity",
    note: null,
  },
  {
    name: "risc0",
    link: "https://github.com/risc0/risc0",
    company_or_brand: "Risc Zero",
    arithmetization: "PLONK",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "Plookup, Rust, Solidity",
    note: "[DEEP-FRI & ALI](https://eprint.iacr.org/2021/582.pdf)",
  },
  {
    name: "sp1",
    link: "https://github.com/succinctlabs/sp1",
    company_or_brand: "Succinct",
    arithmetization: "AIR (plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust, Solidity",
    note: "Lookup",
  },
  {
    name: "sphinx",
    link: "https://github.com/argumentcomputer/sphinx",
    company_or_brand: "Argument Computer",
    arithmetization: "AIR (core), PLONK (wrap)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup",
  },
  {
    name: "triton vm",
    link: "https://github.com/TritonVM/triton-vm",
    company_or_brand: "TritonVM",
    arithmetization: "AIR",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup, [Contiguity](https://triton-vm.org/spec/memory-consistency.html)",
  },
  {
    name: "valida",
    link: "https://github.com/lita-xyz/valida-releases",
    company_or_brand: "Valida",
    arithmetization: "AIR (plonky3)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI",
    note: null,
  },
  {
    name: "zisk",
    link: "https://github.com/0xPolygonHermez/zisk",
    company_or_brand: "Polygon Hermez",
    arithmetization: "?",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "?",
    note: "?",
  },
  {
    name: "zkm",
    link: "https://github.com/zkMIPS/zkm",
    company_or_brand: "zkMIPS",
    arithmetization: "AIR (plonky2)",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "FRI, Rust",
    note: "Lookup",
  },
  {
    name: "zkWasm",
    link: "https://github.com/DelphinusLab/zkWasm",
    company_or_brand: "DelphinusLab",
    arithmetization: "PLONK",
    syntax: null,
    programming_capability: "VM",
    backend_supported: "IPA?, Rust",
    note: null,
  },
];

export const references: Reference[] = [
  {
    title: "",
    authors: "",
    year: "2025",
    link: "https://github.com/rkdud007/awesome-zkvm",
  },
];

export const dslExamples: DslExample[] = [
  {
    name: "Noir",
    exampleCode: `use dep::std;

fn main(
root: pub Field,
index: Field,
hash_path: [Field; 2],
secret: Field,
proposalId: pub Field,
vote: pub Field
) -> pub Field {
let note_commitment = std::hash::pedersen_hash([secret]);
let nullifier = std::hash::pedersen_hash([root, secret, proposalId]);

let check_root = std::merkle::compute_merkle_root(note_commitment, index, hash_path);
assert(root == check_root);

// Originally contrained the vote to avoid front-running,
// but including the vote as a public input is sufficient

// assert(vote <= 1);

nullifier
}`,
    exampleCodeHighlightType: "rust",
    exampleLink:
      "https://github.com/noir-lang/noir-examples/blob/master/foundry-voting/circuits/src/main.nr",
    comment:
      "Compiles to ACIR, similar to R1CS, supports raw loops. Already has Halo2 backend and received funding, suitable for ZK developers",
  },
  {
    name: "AirScript",
    exampleCode: `def ExampleAir

trace_columns:
  main: [s, a, b, c]
  aux: [p]

public_inputs:
  stack_inputs: [16]
  stack_outputs: [16]

periodic_columns:
  k0: [1, 1, 1, 1, 1, 1, 1, 0]

boundary_constraints:
  enf a.first = stack_inputs[0]
  enf b.first = stack_inputs[1]
  enf c.first = stack_inputs[2]

  enf a.last = stack_outputs[0]
  enf b.last = stack_outputs[1]
  enf c.last = stack_outputs[2]

  enf p.first = 1

integrity_constraints:
  enf s^2 = s
  enf k0 * (s' - s) = 0
  enf (1 - s) * (c - a - b) = 0
  enf s * (c - a * b) = 0
  enf p' = p * (c + $rand[0])`,
    exampleCodeHighlightType: "yaml",
    exampleLink: "https://0xpolygonmiden.github.io/air-script/description/example.html",
    comment: "Can only do simple constraints, lacks programmability for witnesses",
  },
  {
    name: "Vamp-IR",
    exampleCode: `// declare R to be public
pub R;

// define the Pythagorean relation we are checking
def pyth a b c = {
  a^2 + b^2 = c^2
};

// appends constraint x^2 + y^2 = R^2 to the circuit
pyth x y R;`,
    exampleCodeHighlightType: "haskell",
    exampleLink: "https://github.com/anoma/vamp-ir",
    comment:
      "As an intermediate representation IR, does not support witness programming, syntax is relatively raw",
  },
  {
    name: "ALucard (Alu)",
    exampleCode: `(defcircuit constrain ((public nest-pub nested)
(private nest-priv nested)
(output bool))
(def ((plane (plane nest-pub))
(time (time nest-pub))
(plane-priv (plane nest-priv))
(time-priv (time nest-priv)))
(= 0
(+ (* (x plane)
(y plane))
(* (x time)
(y time))
(* (x time-priv)
(y time-priv))
(* (x plane-priv)
(y plane-priv)))))`,
    exampleCodeHighlightType: "lisp",
    exampleLink: "https://github.com/anoma/alucard/blob/main/doc/using-alucard.md",
    comment: "Vamp-IR's high-level language, syntax is Lisp dialect, not friendly to developers",
  },
  {
    name: "powdr",
    exampleCode: `machine HelloWorld {

degree 8;

reg pc[@pc];
reg X[<=];
reg Y[<=];
reg A;

instr incr X -> Y {
  Y = X + 1
}

instr decr X -> Y {
  Y = X - 1
}

instr assert_zero X {
  X = 0
}

function main {
  A <=X= \${ ("input", 0) };
  A <== incr(A);
  A <== decr(A);
  assert_zero A;
  return;
}}`,
    exampleCodeHighlightType: "typescript",
    exampleLink: "https://docs.powdr.org/hello_world.html",
    comment:
      "Used to describe virtual machine assembly programs, relatively low-level, supports RISCV frontend connection",
  },
  {
    name: "Chiquito",
    exampleCode: `class FiboStep(StepType):
  def setup(self: FiboStep):
    self.c = self.internal("c")
    self.constr(eq(self.circuit.a + self.circuit.b, self.c))
    self.transition(eq(self.circuit.b, self.circuit.a.next()))
    self.transition(eq(self.c, self.circuit.b.next()))

  def wg(self: FiboStep, args: Tuple[int, int]):
    a_value, b_value = args
    self.assign(self.circuit.a, F(a_value))
    self.assign(self.circuit.b, F(b_value))
    self.assign(self.c, F(a_value + b_value))

class Fibonacci(Circuit):
  def setup(self: Fibonacci):
    self.a: Queriable = self.forward("a")
    self.b: Queriable = self.forward("b")

    self.fibo_step = self.step_type(FiboStep(self, "fibo_step"))
    self.pragma_num_steps(11)

  def trace(self: Fibonacci, args: Any):
    self.add(self.fibo_step, (1, 1))
    a = 1
    b = 2
    for i in range(1, 11):
      self.add(self.fibo_step, (a, b))
      prev_a = a
      a = b
      b += prev_a

fibo = Fibonacci()
fibo_witness = fibo.gen_witness(None)
fibo.halo2_mock_prover(fibo_witness)`,
    exampleCodeHighlightType: "python",
    exampleLink: "https://github.com/privacy-scaling-explorations/chiquito",
    comment:
      "Clear structure, suitable for expressing step-based systems, syntax is close to Python",
  },
  {
    name: "zkas",
    exampleCode: `k = 13;
field = "pallas";

constant "Vote" {
  EcFixedPointShort VALUE_COMMIT_VALUE,
  EcFixedPoint VALUE_COMMIT_RANDOM,
  EcFixedPointBase NULLIFIER_K,
}

witness "Vote" {
  Base process_id_0,
  Base process_id_1,
  Base secret_key,
  Base vote,
  Scalar vote_blind,
  Uint32 leaf_pos,
  MerklePath path,
}

circuit "Vote" {
  process_id = poseidon_hash(process_id_0, process_id_1);
  nullifier = poseidon_hash(secret_key, process_id);
  constrain_instance(nullifier);

  public_key = ec_mul_base(secret_key, NULLIFIER_K);
  public_x = ec_get_x(public_key);
  public_y = ec_get_y(public_key);
  pk_hash = poseidon_hash(public_x, public_y);

  root = merkle_root(leaf_pos, path, pk_hash);
  constrain_instance(root);

  vcv = ec_mul_short(vote, VALUE_COMMIT_VALUE);
  vcr = ec_mul(vote_blind, VALUE_COMMIT_RANDOM);
  vote_commit = ec_add(vcv, vcr);
  vote_commit_x = ec_get_x(vote_commit);
  vote_commit_y = ec_get_y(vote_commit);
  constrain_instance(vote_commit_x);
  constrain_instance(vote_commit_y);
}`,
    exampleCodeHighlightType: "typescript",
    exampleLink: "https://darkrenaissance.github.io/darkfi/zkas/examples/voting.html",
    comment:
      "Tends to chain on zkVM operations, less documentation, syntax is close to zk assembly",
  },
  {
    name: "plaf",
    exampleCode: `[info]
name = "Circuit Foo"
size = 4096 # k = 12

[columns.witness]
w0 = {}
w1 = {}
w2 = { phase = 2 }

[columns.fixed]
q0 = {}
q1 = {}
q2 = {}
q3 = {}

[constraints.poly]
"gate 1" = "q0 * ((w0 - 0) * (w0 - 1))"
"gate 2" = "q1 * (w0 - w1)"
"gate 3" = "q2 * w0 * w1 * w2"
"gate 4" = "q3 * (w1[1] = w0[0])"

[constraints.lookup]
"lookup 1" = [["w0", "w1"], ["w2[0]", "w2[1]"]]
"lookup 2" = [["w0", "w0 + w1"], ["w2 + w2", "q0 * w2"]]

[[constraints.copy]]
columns = ["w0", "w1"]
offsets = [[0, 10], [1, 11], [2, 12]]

[[constraints.copy]]
columns = ["w0", "w2"]
offsets = [[0, 1], [2, 3], [4, 5]]`,
    exampleCodeHighlightType: "toml",
    exampleLink: "https://github.com/Dhole/polyexen/blob/master/format.md",
    comment: "No programming capability, only for static constraint description format",
  },
  {
    name: "halo2-repl",
    exampleCode: `const input = arr.map(witness);
const start = witness(startIdx);
const end = witness(endIdx);

input.map(makePublic);
makePublic(start);
makePublic(end);

const numInRange = sub(end, start);

let out = [];
for (let i = 0; i < 10; i++) {
  const idx = mod(add(start, constant(i)), constant(10));
  const isIdxInRange = isLessThan(constant(i), numInRange);
  const el = selectFromIdx(input, idx);
  const res = mul(isIdxInRange, el);
  out.push(res);
}

out.map(makePublic);`,
    exampleCodeHighlightType: "javascript",
    exampleLink: "https://www.halo2repl.dev/",
    comment: "Strong API syntax, but REPL experience is good, suitable for interactive debugging",
  },
  {
    name: "Zinnia",
    exampleCode: `@zk_circuit
def is_prime(number: int, prime: bool):
    assert 0 <= number <= 10000

    if number < 2:
        assert not prime
    else:
        result = True

        for i in range(2, 101):
            if i * i > number:
                break
            if number % i == 0:
                result = False

        assert prime == result
`,
    exampleCodeHighlightType: "python",
    exampleLink: "https://eprint.iacr.org/2025/572",
    comment: "",
  },
];
