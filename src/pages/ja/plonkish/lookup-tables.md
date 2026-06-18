Lookup tables は range checks や bit operations に非常に効率的です。

**⚡ XOR の例:**

XOR を複雑な constraints で実装する代わりに、lookup table を使うことができます。

| a   | b   | a ⊕ b |
| --- | --- | ----- |
| 0   | 0   | 0     |
| 0   | 1   | 1     |
| 1   | 0   | 1     |
| 1   | 1   | 0     |

lookup gate を使うことで、任意の inputs (a, b) と output c について、triplet (a, b, c) が XOR truth table に存在することを検証できます。これにより、bit operations を arithmetic constraints で実装するよりはるかに効率的になります。
