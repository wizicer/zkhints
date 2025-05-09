Checking if a value is zero is a common operation in ZK circuits, but it requires special handling:

**🔍 Is-Zero Definition:**

The $inv$ value is defined as:

$$
inv = \begin{cases}
0 & \text{if } \text{input} = 0 \\
\frac{1}{\text{input}} & \text{else}
\end{cases}
$$

The output is calculated as:

$$ \text{output} = -\text{input} \times \text{inv} + 1 $$

With the constraint:

$$ \text{input} \times \text{output} = 0 $$

This technique allows us to check if a value is zero and produce a boolean result (1 for zero, 0 for non-zero).
