## BitVM

### Advanced Bitcoin Script

BitVM can be considered an advanced version of Bitcoin script. Its features include:

- Expressing complex Bitcoin contracts
- Script template language
- Expanding loops
- Combining functions
- Composite opcodes (xor, shift, mul, blake3, field arithmetic, ...)
- Stateful Bitcoin scripts
- Lamport signatures (48, u32, u160, ...)
- Connector Outputs
- Potentially complex scripts, complex Tap trees, and large transaction graphs

### SNARK Verifier in Script

- Pairing-based proofs are constant size (Groth16, fflonk, ...)
- Implementation in Script is huge (gigabytes!)
- Script size limit is 4 MB (a full block)

**Idea: commit to 1000 intermediate results**

f(x) = y
f1(x) = z1
f2(z1) = z2
f3(z2) = z3
...
f1000(z999) = y

Disproving a single step suffices
For example f42(z41) != z42

Every f_i can be up to 4 MB. That's 4 GB in total!

### Advantages

- BitVM makes Bitcoin contracts smarter
- No soft fork needed
- Better options: TXHASH, OP_MUL, OP_BLOCKHASH
