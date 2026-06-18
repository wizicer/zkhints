if-equal condition は `out = a == b ? c : (a - b)` を実装します。この technique は `is-zero` と `if-else` の tricks を組み合わせたものです。

**🔀 Gate 1: Equality Check (via is-zero)**

$s \times (a - b) \times (1 - ((a - b) \times inv)) = 0$

- この gate は、$a = b$ のとき expression が 0 になることを保証します。
- `is-zero` から、$input = a - b$ であり、$inv$ は $a - b$ の inverse だと分かります。
- $a \neq b$ の場合、この gate は $a - b$ とその inverse に基づく計算を強制します。

**🔀 Gate 2: Output Assignment**

$s \times (1 - (a - b) \times inv) \times (out - c) = 0$

- この gate は $a = b$ のとき output $out$ が $c$ と等しくなければならないことを強制します。
- $a \neq b$ の場合、この constraint は自動的に満たされます。

**🔀 Gate 3: Alternative Output**

$s \times (1 - (1 - (a - b) \times inv)) \times (out - (a - b)) = 0$

- この gate は $a \neq b$ のとき output $out$ が $a - b$ に設定されることを強制します。
- $a = b$ の場合、この constraint は自動的に満たされます。

💡 これら 3 つの gates により、次の conditional structure を実装できます。

- $a = b$ の場合: output $out$ は $c$ に設定されます。
- $a \neq b$ の場合: output $out$ は $a - b$ に設定されます。
