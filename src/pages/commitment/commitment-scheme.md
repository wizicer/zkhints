Commitment schemes are essential for many cryptographic protocols, especially in zero-knowledge proofs where a prover needs to commit to certain values without revealing them immediately. They provide a way to "lock" a value in a way that can be verified later.

<div class="md:hidden">

**Definition (Commitment scheme)**. A commitment scheme is a tuple $\Gamma=$ (Setup, Commit, Open) of PPT algorithms where:

- $\operatorname{Setup}\left(1^{\lambda}\right) \rightarrow \mathrm{pp}$

  takes security parameter $\lambda$ (in unary) and generates public parameters $\mathrm{pp}$;

- $\operatorname{Commit} (\mathrm{pp} ; m) \rightarrow(C ; r)$

  takes a secret message $m$ and outputs a public commitment $C$ and (optionally) a secret opening hint $r$ (which might or might not be the randomness used in the computation).

- $\operatorname{Open} (\mathrm{pp}, C ; m, r) \rightarrow b \in\{0,1\}$

  verifies the opening of the commitment $C$ to the message $m$ provided with the opening hint $r$.

</div>

**💡 Key Properties:**

- 🔒 **Binding**: The committer cannot change the committed value after the commitment is made.
- 🔍 **Hiding**: The commitment does not reveal information about the committed value.

A commitment scheme $\Gamma$ is 🔒 **binding** if for all $\mathrm{PPT}$ adversaries $\mathcal{A}$ :

$$
\operatorname{Pr}\left[\begin{array}{ll}
& \mathrm{pp} \leftarrow \operatorname{Setup}\left(1^{\lambda}\right) \\
b_{0}=b_{1} \neq 0 \wedge m_{0} \neq m_{1}: & \left(C, m_{0}, m_{1}, r_{0}, r_{1}\right) \leftarrow \mathcal{A}(\mathrm{pp}) \\
& b_{0} \leftarrow \operatorname{Open}\left(\mathrm{pp}, C, m_{0}, r_{0}\right) \\
& b_{1} \leftarrow \operatorname{Open}\left(\mathrm{pp}, C, m_{1}, r_{1}\right)
\end{array}\right] \leq \operatorname{neg}(\lambda)
$$

Informally, this states that a valid commitment $C$ to a message $m_{0}$ is binding if no adversary can produce a valid opening to some different message $m_{1}$.

A commitment scheme $\Gamma$ is 🔍 **hiding** if for any polynomial-time adversary $\mathcal{A}$ :

$$
\operatorname{Pr}\left[\begin{array}{cl}
& \mathrm{pp} \leftarrow \operatorname{Setup}\left(1^{\lambda}\right) \\
& \left(m_{0}, m_{1}, s t\right) \leftarrow \mathcal{A}(\mathrm{pp}) \\
b_{0}=b^{\prime}: & b \stackrel{\$}{\leftarrow}\{0,1\} \\
& \left(C_{b} ; r_{b}\right) \leftarrow \operatorname{Commit}\left(\mathrm{pp} ; m_{b}\right) \\
& b^{\prime} \leftarrow \mathcal{A}\left(\mathrm{pp}, s t, C_{b}\right)
\end{array}\right]-1 / 2 \mid=\operatorname{negl}(\lambda)
$$

Informally, this states that if a commitment is hiding if an adversary cannot "reverse-engineer" which of their messages was committed to.
