- **📊 Table 設計**

  - column は polynomial です
  - row は root of unity です
  - cell は root of unity における polynomial の evaluation です

- **📋 Column Types**

  - **🔒 Advice**: Advice columns。private inputs と intermediate data など、すべての private data を保持します
  - **📌 Fixed**: Constant columns。circuit 作成時に固定される values で、public data です
  - **🔘 Selector**: Selector columns。virtual columns であり、本質的には constant columns です。custom gate circuits を切り替える binary として使います
  - **📢 Instance**: Instance columns。public inputs と public outputs を保存します

- **🔄 Arithmetic Circuit**
  - ✨ Custom gates
  - 🔍 Lookup table
  - 🔗 Copy constraints
