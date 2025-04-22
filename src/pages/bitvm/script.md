## Script

### SHA256

The sha256 visualization tool [12] can provide visualization of process data, which is extremely convenient for process debugging. Code implementation references [13], and constant and basic operation definitions come from [11].

**Why do we need to reimplement op_sha256 when it already exists in Bitcoin script?**

The problem with op_sha256 is that strings cannot be concatenated in Bitcoin script, which limits its use, such as being unable to verify data hashes.

### GROTH16

Current implementation, BitVM script is 1.3GB (Pairing only)

The fastest implementation currently is the 2M Cycles implementation method on Intel CPU. Considering that Intel CPU is a CISC architecture, while BitVM is more like a RISC architecture, it is roughly estimated that there could be more than 20 times the script quantity, i.e., at least 40M in size, unless there is room for optimization in the underlying algorithm implementation.

### "On Proving Pairings"

Paper: https://eprint.iacr.org/2024/640

Description: Used by Alpen Labs in SNARKnado

Improvement methods:

- The final exponentiation step in pairing verification can be replaced by a more efficient "residue check" that can be incorporated into the Miller loop.
- Reduce the cost of the Miller loop by precomputing all necessary rows.
- Improve the protocol of [gar] by combining quotients, which allows us to prove higher-order relationships more efficiently.

Instance: https://hackmd.io/@70xfCGp1QViTYYJh3AMrQg/S1cU7YJGC

## Other Implementations

### OP_CAT

Address to follow: https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki

Reason for disabling: The crash of OP_LSHIFT once led to a large number of op codes being disabled, including OP_CAT.

Possibility of enabling: The C++ code already has a 520-byte maximum limit, so the possibility of using OP_CAT is not great; enabling it only requires a soft fork.

Focus point: The proposal only requires OP_CAT to be enabled in taproot.

Personal opinion: It took Taproot more than two years to go live, and for this OP_CAT to form a consensus in the community and then go live, the most optimistic estimate is also a year away.
