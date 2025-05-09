export const sections = [
  {
    title: "Getting Started",
    description: "Basic setup and usage of Gnark",
    items: [
      {
        title: "Installing Gnark",
        code: `go get github.com/consensys/gnark@latest`,
        note: "- frontend.Variable is abbreviated as Var\n- In-circuit code vs out-circuit code distinction is important",
      },
      {
        title: "Define Circuit",
        code: `import "github.com/consensys/gnark/frontend"
type Circuit struct {
    PreImage Var \`gnark:",secret"\`
    Hash     Var \`gnark:"hash,public"\`
}
func (c *Circuit) Define(
           api frontend.API) error {
    m, _ := mimc.NewMiMC(api)
    m.Write(c.PreImage)
    api.AssertIsEqual(c.Hash, m.Sum())
}`,
        note: "Basic circuit definition with secret and public inputs",
      },
      {
        title: "Compile",
        code: `var mimcCircuit Circuit
cur := ecc.BN254.ScalarField()
r1cs, err := frontend.Compile(
  cur, r1cs.NewBuilder, &mimcCircuit)
vals := &Circuit { Hash: "161...469", PreImage: 35 }
w, _ := frontend.NewWitness(vals, cur)
pubw, _ := w.Public()`,
        note: "Compiling the circuit and creating witnesses",
      },
      {
        title: "Prove: Groth16",
        code: `pk, vk, _ := groth16.Setup(cs)
proof, _ := groth16.Prove(cs, pk, w)
err := groth16.Verify(proof, vk, pubw)`,
        note: "Generate and verify a Groth16 proof",
      },
      {
        title: "Prove: PlonK",
        code: `srs, lag, _ := unsafekzg.NewSRS(cs)
pk, vk, _ := plonk.Setup(cs, srs, lag)
proof, _ := plonk.Prove(cs, pk, w)
err := plonk.Verify(proof, vk, pubw)`,
        note: "Generate and verify a PlonK proof",
      },
    ],
  },
  {
    title: "API",
    description: "Core API functions for building circuits",
    items: [
      {
        title: "Assertions",
        code: `// fails if i1 != i2
AssertIsEqual(i1, i2 Var)
// fails if i1 == i2
AssertIsDifferent(i1, i2 Var)
// fails if v != 0 and v != 1
AssertIsBoolean(i1 Var)
// fails if v ∉ {0,1,2,3}
AssertIsCrumb(i1 Var)
// fails if v > bound.
AssertIsLessOrEqual(v Var, bound Var)`,
        note: "Common assertion functions in gnark",
      },
      {
        title: "Arithmetics",
        code: `// = i1 + i2 + ... in
Add(i1, i2 Var, in ...Var) Var
// a = a + (b * c)
MulAcc(a,b, c Var) Var
Neg(i1 Var) Var // -i. 
// = i1 - i2 - ... in
Sub(i1, i2 Var, in ...Var) Var
// = i1 * i2 * ... in
Mul(i1, i2 Var, in ...Var) Var
// i1 /i2. =0 if i1 = i2 = 0
DivUnchecked(i1, i2 Var) Var
Div(i1, i2 Var) Var // = i1 / i2
Inverse(i1 Var) Var // = 1 / i1`,
        note: "Arithmetic operations in gnark",
      },
      {
        title: "Binary Operations",
        code: `// unpacks to binary (lsb first)
ToBinary(i1 Var, n ...int) []Var
// packs b to element (lsb first)
FromBinary(b ...Var) Var
// following a and b must be 0 or 1
Xor(a, b Var) Var // a ^ b
Or(a, b Var) Var // a | b
And(a, b Var) Var // a & b`,
        note: "Binary operations in gnark",
      },
      {
        title: "Flow Control",
        code: `// performs a 2-bit lookup
Lookup2(b0,b1 Var,i0,i1,i2,i3 Var) Var
// if b is true, yields i1 else i2
Select(b Var, i1, i2 Var) Var
// returns 1 if a is zero, 0 otherwise
IsZero(i1 Var) Var
// 1 if i1>i2, 0 if i1=i2, -1 if i1<i2
Cmp(i1, i2 Var) Var`,
        note: "Flow control operations in gnark",
      },
      {
        title: "Debug",
        code: `Println(a ...Var) //like fmt.Println`,
        note: "Run the program with -tags=debug to display a more verbose stack trace",
      },
    ],
  },
  {
    title: "Standard Library",
    description: "Common cryptographic primitives",
    items: [
      {
        title: "MiMC Hash",
        code: `import "github.com/consensys/gnark/std/hash/mimc"
fMimc, _ := mimc.NewMiMC()
fMimc.Write(circuit.Data)
h := fMimc.Sum()`,
        note: "MiMC hash implementation in gnark",
      },
      {
        title: "EdDSA Signature",
        code: `import t "github.com/consensys/gnark-crypto/ecc/twistededwards"
import te "github.com/consensys/gnark/std/algebra/native/twistededwards"
type Circuit struct {
    pub eddsa.PublicKey
    sig eddsa.Signature
    msg frontend.Variable
}
cur, _ := te.NewEdCurve(api, t.BN254)
eddsa.Verify(cur, c.sig, c.msg, c.pub, &fMimc)`,
        note: "EdDSA signature verification in gnark",
      },
      {
        title: "Merkle Proof",
        code: `import "github.com/consensys/gnark/std/accumulator/merkle"
type Circuit struct {
	M    merkle.MerkleProof
	Leaf frontend.Variable
}
c.M.VerifyProof(api, &hFunc, c.Leaf)`,
        note: "Merkle tree proof verification in gnark",
      },
    ],
  },
  {
    title: "Selector Package",
    description: "Functions for selecting and manipulating arrays",
    items: [
      {
        title: "Slice Operations",
        code: `// out[i] = i ∈ [s, e) ? in[i] : 0
Slice(s, e Var, in []Var) []Var
// out[i] = rs ? (i ≥ p ? in[i] : 0)
//             : (i < p ? in[i] : 0)
Partition(p Var, rs bool, in []Var) []Var
// out[i] = i < sp ? sv : ev
stepMask(outlen int, sp, sv, ev Var) []Var`,
        note: "Slice operations in the selector package",
      },
      {
        title: "Multiplexer Operations",
        code: `// out = in[b[0]+b[1]*2+b[2]*4+...]
BinaryMux(selBits, in []Var) Var
// out = vs[i] if ks[i] == qkey
Map(qkey Var, ks, vs []Var) Var
// out = in[sel]
Mux(sel Var, in ...Var) Var
// out[i] = ks[i] == k ? 1 : 0
KeyDecoder(k Var, ks []Var) []Var
// out[i] = i == s ? 1 : 0
Decoder(n int, sel Var) []Var
// out = a1*b1 + a2*b2 + ...
dotProduct(a, b []Var) Var`,
        note: "Multiplexer operations in the selector package",
      },
    ],
  },
  {
    title: "Serialization",
    description: "Serializing and deserializing circuits and witnesses",
    items: [
      {
        title: "Constraint System",
        code: `// Serialize
var buf bytes.Buffer
cs.WriteTo(&buf)

// Deserialize
cs := groth16.NewCS(ecc.BN254)
cs.ReadFrom(&buf)`,
        note: "Serialize and deserialize a constraint system",
      },
      {
        title: "Witness",
        code: `// Serialize
w, _ := frontend.NewWitness(&assignment, ecc.BN254)
data, _ := w.MarshalBinary()
json, _ := w.MarshalJSON()

// Deserialize
w, _ := witness.New(ecc.BN254)
err := w.UnmarshalBinary(data)
w, _ := witness.New(ecc.BN254, ccs.GetSchema())
err := w.UnmarshalJSON(json)
pubw, _ := witness.Public()`,
        note: "Serialize and deserialize a witness",
      },
    ],
  },
  {
    title: "Smart Contract Integration",
    description: "Exporting proofs and verifiers to Solidity",
    items: [
      {
        title: "Export to Solidity",
        code: `f, _ := os.Create("verifier.sol")
err = vk.ExportSolidity(f)`,
        note: "Export a verifier key to Solidity",
      },
      {
        title: "Export Plonk Proof",
        code: `_p, _ := proof.(interface{MarshalSolidity() []byte})
str := "0x" + hex.EncodeToString(
  _p.MarshalSolidity())`,
        note: "Export a PlonK proof for use in Solidity",
      },
      {
        title: "Export Groth16 Proof",
        code: `buf := bytes.Buffer{}
_, err := proof.WriteRawTo(&buf)
b := buf.Bytes()
var p [8]string
for i := 0; i < 8; i++ {
  p[i] = new(big.Int).SetBytes(
    b[32*i : 32*(i+1)]).String()
}
str := "["+strings.Join(p[:],",")+"]"`,
        note: "Export a Groth16 proof for use in Solidity",
      },
    ],
  },
  {
    title: "External Library Usage",
    description: "Using gnark-crypto outside of circuits",
    items: [
      {
        title: "MiMC Hash",
        code: `import "github.com/consensys/gnark-crypto/ecc/bn254/fr/mimc"
fMimc := mimc.NewMiMC()
fMimc.Write(buf)
h := fMimc.Sum(nil)`,
        note: "Using MiMC hash outside of circuits",
      },
      {
        title: "EdDSA Signature",
        code: `import "math/rand"
import t "github.com/consensys/gnark-crypto/ecc/twistededwards"
import "github.com/consensys/gnark-crypto/hash"
curve := t.BN254
ht := hash.MIMC_BN254
seed := time.Now().Unix()
rnd := rand.New(rand.NewSource(seed))
s, _ := eddsa.New(curve, rnd)
sig, _ := s.Sign(msg, ht.New())
pk := s.Public()
v, _ := s.Verify(sig, msg, ht.New())
c.PublicKey.Assign(curve, pk.Bytes())
c.Signature.Assign(curve, sig)`,
        note: "Creating and verifying EdDSA signatures outside of circuits",
      },
      {
        title: "Merkle Proof",
        code: `import mt "github.com/consensys/gnark-crypto/accumulator/merkletree"
depth := 5
num := uint64(2 << (depth - 1))
seg := 32
mod := ecc.BN254.ScalarField()
// Create tree by random data
mlen := len(mod.Bytes())
var buf bytes.Buffer
for i := 0; i < int(num); i++ {
  leaf, _:= rand.Int(rand.Reader, mod)
  b := leaf.Bytes()
  buf.Write(make([]byte, mlen-len(b)))
  buf.Write(b)
}
// build merkle tree proof and verify
hGo := hash.MIMC_BN254.New()
idx := uint64(1)
root, path, _, _ := mt.BuildReaderProof(&buf, hGo, seg, idx)
verified := mt.VerifyProof(hGo, root, path, idx, num)
c.Leaf = idx
c.M.RootHash = root
c.M.Path = make([]Var, depth+1)
for i := 0; i < depth+1; i++ {
  c.M.Path[i] = path[i]
}`,
        note: "Creating and verifying Merkle proofs outside of circuits",
      },
    ],
  },
  {
    title: "Concepts",
    description: "Important concepts and terminology",
    items: [
      {
        title: "Glossary",
        code: `cs: constraint system
w: (full) witness
pubw: public witness
pk: proving key
vk: verifying key
r1cs: rank-1 constraint system
srs: structured reference string`,
        note: "Common terminology in zero-knowledge proofs",
      },
      {
        title: "Schemas",
        code: `Groth16: L·R = O

PlonK: qₗᵢaᵢ + qᵣᵢbᵢ + qₒᵢcᵢ + qₘᵢaᵢbᵢ + qcᵢ = 0

SAP(Polymath): x·y = (x/2 + y/2)² - (x/2 - y/2)²`,
        note: "Mathematical representations of different proof systems",
      },
      {
        title: "Resources",
        code: `- https://docs.gnark.consensys.io/
- https://play.gnark.io/
- https://zkshanghai.xyz/`,
        note: "Useful resources for learning more about gnark",
      },
    ],
  },
];
