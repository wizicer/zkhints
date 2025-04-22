## Challenges

### Script Level

Divided into **script logic** and **script mechanism** parts.

Bitcoin was deliberately designed as a non-Turing-complete virtual machine, so the functions it can execute are very limited. How to use script operators with limited functionality to complete complex script logic is very challenging. This problem is solved through two types of methods: optimizing the implementation of script logic and finding appropriate script mechanisms.

### Coin Locking Logic Level

Bitcoin uses the UTXO locking and unlocking mechanism. The locking script cannot control the characteristics of subsequent transactions, so how to design a scheme that not only allows coins to be unlocked but also meets the needs of subsequent business changes is challenging.

For example, in Ethereum, after a transaction comes in, the logic of the smart contract controls the changes of various variables in the contract; while in Bitcoin, once the UTXO is unlocked, the subsequent creation of new locking scripts (i.e., UTXOs) is not controlled by this transaction.
