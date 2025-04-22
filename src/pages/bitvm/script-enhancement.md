## Bitcoin Script Enhancement

Bitcoin script itself is designed to be simple and stateless, which makes smart contract development difficult. We need to use some methods to enhance the capabilities of Bitcoin script to implement richer scenarios.

Some BIP proposals can enhance the capabilities of Bitcoin script, but BitVM's overall approach is based on the limitations of existing Bitcoin, with the premise of not making fork changes.

### Stateful Bitcoin Scripts

Bitcoin script is stateless, meaning subsequent scripts cannot continue calculations based on the execution results of previous scripts or the same input values. A typical idea is that we expect to be able to enforce the use of the same value in two stateless scripts.

Example:

- Script 1 needs to use X=234 as the starting point for calculation
- Script 2 also needs X=234 as a variable in the calculation process

The implementation approach is to use signatures, i.e., both scripts verify that the signature of X is valid.

If forks are allowed, the [OP_CHECKSIGFROMSTACK](https://bitcoinops.org/en/topics/op_checksigfromstack/) proposal can be used.

Hash-based signatures can be used below.

### OP_CSFS

OP_CHECKSIGFROMSTACK (OP_CSFS)

| **Feature**             | **OP_CHECKSIG**                               | **OP_CHECKSIGFROMSTACK**                                      |
| ----------------------- | --------------------------------------------- | ------------------------------------------------------------- |
| Message Source          | Automatically generated from transaction data | Can specify any message                                       |
| Parameters              | Signature, public key                         | Signature, **message**, and public key                        |
| Usage                   | Verify transaction signatures                 | Verify signatures of arbitrary messages                       |
| Security                | Suitable for protecting Bitcoin UTXO          | Extends the application range of digital signatures           |
| Implementation Platform | Bitcoin mainchain                             | Sidechains based on ElementsProject.org, proposed for Bitcoin |

Reference: https://bitcoinops.org/en/topics/op_checksigfromstack/

### Lamport Signature

Signature generation:
By using a 256-bit cryptographic hash function (such as SHA-256), the message is hashed to obtain a 256-bit hash value.

For each bit, depending on whether the bit value is 1 or 0, the corresponding number is selected from the number pair in the private key. If the bit value is 0, the first number in the number pair is selected; if the bit value is 1, the second number is selected. This way, a sequence of 256 numbers is generated, which is her signature.

### Winternitz

Signature generation:
Use the SHA-256 hash function to hash the message, resulting in a 256-bit digest. This digest is further broken down into 32 8-bit values (N1, N2, ..., N32).

Then, for each 8-bit value, perform 256 minus the value itself (to get the number of changes) hashes. For example, if N1's value is 10001000, which is 136 in decimal, in the hashing process, N1 needs to execute 256 minus 136 equals 120 hashes. After repeating the above operation for each 8-bit value, a digital signature for the message is formed.

### Bit-Commitment

To learn more, please refer to the related documents:

https://www.geeksforgeeks.org/lamport-one-time-signature-scheme/

https://www.geeksforgeeks.org/winternitz-one-time-signature-scheme/

### Emulated Covenants

### Connector Outputs

Understanding the Connector mechanism principle
