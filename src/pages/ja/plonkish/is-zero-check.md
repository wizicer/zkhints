値が zero かどうかを確認することは ZK circuits でよくある操作ですが、特別な扱いが必要です。

**🔍 Is-Zero Definition:**

$inv$ の値は次のように定義されます。

$$
inv = \begin{cases}
0 & \text{if } \text{input} = 0 \\
\frac{1}{\text{input}} & \text{else}
\end{cases}
$$

output は次のように計算されます。

$$ \text{output} = -\text{input} \times \text{inv} + 1 $$

制約は次の通りです。

$$ \text{input} \times \text{output} = 0 $$

この technique により、値が zero かどうかを確認し、zero なら 1、non-zero なら 0 という boolean result を生成できます。
