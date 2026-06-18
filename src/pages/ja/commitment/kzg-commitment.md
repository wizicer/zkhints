**KZG (Kate-Zaverucha-Goldberg)** polynomial commitment は、ある polynomial に commit し、あとから特定の点での評価値を証明できる仕組みです。効率が高く proof が短いため、現代の zero-knowledge proof system で広く使われています。

中核となる考え方は次の通りです。

- prover は polynomial に commit できます。
- その後、元の polynomial を明かさずに、特定の点での値を verifier に証明できます。

polynomial として encode できる情報であれば、必要な部分だけを選択的に開示できるため、この方法は非常に有用です。

任意の $x \in \mathbb{F}_{p}$ に対して、略記として $[x]_{1}:=[x] G_{1},[x]_{2}:=[x] G_{2}$ を使います。

- $\operatorname{KZG.Setup} \left(1^{\lambda}, d\right) \rightarrow srs$:

  $srs =(\mathrm{ck}, \mathrm{vk})=\left(\left\{\left[\alpha^{i}\right]_{1}\right\}_{i=0}^{d-1},[\alpha]_{2}\right)$ を設定します。ここで $\alpha$ は secret element であり、Setup 後に必ず破棄されなければなりません。

- $\operatorname{KZG.Commit} (\mathrm{ck} ; f(X)) \rightarrow C$:

  $f(X)=\sum_{i=0}^{n-1} f_{i} X^{i}$ に対して、$C=\sum_{i=0}^{n-1}\left[f_{i}\right]\left[\alpha^{i}\right]_{1}=[f(\alpha)]_{1}$ です。

- $\operatorname{KZG.Open}(srs, C, x, y ; f(X)) \rightarrow\{0,1\}$:

  evaluation point $x$ において、commitment が主張値 $y$ に open されることを示します。

  1. prover $\mathcal{P}$ は quotient polynomial $q(X)=\frac{f(X)-y}{X-x}$ を計算し、verifier に $\pi=\operatorname{KZG.Commit} (ck; q(X))=[q(\alpha)]_{1}$ を送ります。

  2. verifier $\mathcal{V}$ は $e\left(C-[y]_{1}, H\right) \stackrel{?}{=} e\left(\pi,[\alpha]_{2}-[x]_{2}\right)$ を確認します。

  $\operatorname{KZG.Open}$ の 1 と 2 の手順は、しばしば次の 2 つの algorithm として分けて書かれます。

  - $\operatorname{Open} (\mathrm{ck}, C, x, y ; f(X)) \rightarrow \pi$ は、次の relation に対する opening proof を返します。

  $$
  \mathcal{R}:=\left\{(\mathrm{ck}, C, x, y ; f(X)): \begin{array}{rl}
  & C \operatorname{deg}(f(X)) \leq d \\
  & \wedge y=f(x)
  \end{array}\right\} ;
  $$

  - $\operatorname{Verify} (\mathrm{vk}, C, x, y, \pi) \rightarrow\{0,1\}$ は opening proof の正しさを検証します。

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

**目的:**  
$f(X)$ の内容を **明かさずに**、$y = f(z)$ であることを証明します。

**方法:**

- $f(z) = y$ なので、$f(X) - y$ は $X = z$ で 0 になります。  
  したがって、$(X - z)$ は $f(X) - y$ の factor です。

- $f(X) - y$ を $(X - z)$ で割ると、次数が 1 つ低い polynomial が得られます。これを $q(X)$ と表します。

**例:**

$f(X) = X^2 + 2X + 1$ で、$f(1) = 4$、つまり $y = 4$ だとします。このとき:

$$
f(X) - y = (X^2 + 2X + 1) - 4 = X^2 + 2X - 3
$$

$f(X) - y$ が $X = 1$ で 0 になることを確認します。

$$
f(1) - y = (1^2 + 2 \cdot 1 - 3) = 0
$$

したがって、$X = 1$ は $f(X) - y$ の root です。

そのため、$f(X) - y$ は次のように factor できます。

$$
f(X) - y = (X - 1)(X + 3)
$$

この場合、**quotient polynomial** は次の通りです。

$$
q(X) = X + 3
$$

  </div>
</details>
