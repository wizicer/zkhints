Vector commitments は、複数の値からなる vector に commit しつつ、特定の position だけを open できるようにします。一度に複数の値へ commit する必要がある application で特に便利です。

**🔢 Mathematical Definition:**

$$
\text{Commit}(\vec{m}, r) = h^r \cdot \prod_{i=1}^{n} g_i^{m_i}
$$

ここで:

- $\vec{m} = (m_1, m_2, \ldots, m_n)$ は commit 対象の vector です
- $r$ は random value (blinding factor) です
- $g_1, g_2, \ldots, g_n$ は独立した group generators です
- $h$ は別の独立した group generator です

**🔍 Applications:**
Vector commitments は次のような場面で使われます。

- elements の membership を証明する必要がある verifiable databases
- multiple values のための zero-knowledge proofs
- 複数 transactions に commit する blockchain systems

**⚡ Efficiency Considerations:**
Vector commitments の主な課題は efficiency です。特に vector size が大きくなるほど重要になります。Vector commitments をより実用的にするため、さまざまな optimizations があります。

- logarithmic-sized proofs のための Merkle trees
- batch openings のための polynomial commitments
- vectors 向けの KZG などの specialized constructions
