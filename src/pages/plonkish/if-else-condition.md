Implementing conditional logic in ZK circuits requires special techniques. Here's how to implement an if-else condition:

**🔀 Conditional Output Gate:**

$$
s \times (c \times a + (1 - c) \times b - out) = 0
$$

- This gate enforces that the output $out$ is either $a$ or $b$ depending on the value of $c$.
- If $c = 1$, the output will be $a$.
- If $c = 0$, the output will be $b$.

**🔍 Selector Validity Gate (Boolean Gate):**

$$
s \times c \times (1 - c) = 0
$$

- This gate ensures that $c$ is a valid boolean value (either 0 or 1).

Together, these gates implement the conditional logic $\text{if}\ c\ \text{then}\ a\ \text{else}\ b$.
