## 基本概念

### Bitcoin Addresses

<!-- | Type                             | Example        | Content                     |
| -------------------------------- | -------------- | --------------------------- |
| P2PKH (Public Key Hash)          | _15e15hW...._  | ![P2PKH](media/image4.png)  |
| P2SH (Script Hash)               | _37PBEao..._   | ![P2SH](media/image5.png)   |
| P2WPKH (Witness Public Key Hash) | _bc1q42lja..._ | ![P2WPKH](media/image6.png) |
| P2TR (Taproot)                   | _bc1pmzfr..._  | ![P2TR](media/image7.png)   | -->

参考: https://learnmeabitcoin.com/technical/script/

### Electronic Circuit

https://circuitverse.org/users/1958/projects/8-bit-adder-295e9ba0-485c-4d65-acce-82435aad5e32

Bitcoin の `OP_XOR` は無効化されているため、代わりに `OP_NUMNOTEQUAL` を使います。

### Connector

「connector」は、transaction plan の atomicity を保証するために使われる特殊な output です。目的は、特定の transaction ID が存在するかどうかを blockchain に確認させ、すでに存在する場合は transaction を invalid にすることです。これは、その transaction の output を消費側 transaction に接続し、消費側 transaction の以前の output をすべて事前署名することで実現します。transaction processing では同じ output (connector) の double-spending が禁止されているため、この性質を利用します。

### Groth16

中核となる計算は pairing calculation です。

### Pairing

代表的な bilinear pairing の計算方法には次のものがあります。

**Weil Pairing:** 理論研究では重要ですが、計算量が大きいため実用ではあまり一般的ではありません。

**Tate Pairing:** Identity-based cryptosystems や attribute-based encryption など、多くの実用的な暗号 application で使われます。Weil pairing より計算効率が高いです。

**Ate Pairing:** 効率的な bilinear pairing が必要な実用 application で非常によく使われます。計算効率が高く、実用上もっとも一般的な pairing 計算方法の 1 つです。

**R-ate Pairing:** さらに高い効率が必要な scenario、特に計算資源が限られた環境に適しています。Ate pairing の variant で、より良い「target」点を選ぶことで Ate pairing より効率的になります。

**Optimal Ate Pairing:** 最高効率が必要な scenario、特に計算資源が非常に限られた環境に適しています。特定の elliptic curve を選ぶことで、より短い Miller loop で計算を完了でき、最高レベルの効率を実現します。

参考文献 [1-3] によると、Intel CPU 上の多くの実装は 2M cycles 未満です。実装 [4] では、mcl library (C++ 実装) の Groth16 verification を RISC-V instruction set に変換しており、およそ 17B cycles です。

[5] は Mina 上の Groth16 verifier code で、Optimal Ate Pairing algorithm を実装しています。

[6] は BN curves 上の Optimal Ate Pairing algorithm の詳しい解説で、[7] は前述の algorithm flow を簡潔に説明しています。注意点として、[7-8] はどちらも Ethereum の bn128 curve が paper の parameter とわずかに異なることに触れているため、正しい curve parameter を選ぶ必要があります。

[9] は Ethereum の ECC 実装の参考 code で、その logic は [10] の appendix algorithm description と合わせて参照できます。

### SNARG vs SNARK

**SNARG (Succinct Non-interactive Argument):** **computational soundness** のみを要求します。prover が有効な witness を持つことまでは保証せず、一定の確率で誤った statement が受理される可能性を許容します。

**SNARK (Succinct Non-interactive Argument of Knowledge):** **knowledge soundness** を要求します。prover が有効な witness を持つことを保証し、security の面でより強い保証を提供します。

| 特徴 | Computational Soundness (SNARG) | Knowledge Soundness (SNARK) |
| --- | --- | --- |
| Soundness Type | Computational soundness | Knowledge soundness |
| Prover Capability | prover が verifier を騙すことが計算上困難であること | prover は有効な witness を持っている必要がある |
| Verifier's Confidence | 無視できる確率で error を検出 | 受理された statement への信頼が高い |
| Application Scenarios | security 要件が比較的低い system | 厳格な privacy と security が必要な system |

なぜ BitVM2 は SNARG を選ぶのでしょうか。(選定根拠として、原文では [7] の GROTH16 paper が参照されています)

### Peg-in vs Peg-out

`peg-in` は bitcoin を sidechain に移す process を指します。  
`peg-out` は bitcoin を sidechain から戻す process を指します。

参考: https://dev.rootstock.io/concepts/powpeg/#peg-inpeg-out-and-other-properties-of-rootstock-powpeg

### Multisig

https://jimmysong.github.io/taproot-multisig/
