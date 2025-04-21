**KZG (Kate-Zaverucha-Goldberg)** polynomial commitments allow committing to a polynomial and later proving evaluations of that polynomial at specific points. They are widely used in modern zero-knowledge proof systems due to their efficiency and succinctness.

Its core idea is:

- The prover can commit to a polynomial.
- Later, they can prove to the verifier the value of that polynomial at a specific point without revealing the underlying polynomial.

This method is so useful because any content that can be encoded as a polynomial can now be easily disclosed selectively.

We will use the shorthand notation $[x]_{1}:=[x] G_{1},[x]_{2}:=[x] G_{2}$, for any $x \in \mathbb{F}_{p}$.

- $\operatorname{KZG.Setup} \left(1^{\lambda}, d\right) \rightarrow srs$:

  set $srs =(\mathrm{ck}, \mathrm{vk})=\left(\left\{\left[\alpha^{i}\right]_{1}\right\}_{i=0}^{d-1},[\alpha]_{2}\right)$. $\alpha$ here is a secret element and must be discarded after the Setup.

- $\operatorname{KZG.Commit} (\mathrm{ck} ; f(X)) \rightarrow C$:

  for $f(X)=\sum_{i=0}^{n-1} f_{i} X^{i}, C=\sum_{i=0}^{n-1}\left[f_{i}\right]\left[\alpha^{i}\right]_{1}=[f(\alpha)]_{1}$.

- $\operatorname{KZG.Open}(srs, C, x, y ; f(X)) \rightarrow\{0,1\}$:

  To "open" the commitment at evaluation point $x$ to a claimed value $y$

  1. the prover $\mathcal{P}$ computes the quotient polynomial $q(X)=\frac{f(X)-y}{X-x}$ and sends the verifier $\pi=\operatorname{KZG.Commit} (ck; q(X))=[q(\alpha)]_{1}$

  2. the verifier $\mathcal{V}$ checks $e\left(C-[y]_{1}, H\right) \stackrel{?}{=} e\left(\pi,[\alpha]_{2}-[x]_{2}\right)$.

  The 1 and 2 steps in $\operatorname{KZG.Open}$ are often written as two separate algorithms:

  - $\operatorname{Open} (\mathrm{ck}, C, x, y ; f(X)) \rightarrow \pi$ returns an opening proof for the relation

  $$
  \mathcal{R}:=\left\{(\mathrm{ck}, C, x, y ; f(X)): \begin{array}{rl}
  & C \operatorname{deg}(f(X)) \leq d \\
  & \wedge y=f(x)
  \end{array}\right\} ;
  $$

  - $\operatorname{Verify} (\mathrm{vk}, C, x, y, \pi) \rightarrow\{0,1\}$ verifies the opening proof's correctness.

<details class="group w-full max-w-xl rounded-xl border border-gray-300 bg-white p-4 shadow-md transition-all open:shadow-lg open:bg-gray-50">
  <summary class="cursor-pointer list-none text-lg font-semibold text-gray-800 flex items-center justify-between">
    <span>
    
Quotient Polynomial $q(X)$
    
</span>
    <svg class="ml-2 h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" stroke-width="2"
         viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
  <div class="mt-3 text-gray-700 leading-relaxed">

**Goal:**  
Prove that $y = f(z)$ **without revealing** what $f(X)$ is.

**Method:**

- Since $f(z) = y$, this guarantees that $f(X) - y$ is zero at $X = z$.  
  Therefore, $(X - z)$ is a factor of $f(X) - y$.

- We divide $f(X) - y$ by $(X - z)$, and the result is a polynomial of one degree lower, denoted as $q(X)$.

**Example:**

Suppose $f(X) = X^2 + 2X + 1$, and we know $f(1) = 4$, i.e., $y = 4$. Then:

$$
f(X) - y = (X^2 + 2X + 1) - 4 = X^2 + 2X - 3
$$

Now we verify that $f(X) - y$ is zero at $X = 1$:

$$
f(1) - y = (1^2 + 2 \cdot 1 - 3) = 0
$$

So $X = 1$ is a root of $f(X) - y$.

Therefore, we can factor $f(X) - y$ as:

$$
f(X) - y = (X - 1)(X + 3)
$$

In this case, the **quotient polynomial** is:

$$
q(X) = X + 3
$$

  </div>
</details>
