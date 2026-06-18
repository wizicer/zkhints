## Bitcoin Script Enhancement

Bitcoin script は simple かつ stateless に設計されているため、smart contract development は難しくなります。より豊かな scenario を実現するには、Bitcoin script の capability を拡張するための方法が必要です。

一部の BIP proposals は Bitcoin script の capability を高めることができますが、BitVM の全体的な approach は、fork change を行わないことを前提に、既存 Bitcoin の制約の中で構築するものです。

### Stateful Bitcoin Scripts

Bitcoin script は stateless です。つまり、後続の scripts が前の scripts の execution results や同じ input values を使って計算を継続することはできません。典型的な発想として、2 つの stateless scripts で同じ値を使うことを強制したい、というものがあります。

例:

- Script 1 は計算の starting point として X=234 を使う必要がある
- Script 2 も計算過程の variable として X=234 を使う必要がある

実装 approach は signatures を使うことです。つまり、両方の scripts が X の signature が valid であることを検証します。

fork が許されるなら、[OP_CHECKSIGFROMSTACK](https://bitcoinops.org/en/topics/op_checksigfromstack/) proposal を使えます。

以下では hash-based signatures を使うこともできます。

### OP_CSFS

OP_CHECKSIGFROMSTACK (OP_CSFS)

| **特徴** | **OP_CHECKSIG** | **OP_CHECKSIGFROMSTACK** |
| --- | --- | --- |
| Message Source | transaction data から自動生成 | 任意の message を指定可能 |
| Parameters | Signature, public key | Signature, **message**, public key |
| Usage | transaction signature の検証 | 任意 message の signature を検証 |
| Security | Bitcoin UTXO の保護に適する | digital signatures の application range を拡張 |
| Implementation Platform | Bitcoin mainchain | ElementsProject.org based sidechains、Bitcoin 向け proposal |

参考: https://bitcoinops.org/en/topics/op_checksigfromstack/

### Lamport Signature

signature generation:
SHA-256 などの 256-bit cryptographic hash function を使い、message を hash して 256-bit hash value を得ます。

各 bit について、bit value が 1 か 0 かに応じて private key 内の number pair から対応する number を選びます。bit value が 0 なら pair の 1 つ目を選び、1 なら 2 つ目を選びます。このようにして 256 個の numbers の sequence が生成され、これが signature になります。

### Winternitz

signature generation:
SHA-256 hash function で message を hash し、256-bit digest を得ます。この digest をさらに 32 個の 8-bit values (N1, N2, ..., N32) に分解します。

次に各 8-bit value について、256 からその値を引いた回数だけ hash を実行します。たとえば N1 の値が 10001000、decimal で 136 なら、hashing process では 256 - 136 = 120 回の hash が必要です。この操作を各 8-bit value に対して繰り返すことで、message の digital signature が形成されます。

### Bit-Commitment

詳しくは関連 document を参照してください。

https://www.geeksforgeeks.org/lamport-one-time-signature-scheme/

https://www.geeksforgeeks.org/winternitz-one-time-signature-scheme/

### Emulated Covenants

### Connector Outputs

Connector mechanism の principle を理解する。
