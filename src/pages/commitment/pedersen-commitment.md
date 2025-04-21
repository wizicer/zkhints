**Vector Pedersen commitment**. The Pedersen commitment [9] is a binding and hiding commitment scheme for the message space $\mathbb{F}_{q}$. For a secret message $m \in \mathbb{Z}_{q}$ :

- $\operatorname{Pedersen.Setup} \left(1^{\lambda}, q\right) \rightarrow \mathrm{pp}: \mathrm{pp}=G, H \in \mathbb{G}$, where $\mathbb{G}$ is a **cryptographic group** of order $q$.

- $\operatorname{Pedersen.Commit} (\mathrm{pp} ; m) \rightarrow(C ; r): C=[m] G+[r] H$, where $r \in \mathbb{Z}_{q}$ is a random secret.

- $\operatorname{Pedersen.Open} (\mathrm{pp}, C ; m, r) \rightarrow\{0,1\}:$ the prover $\mathcal{P}$ reveals $m$ and $r$, and the verifier $\mathcal{V}$ checks $C \stackrel{?}{=}[m] G+[r] H$

Note that the Pedersen commitment is additively homomorphic:

$$
\begin{aligned}
\operatorname{Commit}(m, r)+\operatorname{Commit}\left(m^{\prime}, r^{\prime}\right) & =[m] G+[r] H+\left[m^{\prime}\right] G+\left[r^{\prime}\right] H \\
& =\left[m+m^{\prime}\right] G+\left[r+r^{\prime}\right] H \\
& =\operatorname{Commit}\left(m+m^{\prime}, r+r^{\prime}\right) .
\end{aligned}
$$
