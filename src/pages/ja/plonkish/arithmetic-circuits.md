**💡 Circuit Structure:** 元の circuit code は大きく 2 つの部分で構成されます。

- 💻 **Computation**: proof generation 中に値をどのように計算するかを決める部分
- 🔒 **Constraints**: それらの計算が正しいことを検証する部分

通常はコード上でこれらを一緒に書きますが、compiler は両者を分離します。Constraints は setup phase で固定され、verification logic の中核になります。一方、computation は各 proof generation のたびに private inputs と public inputs を使って実行されます。
