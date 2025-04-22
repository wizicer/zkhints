## Cross-chain Bridge

### Bridge Definition

The purpose of cross-chain bridges is to bridge BTC to any other system. Currently, Bitcoin has many limitations, so it's acceptable if the solution is not so elegant. BitVM Bridge is currently not the most perfect and elegant solution.

BitVM defines its bridge as:

- BitVM Bridge is limited to low-frequency use, so it's mainly used for large transactions
- End users should use cross-chain exchanges (such as Lightning Network)
- Fixed set of operators, but anyone can become a verifier

### Security Guarantees

Security guarantees are defined as follows:

Two coalitions, each requiring only one honest member:

- 1000 participants in the trusted setup
- 100 bridge operators

Security guarantees:

- Security: No one can steal deposits (1 honest person out of 1000)
- Liveness: No one can prevent valid Peg-outs (1 honest person out of 100)
- Anyone is allowed to join, so users don't have to trust anyone

### Limitations

- Complexity, which can easily lead to security vulnerabilities
- How to balance incentives to ensure that all parties participating in the system can continue to operate honestly
- Operators must pre-commit (lock) funds for two weeks
- But no need for 1:1 collateral (TODO: how much should it be?)
- For each Peg-in, all 1000 parties must pre-sign 100 Peg-out transactions
- The coalition can censor Peg-ins

### BitVM Team's Plan

- BitVM2 Draft version has been released
- The BitVM team believes the current design is practical
- Mainnet version expected to launch this year (2024)
