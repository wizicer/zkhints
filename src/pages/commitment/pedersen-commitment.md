Pedersen commitment is a widely used commitment scheme based on the discrete logarithm problem. It provides perfect hiding and computational binding properties.

**🔢 Mathematical Definition:**

$$
\text{Commit}(m, r) = g^m \cdot h^r
$$

Where:

- $m$ is the message to commit to
- $r$ is a random value (blinding factor)
- $g$ and $h$ are group generators

**🔄 Homomorphic Property:**

One of the key features of Pedersen commitments is their homomorphic property:

$$
\text{Commit}(m_1, r_1) \cdot \text{Commit}(m_2, r_2) = \text{Commit}(m_1 + m_2, r_1 + r_2)
$$

This property allows operations on committed values without revealing them, which is particularly useful in zero-knowledge proofs and secure multi-party computation.

**🔐 Security Properties:**

- **Perfect Hiding**: Even with unlimited computational power, the commitment reveals no information about the committed value.
- **Computational Binding**: It's computationally infeasible to find two different messages that produce the same commitment, assuming the discrete logarithm problem is hard.
