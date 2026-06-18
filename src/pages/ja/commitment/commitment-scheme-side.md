**Definition (Commitment scheme)**. Commitment scheme は、PPT algorithms の tuple $\Gamma=$ (Setup, Commit, Open) です。

- $\operatorname{Setup}\left(1^{\lambda}\right) \rightarrow \mathrm{pp}$

  security parameter $\lambda$ (unary) を受け取り、public parameters $\mathrm{pp}$ を生成します。

- $\operatorname{Commit} (\mathrm{pp} ; m) \rightarrow(C ; r)$

  secret message $m$ を受け取り、public commitment $C$ と、必要に応じて secret opening hint $r$ を出力します。この $r$ は計算に使われた randomness と同じ場合も、そうでない場合もあります。

- $\operatorname{Open} (\mathrm{pp}, C ; m, r) \rightarrow b \in\{0,1\}$

  opening hint $r$ とともに与えられた message $m$ に対して、commitment $C$ の opening を検証します。
