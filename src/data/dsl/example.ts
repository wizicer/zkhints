import type { DslExample } from "../dsl";

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
