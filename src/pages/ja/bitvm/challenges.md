## 課題

### Script Level

大きく **script logic** と **script mechanism** に分けられます。

Bitcoin は意図的に non-Turing-complete な virtual machine として設計されているため、実行できる機能は非常に限られています。限られた機能しか持たない script operators を使って複雑な script logic を完成させることは、大きな challenge です。この問題は、script logic の実装を最適化する方法と、適切な script mechanism を見つける方法の 2 種類で解決されます。

### Coin Locking Logic Level

Bitcoin は UTXO の locking / unlocking mechanism を使います。locking script は後続 transaction の性質を制御できないため、coin を unlock できるだけでなく、その後の business logic の変化にも対応できる scheme を設計することが challenge になります。

たとえば Ethereum では、transaction が入ると smart contract の logic が contract 内の各種 variable の変化を制御します。一方 Bitcoin では、UTXO が unlock されると、その後に作られる新しい locking script、つまり UTXO は、この transaction から制御されません。
