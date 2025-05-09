The if-equal condition implements: `out = a == b ? c : (a - b)`. This technique combined the tricks from `is-zero` and `if-else`.

**🔀 Gate 1: Equality Check (via is-zero)**

$s \times (a - b) \times (1 - ((a - b) \times inv)) = 0$

- This gate ensures that if $a = b$, the expression becomes 0.
- From `is-zero`, we know that $input = a - b$ and $inv$ is the inverse of $a - b$.
- When $a \neq b$, the gate enforces the calculation based on $a - b$ and its inverse.

**🔀 Gate 2: Output Assignment**

$s \times (1 - (a - b) \times inv) \times (out - c) = 0$

- This gate enforces that when $a = b$, the output $out$ must equal $c$.
- If $a \neq b$, this constraint is automatically satisfied.

**🔀 Gate 3: Alternative Output**

$s \times (1 - (1 - (a - b) \times inv)) \times (out - (a - b)) = 0$

- This gate enforces that when $a \neq b$, the output $out$ is set to $a - b$.
- If $a = b$, this constraint is automatically satisfied.

💡 Together, these three gates implement the conditional structure:

- When $a = b$: The output $out$ is set to $c$.
- When $a \neq b$: The output $out$ is set to $a - b$.
