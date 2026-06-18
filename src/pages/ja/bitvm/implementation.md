## BitVM

### Advanced Bitcoin Script

BitVM は Bitcoin script の advanced version と考えることができます。特徴は次の通りです。

- 複雑な Bitcoin contracts を表現できる
- script template language
- loop の展開
- functions の組み合わせ
- composite opcodes (xor, shift, mul, blake3, field arithmetic, ...)
- stateful Bitcoin scripts
- Lamport signatures (48, u32, u160, ...)
- Connector Outputs
- 複雑な scripts、複雑な Tap trees、大きな transaction graphs を扱える可能性

### SNARK Verifier in Script

- Pairing-based proofs は constant size です (Groth16, fflonk, ...)
- Script での実装は非常に巨大になります (gigabytes!)
- Script size limit は 4 MB です (full block)

**Idea: 1000 個の intermediate results に commit する**

f(x) = y  
f1(x) = z1  
f2(z1) = z2  
f3(z2) = z3  
...  
f1000(z999) = y

single step を disprove できれば十分です。  
たとえば f42(z41) != z42 です。

各 f_i は最大 4 MB まで可能です。合計では 4 GB になります。

### 利点

- BitVM により Bitcoin contracts はより smart になります。
- soft fork は不要です。
- より良い選択肢として TXHASH、OP_MUL、OP_BLOCKHASH があります。
