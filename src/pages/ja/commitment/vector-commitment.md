Message space $M$ に対する vector commitment scheme は、vector $\vec{m}=\left(m_{1}, \ldots, m_{k}\right) \in \mathrm{M}^{k}$ のための **commitment scheme** です。

Vector commitment の主な security property は position binding です。

**Definition** (Position binding). Vector commitment scheme $\Gamma$ は、任意の PPT adversary $\mathcal{A}$ に対して次が成り立つとき **position binding** です。

$$
\operatorname{Pr}\left[\begin{array}{l|l}
\text { Open }(\mathrm{pp}, C, \vec{m}, i) \rightarrow 1 \\
\text { Open }(\mathrm{pp}, C, \vec{m^{\prime}}, i) & \mathrm{pp} \stackrel{\$}{\leftarrow} \operatorname{Setup}(1^\lambda) \\
m \neq m^{\prime} & \mathcal{A}(\mathrm{pp}) \rightarrow(c, \vec{m}, \vec{m^{\prime}}, i)
\end{array}\right] \leq \operatorname{negl}(\lambda)
$$

直感的には、どの adversary も $C$ を同じ position で 2 つの異なる値として open できない、という性質です。
