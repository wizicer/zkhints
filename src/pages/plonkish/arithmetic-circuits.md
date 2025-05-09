**💡 Circuit Structure:** Original circuit code consists of two key parts:

- 💻 **Computation**: Determines how values are calculated during proof generation
- 🔒 **Constraints**: Verifies the correctness of those calculations

While we typically write these together in our code, the compiler separates them. The constraints are fixed during the setup phase and become the core verification logic, while the computation part runs with private and public inputs during each proof generation.
