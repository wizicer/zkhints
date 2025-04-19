KZG (Kate-Zaverucha-Goldberg) polynomial commitments allow committing to a polynomial and later proving evaluations of that polynomial at specific points. They are widely used in modern zero-knowledge proof systems due to their efficiency and succinctness.

**🔑 Key Insight**
The core idea behind KZG commitments is to use a bilinear pairing to verify polynomial evaluations. This allows for constant-sized proofs regardless of the polynomial degree, making them extremely efficient for large polynomials.

**🔢 Setup Phase**

$$
\text{Setup}(d) \rightarrow (ck, vk)
$$

Where:

- $d$ is the maximum degree of the polynomial
- $ck = (g, g^{\alpha}, g^{\alpha^2}, \ldots, g^{\alpha^d})$ is the commitment key
- $vk = g^{\alpha}$ in group G2 is the verification key
- $\alpha$ is a secret value that must be discarded after setup (the "toxic waste")

**🔢 Commit Phase**

$$
\text{Commit}(ck, f(X)) = \prod_{i=0}^{d} (g^{\alpha^i})^{f_i} = g^{f(\alpha)}
$$

Where:

- $f(X) = \sum_{i=0}^{d} f_i X^i$ is the polynomial
- $f_i$ are the coefficients of the polynomial

**🔢 Prove Phase**

$$
\text{Prove}(ck, f(X), z) \rightarrow (y, \pi)
$$

Where:

- $z$ is the evaluation point
- $y = f(z)$ is the claimed evaluation
- $\pi = g^{\frac{f(X) - f(z)}{X - z}}$ is the proof

The key insight is that $f(X) - f(z)$ is always divisible by $X - z$ when $f(z)$ is the correct evaluation. The quotient polynomial $q(X) = \frac{f(X) - f(z)}{X - z}$ is what we commit to in the proof.

**🔢 Verify Phase**

$$
\text{Verify}(vk, C, z, y, \pi) \rightarrow \{0, 1\}
$$

The verification checks if:

$$
e(C \cdot g^{-y}, g) = e(\pi, vk \cdot g^{-z})
$$

This equation verifies that $f(z) = y$ without revealing the polynomial $f(X)$. The verification works because of the properties of bilinear pairings.

**🔍 Security and Trust Assumptions**
KZG commitments rely on:

- The q-Strong Diffie-Hellman assumption
- A trusted setup to generate the parameters
- The security of the underlying elliptic curve and pairing

The need for a trusted setup is often addressed through multi-party computation ceremonies where many participants contribute randomness to the generation of $\alpha$.
