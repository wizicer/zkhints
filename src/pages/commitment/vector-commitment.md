A vector commitment scheme for the message space $M$ is a **commitment scheme** for a vector $\vec{m}=\left(m_{1}, \ldots, m_{k}\right) \in \mathrm{M}^{k}$.

The main security property for a vector commitment is position binding:

**Definition** (Position binding). A vector commitment scheme $\Gamma$ is **position binding** if for any PPT adversary $\mathcal{A}$ :

$$
\operatorname{Pr}\left[\begin{array}{l|l}
\text { Open }(\mathrm{pp}, C, \vec{m}, i) \rightarrow 1 \\
\text { Open }(\mathrm{pp}, C, \vec{m^{\prime}}, i) & \mathrm{pp} \stackrel{\$}{\leftarrow} \operatorname{Setup}(1^\lambda) \\
m \neq m^{\prime} & \mathcal{A}(\mathrm{pp}) \rightarrow(c, \vec{m}, \vec{m^{\prime}}, i)
\end{array}\right] \leq \operatorname{negl}(\lambda)
$$

Informally, this states that no adversary can open $C$ to two different values at the same position.
