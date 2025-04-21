**Definition (Commitment scheme)**. A commitment scheme is a tuple $\Gamma=$ (Setup, Commit, Open) of PPT algorithms where:

- $\operatorname{Setup}\left(1^{\lambda}\right) \rightarrow \mathrm{pp}$

  takes security parameter $\lambda$ (in unary) and generates public parameters $\mathrm{pp}$;

- $\operatorname{Commit} (\mathrm{pp} ; m) \rightarrow(C ; r)$

  takes a secret message $m$ and outputs a public commitment $C$ and (optionally) a secret opening hint $r$ (which might or might not be the randomness used in the computation).

- $\operatorname{Open} (\mathrm{pp}, C ; m, r) \rightarrow b \in\{0,1\}$

  verifies the opening of the commitment $C$ to the message $m$ provided with the opening hint $r$.
