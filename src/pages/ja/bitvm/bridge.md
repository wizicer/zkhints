## Cross-chain Bridge

### Bridge の定義

cross-chain bridge の目的は、BTC を他の任意の system へ bridge することです。現時点の Bitcoin には多くの制約があるため、solution がそれほど elegant でなくても許容されます。BitVM Bridge も、現時点で最も完璧で elegant な solution というわけではありません。

BitVM は bridge を次のように定義しています。

- BitVM Bridge は低頻度利用に限定されるため、主に大口 transaction 向けです。
- end user は Lightning Network などの cross-chain exchange を使うべきです。
- operators は固定集合ですが、誰でも verifier になることができます。

### Security Guarantees

security guarantee は次のように定義されます。

2 つの coalition があり、それぞれ 1 人の honest member だけで十分です。

- trusted setup の参加者 1000 人
- bridge operators 100 人

security guarantee:

- Security: 誰も deposit を盗めない (1000 人中 1 人が honest ならよい)
- Liveness: 誰も valid Peg-out を妨げられない (100 人中 1 人が honest ならよい)
- 誰でも参加できるため、user は誰かを trust する必要がありません。

### 制約

- complexity が高く、security vulnerability につながりやすい。
- system に参加する各 party が honest に運用を続けるための incentive balance が難しい。
- operators は 2 週間分の funds を事前に commit (lock) する必要があります。
- ただし 1:1 collateral は不要です (TODO: どの程度が必要か)。
- 各 Peg-in について、1000 party 全員が 100 個の Peg-out transaction に事前署名する必要があります。
- coalition は Peg-in を censor できます。

### BitVM Team's Plan

- BitVM2 Draft version はすでに公開されています。
- BitVM team は現在の design が practical だと考えています。
- mainnet version は 2024 年内の launch が期待されていました。
