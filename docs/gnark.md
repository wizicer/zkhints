**Experiment**

```
  --------------- ---------- ---------- ------- ------------- ---------- ---------- ------------ ----------
  Inner Scheme    Outer      Inner      Outer   Constraints   Setup Size Pk Size    Constraint   E2E Test
                  Scheme     Curve      Curve                 (MB)       (MB)       Size (MB)    Time (s)

  GROTH16         GROTH16    BN254      BN254   1,654,099     520.69     437.6      83.08        234.08

  GROTH16         GROTH16    BW6        BN254   4,962,866     1,613.27   1,381.87   231.39       704.4

  GROTH16         GROTH16    BLS12      BW6     19,344        16.36      9.23       7.13         10.06

  PLONKwoCommit   PLONK      BLS12      BW6     249,260       52.76      48.14      4.62         79.68

  PLONKwoCommit   PLONK      BLS12381   BN254   10,258,175    1,255.72   1,024.03   231.68       1,025.29

  PLONKwoCommit   PLONK      BW6        BN254   26,821,707    2,655.37   2,048.03   607.34       3,304.70

  PLONKwCommit    PLONK      BLS12      BW6     300,262       101.88     96.14      5.74         134.75

  PLONKwCommit    PLONK      BLS12381   BN254   10,770,107    1,267.43   1,024.03   243.39       742.53

  PLONKwCommit    PLONK      BN254      BN254   7,973,944     691.78     512.03     179.75       320.4

  PLONKwCommit    PLONK      BW6        BN254   28,206,610    2,686.40   2,048.03   638.37       4,147.34
  --------------- ---------- ---------- ------- ------------- ---------- ---------- ------------ ----------
```
