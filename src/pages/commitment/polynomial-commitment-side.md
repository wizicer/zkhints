**🔗 Pairing-based cryptography**

Given cyclic groups $\textcolor{red}{\mathbb{G}_{1}}, \textcolor{green}{\mathbb{G}_{2}}, \textcolor{blue}{\mathbb{G}_{T}}$, all of the same prime order $p$, a pairing is a nondegenerate bilinear map

$$
e: \textcolor{red}{\mathbb{G}_{1}} \times \textcolor{green}{\mathbb{G}_{2}} \rightarrow \textcolor{blue}{\mathbb{G}_{T}}
$$

- **bilinear**: $e([a] P,[b] Q)=e(P, Q)^{a \cdot b}$

- **nondegenerate**: with generators $G_{1} \in \textcolor{red}{\mathbb{G}_{1}}$ and $G_{2} \in \textcolor{green}{\mathbb{G}_{2}}, G_{T}:=e\left(G_{1}, G_{2}\right) \in \textcolor{blue}{\mathbb{G}_{T}}$ is a generator.
