### Why do we need BitVM?

To transform Bitcoin's virtual machine from _Turing incomplete_ to _Turing complete_.

### What difference will ordinary users notice?

Previously, Bitcoin had few dApps, such as AMMs or L2s is missing. After implementing BitVM, these applications can be realized on Bitcoin L1.

### Why is it feasible now? What was the most important discovery?

Previously, Bitcoin scripts were limited to 200 logical operations per transaction [[related code](https://github.com/bitcoin/bitcoin/blob/ce56f5621a94dcc2159ebe57e43da727eab18e6c/src/script/interpreter.cpp#L276)], but after Taproot went live on the mainnet, script size can be increased to the segregated witness limit of 4MB.

### Why implement ZKP in BitVM?

Once ZKP verification is implemented, BitVM's verification upper limit is established. If we implement ZKP verification using a 2MB transaction on the Bitcoin mainchain, then with ZKP technology, no matter how complex the computation in the virtual machine becomes, we can complete it within this 2MB transaction.

### It sounds like we just need to implement the ZKP verification code once. I see the verification code isn't long, so why hasn't it been implemented yet?

The verification code appears short because it typically uses libraries and other methods to package complex functionality. The actual logic is much more complex, and in solutions like BitVM, everything needs to be reimplemented from the ground up.

Currently, some experts have claimed to have implemented it, but the complexity (script length) is too high for practical use, so many experts are still working on optimization.

### Many L2s claim to be based on BitVM. What should we focus on?

Most current L2s claim they will implement true Bitcoin Settlement L2 after BitVM is implemented.

Therefore, for technical personnel, the key is to focus on BitVM's progress. Recommended to follow the [TG group](https://t.me/bitVM_chat).

### I heard that complex scripts now exceed 4MB (Bitcoin's segregated witness limit). How can they be put on-chain?

- **Simple approach:** Use Lamport signatures (hash signatures) to break down complex programs into multiple steps, each executed on the blockchain. This method allows challenging the prover without permission but occupies a lot of on-chain space.

- **Balanced approach:** Transfer part of the prover's heavy work to the verifier's fraud proof, significantly reducing on-chain space. The prover only needs to submit the final result and all intermediate step results once, and the verifier can perform operations in a single step to deny any assertion.

- **Optimistic approach:** Improves the above design process in most cases, but adds two rounds of interaction in the worst case: the prover first submits the final output state, which anyone can challenge if incorrect; then the prover submits the results of intermediate steps, which anyone can deny if incorrect.

In short, the three approaches, from simple to complex, progressively optimize on-chain verification space occupation and interaction frequency, but the most optimistic approach requires the most interaction rounds in the worst case.
