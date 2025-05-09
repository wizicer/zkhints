Sometimes we need to limit a value to a specific set of values. For example, we might want to ensure that a value is either 1, 2, or 3.

**🔢 Limiting Value Gate:**

$$
s \times (a - 1)(a - 2)(a - 3) = 0
$$

- This gate enforces that $a$ can only take one of the values 1, 2, or 3 when $s = 1$.
- If $a = 1$, the first term $(a - 1)$ becomes 0, making the entire expression 0.
- If $a = 2$, the second term $(a - 2)$ becomes 0, making the entire expression 0.
- If $a = 4$ or $a = 99$, none of the terms become 0, so the expression will not be 0.
- Similarly, if $a$ is any other value, the gate will not satisfy the equation unless $s = 0$, which means the selector is disabled.
