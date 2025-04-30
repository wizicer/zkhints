# 📚 分类说明

## ✅ 1. **SNARK Frontend & Protocol**

> 面向用户的协议层、语义设计、隐私功能集成与端侧逻辑

- `Domain-Specific Languages`
- `SNARK Primitives`
- `Privacy Applications`
- `Scaling Applications`

## ✅ 2. **Backend & Proving System**

> 证明系统本体、结构、优化方法，以及可复用后端模块

- `Proving Schemes`
- `Proof Optimization Techniques`
- `zkVM`
- `Primitives`

## ✅ 3. **Cryptography & Theory**

> 数学构造、密码原语、安全定义，作为 ZK 系统的理论基础

- `Pairing-Based Cryptography`
- `Algebraic Foundations`
- `Indistinguishability Obfuscation`
- can be extended

## ✅ 4. **Analysis & Literature**

> 综述、标准、系统评估、安全性研究、漏洞等内容

- `Survey & SoK`
- `Benchmark`
- `Security`

# 🧭 分类说明与归类优先级

在本资料库中，每篇内容应被归入最能体现其核心价值的**唯一分类**。为避免重复放置，推荐按照以下**优先级顺序**进行归类判断：

## ✅ 优先级顺序（从高到低）：

1. **Analysis & Literature**  
   若文章属于综述、系统比较、漏洞分析、安全评估、标准化建议等文献类内容，应优先归入此类，即使其研究对象涉及某一特定证明系统或协议。

2. **SNARK Frontend & Protocol**  
   若内容涉及用户使用层、协议交互、领域语言（DSL）、隐私或可扩展性应用设计，优先放入此类，而非其背后的底层实现。

3. **Backend & Proving System**  
   涉及证明系统实现原理、优化方法、zkVM 或 SNARK 后端设计的内容应归入本类，若无明显综述属性。

4. **Cryptography & Theory**  
   若文章核心在于密码学原语、数学假设或构造理论分析，且不主要落脚于实际系统设计或实现，则归入本类。

## 🧩 举例说明

- 一篇关于“使用 Plonk 实现匿名投票系统”的文章，若重点在系统架构和端到端隐私流程设计，应归入 `SNARK Frontend & Protocol`。
- 若该文章是对现有匿名投票方案的综述与比较，则应归入 `Analysis & Literature`。
- 若重点分析 Plonk 的电路优化或 prover 结构，应归入 `Backend & Proving System`。
- 若讨论其中承诺方案的数学安全性，应归入 `Cryptography & Theory`。
