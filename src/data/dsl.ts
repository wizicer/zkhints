export interface DslDefinition {
  name: string;
  link: string | null;
  company_or_brand: string | null;
  arithmetization: string | null;
  syntax: string | null;
  programming_capability: "有" | "无" | null;
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
    programming_capability: "有",
    backend_supported: "Halo2/Plonky3",
    note: null,
  },
  {
    name: "CIRCOM",
    link: null,
    company_or_brand: "IDEN3",
    arithmetization: "R1CS",
    syntax: "C-like",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "ZoKrates",
    link: "https://zokrates.github.io/",
    company_or_brand: "-",
    arithmetization: "R1CS",
    syntax: "Python-like",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "CirC",
    link: "https://github.com/circify/circ",
    company_or_brand: "-",
    arithmetization: "R1CS",
    syntax: "C/ZoKrates",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "SnarkyJs",
    link: null,
    company_or_brand: "Mina",
    arithmetization: "R1CS",
    syntax: "Typescript",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "Leo",
    link: null,
    company_or_brand: "Aleo",
    arithmetization: "R1CS",
    syntax: "Rust-like",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "Noir",
    link: "https://noir-lang.org/",
    company_or_brand: "Aztec",
    arithmetization: "R1CS",
    syntax: "Rust-like",
    programming_capability: "有",
    backend_supported: "抽象出ACIR的中间表达(trace)，后续后端自选",
    note: null,
  },
  {
    name: "lurk",
    link: "https://github.com/lurk-lab/lurk-rs",
    company_or_brand: "-",
    arithmetization: "R1CS",
    syntax: "Lisp",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "PIL",
    link: "https://wiki.polygon.technology/docs/zkevm/PIL/pil-plonk/",
    company_or_brand: "Polygon zkEVM",
    arithmetization: "约束定义",
    syntax: "特殊",
    programming_capability: "无",
    backend_supported: null,
    note: null,
  },
  {
    name: "Cairo",
    link: null,
    company_or_brand: "StarkWare",
    arithmetization: "VM",
    syntax: "Rust",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "Zinc",
    link: "https://github.com/matter-labs/zinc",
    company_or_brand: "zkSync",
    arithmetization: "VM",
    syntax: "Rust",
    programming_capability: "有",
    backend_supported: null,
    note: "官方于2021年已经放弃维护",
  },
  {
    name: "AirScript",
    link: "https://0xpolygonmiden.github.io/air-script/",
    company_or_brand: "Polygon Miden",
    arithmetization: "Plonkish",
    syntax: "Yaml-like",
    programming_capability: "无",
    backend_supported: null,
    note: null,
  },
  {
    name: "Vamp-IR",
    link: "https://github.com/anoma/vamp-ir",
    company_or_brand: "anoma",
    arithmetization: "Plonkish",
    syntax: "Haskell-like",
    programming_capability: "有",
    backend_supported: null,
    note: "底层汇编级别的语言",
  },
  {
    name: "ALucard",
    link: "https://github.com/anoma/alucard",
    company_or_brand: "anoma",
    arithmetization: "Plonkish",
    syntax: "Lisp",
    programming_capability: "有",
    backend_supported: null,
    note: "是Vamp-IR的上层高级语言",
  },
  {
    name: "powdr",
    link: "https://docs.powdr.org/",
    company_or_brand: "Powdr lab",
    arithmetization: "Plonkish+VM",
    syntax: "JS-like",
    programming_capability: "有",
    backend_supported: null,
    note: "底层汇编级别的语言",
  },
  {
    name: "Chiquito",
    link: "https://github.com/privacy-scaling-explorations/chiquito",
    company_or_brand: "PSE",
    arithmetization: "Plonkish",
    syntax: "Rust/Python",
    programming_capability: "有",
    backend_supported: null,
    note: "更像是简化包装了Halo2的API",
  },
  {
    name: "zkas",
    link: "https://darkrenaissance.github.io/darkfi/zkas/index.html",
    company_or_brand: "Darkfi",
    arithmetization: "VM",
    syntax: "C-like",
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "Polylang",
    link: "https://polylang.dev/docs",
    company_or_brand: "Polybase",
    arithmetization: "VM",
    syntax: "JS-like",
    programming_capability: "有",
    backend_supported: null,
    note: "底层接MidenVM",
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
    programming_capability: "有",
    backend_supported: null,
    note: null,
  },
  {
    name: "lir",
    link: "https://github.com/jeong0982/lir",
    company_or_brand: "-",
    arithmetization: "Lookup",
    syntax: "IR",
    programming_capability: "无",
    backend_supported: null,
    note: "试图做纯lookup的IR，较粗糙，除了readme中的一句话，其他没找到example",
  },
  {
    name: "Keelung",
    link: "https://btq.gitbook.io/keelung/",
    company_or_brand: "BTQ",
    arithmetization: null,
    syntax: null,
    programming_capability: null,
    backend_supported: "后端是Aurora",
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
    backend_supported: "支持FHE和ZKP两种",
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
    comment: "编译为ACIR，类似R1CS，支持原始循环。已有halo2后端并获得资助，适合ZK开发者使用。",
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
    comment: "只能做简单约束，缺乏对witness的可编程操作。",
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
    comment: "作为中间表示IR，不支持witness编程，语法较原始。",
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
    comment: "Vamp-IR的上层语言，语法为Lisp方言，对开发者不友好。",
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
    comment: "用于描述虚拟机汇编程序，较底层，支持RISCV前端接入。",
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
    comment: "结构清晰，适合表达step-based系统，语法接近Python。",
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
    comment: "偏向链上zkVM操作，资料较少，语法接近zk汇编。",
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
    comment: "无编程能力，仅为静态约束描述格式。",
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
    comment: "语法API感强，但REPL体验良好，适合交互式调试。",
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
