ZK circuits で conditional logic を実装するには特別なテクニックが必要です。ここでは if-else condition の実装方法を示します。

**🔀 Conditional Output Gate:**

$$
s \times (c \times a + (1 - c) \times b - out) = 0
$$

- この gate は、$c$ の値に応じて output $out$ が $a$ または $b$ になることを強制します。
- $c = 1$ の場合、output は $a$ になります。
- $c = 0$ の場合、output は $b$ になります。

**🔍 Selector Validity Gate (Boolean Gate):**

$$
s \times c \times (1 - c) = 0
$$

- この gate は $c$ が有効な boolean value、つまり 0 または 1 であることを保証します。

これらの gates を組み合わせることで、conditional logic $\text{if}\ c\ \text{then}\ a\ \text{else}\ b$ を実装できます。
