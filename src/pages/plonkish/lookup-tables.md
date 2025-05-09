Lookup tables are very efficient for range checks and bit operations

**⚡ XOR Example:**

Instead of using complex constraints to implement XOR, we can use a lookup table:

| a   | b   | a ⊕ b |
| --- | --- | ----- |
| 0   | 0   | 0     |
| 0   | 1   | 1     |
| 1   | 0   | 1     |
| 1   | 1   | 0     |

Using a lookup gate, we can verify that for any inputs (a, b) and output c, the triplet (a, b, c) appears in our XOR truth table, making bit operations much more efficient than implementing them with arithmetic constraints.
