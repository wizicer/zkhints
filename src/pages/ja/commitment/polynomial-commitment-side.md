**🔗 Pairing-based cryptography**

同じ prime order $p$ を持つ cyclic groups $\textcolor{red}{\mathbb{G}_{1}}, \textcolor{green}{\mathbb{G}_{2}}, \textcolor{blue}{\mathbb{G}_{T}}$ があるとします。pairing は nondegenerate bilinear map です。

$$
e: \textcolor{red}{\mathbb{G}_{1}} \times \textcolor{green}{\mathbb{G}_{2}} \rightarrow \textcolor{blue}{\mathbb{G}_{T}}
$$

- **bilinear**: $e([a] P,[b] Q)=e(P, Q)^{a \cdot b}$

- **nondegenerate**: generators $G_{1} \in \textcolor{red}{\mathbb{G}_{1}}$ と $G_{2} \in \textcolor{green}{\mathbb{G}_{2}}$ に対して、$G_{T}:=e\left(G_{1}, G_{2}\right) \in \textcolor{blue}{\mathbb{G}_{T}}$ は generator です。
