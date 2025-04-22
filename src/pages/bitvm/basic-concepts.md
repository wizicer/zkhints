## Basic Concepts

### Bitcoin Addresses

<!-- | Type                             | Example        | Content                     |
| -------------------------------- | -------------- | --------------------------- |
| P2PKH (Public Key Hash)          | _15e15hW...._  | ![P2PKH](media/image4.png)  |
| P2SH (Script Hash)               | _37PBEao..._   | ![P2SH](media/image5.png)   |
| P2WPKH (Witness Public Key Hash) | _bc1q42lja..._ | ![P2WPKH](media/image6.png) |
| P2TR (Taproot)                   | _bc1pmzfr..._  | ![P2TR](media/image7.png)   | -->

Reference: https://learnmeabitcoin.com/technical/script/

### Electronic Circuit

https://circuitverse.org/users/1958/projects/8-bit-adder-295e9ba0-485c-4d65-acce-82435aad5e32

Bitcoin's OP_XOR is disabled, so OP_NUMNOTEQUAL is used instead.

### Connector

A "connector" is a special type of output used to ensure the atomicity of transaction plans. The purpose of a connector is to let the blockchain check whether a specific transaction ID exists, and if it already exists, the transaction is invalid. This is accomplished by attaching an output of that transaction to the consuming transaction and pre-signing all previous outputs of the consuming transaction, utilizing the blockchain's prohibition of double-spending the same output (connector) during transaction processing.

### Groth16

The core computation is pairing calculation.

### Pairing

Here are some common bilinear pairing calculation methods:

**Weil Pairing:** Important in theoretical research, but due to its computational complexity, it is not common in practical applications.

**Tate Pairing:** Widely used in many practical cryptographic applications, including identity-based cryptosystems and attribute-based encryption. More computationally efficient than Weil pairing.

**Ate Pairing:** Very common in practical applications, especially when efficient computation of bilinear pairings is needed. Highly computationally efficient, one of the most commonly used bilinear pairing calculation methods in practical applications.

**R-ate Pairing:** Suitable for application scenarios requiring higher efficiency, especially in environments with limited computational resources. This is a variant of Ate pairing; by choosing better "target" points, R-ate pairing is more computationally efficient than Ate pairing.

**Optimal Ate Pairing:** Suitable for application scenarios requiring the highest efficiency, especially in environments with very limited computational resources. By selecting specific elliptic curves, the computation process of Optimal Ate pairing can be completed through a shorter Miller loop, thus achieving the highest computational efficiency.

According to references [1-3], most implementations on Intel CPUs are below 2M cycles. In implementation [4], the project uses the RISC-V instruction set to convert the groth16 verification in the mcl library (C++ implementation) to RISC-V instructions, approximately 17B cycles.

[5] is the groth16 verifier code on mina, implementing the Optimal Ate Pairing algorithm.

[6] is a detailed explanation of the Optimal Ate Pairing algorithm on BN curves, [7] briefly describes the algorithm flow in the previous text. Note: [7-8] both mention that the bn128 curve on Ethereum has slightly different parameters from those in the paper, so be careful to select the correct curve parameters.

[9] is the reference code for Ethereum's ECC implementation, and its code logic can be referenced in the appendix algorithm description in [10].

### SNARG vs SNARK

**SNARG (Succinct Non-interactive Argument):** Only requires **computational soundness**, allowing acceptance of incorrect statements with a certain probability, without guaranteeing that the prover possesses a valid witness.

**SNARK (Succinct Non-interactive Argument of Knowledge):** Requires **knowledge soundness**, ensuring that the prover must possess a valid witness and provides stronger guarantees in terms of security.

| Feature               | Computational Soundness (SNARG)                                                            | Knowledge Soundness (SNARK)                   |
| --------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------- |
| Soundness Type        | Computational soundness                                                                    | Knowledge soundness                           |
| Prover Capability     | Limited computational ability, i.e., the prover finds it difficult to deceive the verifier | The prover must possess a valid witness       |
| Verifier's Confidence | Identifies errors with negligible probability                                              | High trust in accepted statements             |
| Application Scenarios | Systems with low security requirements                                                     | Systems requiring strict privacy and security |

Why BitVM2 chooses SNARG? (Selection basis, original text as follows, where [7] is the GROTH16 paper)

### Peg-in vs Peg-out

"peg-in" is used to describe the process of transferring bitcoin to a sidechain
"peg-out" is used to describe the process of returning bitcoin from a sidechain

Reference: https://dev.rootstock.io/concepts/powpeg/#peg-inpeg-out-and-other-properties-of-rootstock-powpeg

### Multisig

https://jimmysong.github.io/taproot-multisig/
