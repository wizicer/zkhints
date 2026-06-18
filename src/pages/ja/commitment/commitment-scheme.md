Commitment schemes は多くの cryptographic protocols に不可欠です。特に zero-knowledge proofs では、prover がある値をすぐには明かさずに commit する必要があります。Commitment scheme は、値をあとで検証できる形で「ロック」する方法を提供します。

<div class="md:hidden">

**Definition (Commitment scheme)**. Commitment scheme は、PPT algorithms の tuple $\Gamma=$ (Setup, Commit, Open) です。

- $\operatorname{Setup}\left(1^{\lambda}\right) \rightarrow \mathrm{pp}$

  security parameter $\lambda$ (unary) を受け取り、public parameters $\mathrm{pp}$ を生成します。

- $\operatorname{Commit} (\mathrm{pp} ; m) \rightarrow(C ; r)$

  secret message $m$ を受け取り、public commitment $C$ と、必要に応じて secret opening hint $r$ を出力します。この $r$ は計算に使われた randomness と同じ場合も、そうでない場合もあります。

- $\operatorname{Open} (\mathrm{pp}, C ; m, r) \rightarrow b \in\{0,1\}$

  opening hint $r$ とともに与えられた message $m$ に対して、commitment $C$ の opening を検証します。

</div>

**💡 Key Properties:**

- 🔒 **Binding**: committer は commitment を作成した後、committed value を変更できません。
- 🔍 **Hiding**: commitment は committed value に関する情報を明かしません。

Commitment scheme $\Gamma$ は、任意の $\mathrm{PPT}$ adversary $\mathcal{A}$ に対して次が成り立つとき 🔒 **binding** です。

$$
\operatorname{Pr}\left[\begin{array}{ll}
& \mathrm{pp} \leftarrow \operatorname{Setup}\left(1^{\lambda}\right) \\
b_{0}=b_{1} \neq 0 \wedge m_{0} \neq m_{1}: & \left(C, m_{0}, m_{1}, r_{0}, r_{1}\right) \leftarrow \mathcal{A}(\mathrm{pp}) \\
& b_{0} \leftarrow \operatorname{Open}\left(\mathrm{pp}, C, m_{0}, r_{0}\right) \\
& b_{1} \leftarrow \operatorname{Open}\left(\mathrm{pp}, C, m_{1}, r_{1}\right)
\end{array}\right] \leq \operatorname{neg}(\lambda)
$$

直感的には、message $m_{0}$ への valid commitment $C$ について、どの adversary も別の message $m_{1}$ への valid opening を作れない、という性質です。

Commitment scheme $\Gamma$ は、任意の polynomial-time adversary $\mathcal{A}$ に対して次が成り立つとき 🔍 **hiding** です。

$$
\operatorname{Pr}\left[\begin{array}{cl}
& \mathrm{pp} \leftarrow \operatorname{Setup}\left(1^{\lambda}\right) \\
& \left(m_{0}, m_{1}, s t\right) \leftarrow \mathcal{A}(\mathrm{pp}) \\
b_{0}=b^{\prime}: & b \stackrel{\$}{\leftarrow}\{0,1\} \\
& \left(C_{b} ; r_{b}\right) \leftarrow \operatorname{Commit}\left(\mathrm{pp} ; m_{b}\right) \\
& b^{\prime} \leftarrow \mathcal{A}\left(\mathrm{pp}, s t, C_{b}\right)
\end{array}\right]-1 / 2 \mid=\operatorname{negl}(\lambda)
$$

直感的には、commitment が hiding であるとは、adversary が自分のどちらの message に commit されたのかを「reverse-engineer」できない、ということです。
