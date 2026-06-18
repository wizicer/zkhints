### なぜ BitVM が必要なのか？

Bitcoin の virtual machine を _Turing incomplete_ から _Turing complete_ に近づけるためです。

### 一般 user にはどんな違いが見えるのか？

これまで Bitcoin には AMM や L2 のような dApps がほとんどありませんでした。BitVM が実現されれば、これらの application を Bitcoin L1 上で実現できる可能性があります。

### なぜ今なら可能なのか？最も重要な発見は何だったのか？

以前の Bitcoin script は transaction ごとに 200 個の logical operations に制限されていました [[related code](https://github.com/bitcoin/bitcoin/blob/ce56f5621a94dcc2159ebe57e43da727eab18e6c/src/script/interpreter.cpp#L276)]。しかし Taproot が mainnet に入った後、script size は segregated witness の limit である 4MB まで拡張できるようになりました。

### なぜ BitVM で ZKP を実装するのか？

ZKP verification が実装されれば、BitVM の verification 上限が決まります。Bitcoin mainchain 上の 2MB transaction で ZKP verification を実装できれば、virtual machine 内の computation がどれほど複雑になっても、ZKP 技術によりこの 2MB transaction 内で完了できます。

### ZKP verification code を一度実装すればよいだけに見える。verification code は長くないのに、なぜまだ実装されていないのか？

verification code が短く見えるのは、通常 library などで複雑な機能が package されているからです。実際の logic ははるかに複雑で、BitVM のような solution ではすべてを ground up で再実装する必要があります。

現時点で実装したと主張する expert もいますが、complexity、つまり script length が高すぎて practical ではありません。そのため多くの expert が optimization に取り組んでいます。

### 多くの L2 が BitVM based を主張している。何に注目すべきか？

現在の多くの L2 は、BitVM が実装された後に true Bitcoin Settlement L2 を実現すると主張しています。

したがって技術者にとって重要なのは、BitVM の進展を追うことです。[TG group](https://t.me/bitVM_chat) をフォローするのがおすすめです。

### 複雑な script は 4MB、つまり Bitcoin の segregated witness limit を超えると聞いた。どうやって on-chain に載せるのか？

- **Simple approach:** Lamport signatures (hash signatures) を使って複雑な program を複数 step に分解し、それぞれを blockchain 上で実行します。この方法では permissionless に prover を challenge できますが、多くの on-chain space を消費します。

- **Balanced approach:** prover の heavy work の一部を verifier の fraud proof に移し、on-chain space を大きく削減します。prover は final result と全 intermediate step results を一度 submit するだけで、verifier は single step operation により任意の assertion を deny できます。

- **Optimistic approach:** 多くの場合で上記 design process を改善しますが、worst case では 2 round の interaction が追加されます。prover がまず final output state を submit し、それが incorrect なら誰でも challenge できます。その後、prover が intermediate steps の results を submit し、incorrect なら誰でも deny できます。

要するに、3 つの approach は simple から complex へ進むほど on-chain verification space と interaction frequency を最適化します。ただし最も optimistic な approach は、worst case で最も多くの interaction rounds を必要とします。
