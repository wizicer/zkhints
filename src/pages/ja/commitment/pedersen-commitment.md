**Vector Pedersen commitment**. Pedersen commitment [9] は、message space $\mathbb{F}_{q}$ に対する binding かつ hiding な commitment scheme です。secret message $m \in \mathbb{Z}_{q}$ について:

- $\operatorname{Pedersen.Setup} \left(1^{\lambda}, q\right) \rightarrow \mathrm{pp}: \mathrm{pp}=G, H \in \mathbb{G}$。ここで $\mathbb{G}$ は order $q$ の **cryptographic group** です。

- $\operatorname{Pedersen.Commit} (\mathrm{pp} ; m) \rightarrow(C ; r): C=[m] G+[r] H$。ここで $r \in \mathbb{Z}_{q}$ は random secret です。

- $\operatorname{Pedersen.Open} (\mathrm{pp}, C ; m, r) \rightarrow\{0,1\}:$ prover $\mathcal{P}$ が $m$ と $r$ を公開し、verifier $\mathcal{V}$ が $C \stackrel{?}{=}[m] G+[r] H$ を確認します。

Pedersen commitment は additively homomorphic であることに注意してください。

$$
\begin{aligned}
\operatorname{Commit}(m, r)+\operatorname{Commit}\left(m^{\prime}, r^{\prime}\right) & =[m] G+[r] H+\left[m^{\prime}\right] G+\left[r^{\prime}\right] H \\
& =\left[m+m^{\prime}\right] G+\left[r+r^{\prime}\right] H \\
& =\operatorname{Commit}\left(m+m^{\prime}, r+r^{\prime}\right) .
\end{aligned}
$$
