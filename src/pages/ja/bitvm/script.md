## Script

### SHA256

sha256 visualization tool [12] は process data を可視化でき、process debugging に非常に便利です。code implementation は [13] を参照し、constant と basic operation definitions は [11] に基づきます。

**Bitcoin script にはすでに `op_sha256` があるのに、なぜ再実装が必要なのか？**

`op_sha256` の問題は、Bitcoin script では strings を concatenate できないことです。そのため、data hash の検証など用途が制限されます。

### GROTH16

現在の implementation では、BitVM script は 1.3GB です (Pairing のみ)。

現在最速の implementation は、Intel CPU 上で 2M Cycles の method です。Intel CPU は CISC architecture である一方、BitVM はより RISC architecture に近いと考えると、script quantity はおおよそ 20 倍以上、つまり少なくとも 40M size になると概算できます。ただし underlying algorithm implementation に optimization の余地がある場合は別です。

### "On Proving Pairings"

Paper: https://eprint.iacr.org/2024/640

説明: Alpen Labs が SNARKnado で使用。

Improvement methods:

- pairing verification の final exponentiation step は、より効率的な "residue check" に置き換えられ、Miller loop に組み込めます。
- 必要な rows をすべて precompute することで Miller loop の cost を削減します。
- quotients を combine することで [gar] の protocol を改善し、higher-order relationships をより効率的に証明できます。

Instance: https://hackmd.io/@70xfCGp1QViTYYJh3AMrQg/S1cU7YJGC

## その他の実装

### OP_CAT

追うべきアドレス: https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki

disable された理由: OP_LSHIFT の crash をきっかけに、OP_CAT を含む大量の op codes が無効化されました。

enable の可能性: C++ code にはすでに 520-byte maximum limit があるため、OP_CAT を使える可能性は大きくありません。enable には soft fork が必要です。

注目点: proposal は taproot で OP_CAT を enable することだけを要求しています。

個人的な見解: Taproot が live になるまで 2 年以上かかりました。この OP_CAT が community consensus を形成して live になるには、最も optimistic に見ても 1 年程度は必要でしょう。
