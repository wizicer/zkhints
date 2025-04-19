// Polynomial class for calculations
class Polynomial {
  constructor(coeffs) {
    this.coeffs = Array.isArray(coeffs) ? coeffs : [];
  }

  evaluate(x) {
    return this.coeffs.reduce((sum, coeff, i) => sum + coeff * Math.pow(x, i), 0);
  }

  toString() {
    return (
      this.coeffs
        .map((coeff, i) => {
          if (coeff === 0) return null;
          const sign = coeff > 0 ? (i > 0 ? " + " : "") : " - ";
          const absCoeff = Math.abs(coeff);
          const coeffStr = absCoeff === 1 && i > 0 ? "" : absCoeff.toString();
          const varPower = i === 0 ? "" : i === 1 ? "x" : `x^${i}`;
          return `${i > 0 || coeff < 0 ? sign : ""}${coeffStr}${varPower}`;
        })
        .filter((term) => term !== null)
        .join("") || "0"
    );
  }

  // Calculate quotient polynomial when divided by (x - z)
  quotient(z) {
    const n = this.coeffs.length;
    const result = new Array(n - 1).fill(0);

    let prev = 0;
    for (let i = n - 1; i >= 0; i--) {
      const current = this.coeffs[i];
      if (i < n - 1) {
        result[i] = prev;
      }
      prev = current + prev * z;
    }

    return new Polynomial(result);
  }
}

// Pedersen commitment calculation (simplified for demonstration)
function calculatePedersenCommitment(message, random) {
  // This is a simplified version for demonstration
  // In a real implementation, this would use elliptic curve operations
  const g = 7; // Example generator
  const h = 11; // Example generator
  const p = 2147483647; // Large prime for modulo

  // Use modular exponentiation to avoid overflow
  function modPow(base, exponent, modulus) {
    if (modulus === 1) return 0;
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = Math.floor(exponent / 2);
      base = (base * base) % modulus;
    }
    return result;
  }

  const gm = modPow(g, message, p);
  const hr = modPow(h, random, p);
  return (gm * hr) % p;
}

export function init() {
  // Set up event listeners when the DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Pedersen commitment calculator
    const pedersenCalculateBtn = document.getElementById("pedersen-calculate");
    if (pedersenCalculateBtn) {
      pedersenCalculateBtn.addEventListener("click", () => {
        const message = parseInt(document.getElementById("pedersen-message").value);
        const random = parseInt(document.getElementById("pedersen-random").value);

        if (isNaN(message) || isNaN(random)) {
          document.getElementById("pedersen-result").textContent =
            "Please enter valid numbers for message and random value";
          return;
        }

        try {
          const commitment = calculatePedersenCommitment(message, random);
          document.getElementById(
            "pedersen-result"
          ).textContent = `Commit(${message}, ${random}) = ${commitment}`;
        } catch (error) {
          document.getElementById("pedersen-result").textContent = `Error: ${error.message}`;
        }
      });
    }

    // KZG polynomial commitment calculator
    const kzgCalculateBtn = document.getElementById("kzg-calculate");
    if (kzgCalculateBtn) {
      kzgCalculateBtn.addEventListener("click", () => {
        const polyInput = document.getElementById("kzg-poly").value;
        const z = parseFloat(document.getElementById("kzg-point").value);

        if (isNaN(z)) {
          document.getElementById("kzg-eval").textContent =
            "Please enter a valid number for the evaluation point";
          return;
        }

        try {
          // Parse polynomial coefficients
          const coeffs = polyInput.split(",").map((c) => {
            const parsed = parseFloat(c.trim());
            if (isNaN(parsed)) {
              throw new Error("Invalid polynomial coefficient");
            }
            return parsed;
          });

          // Create polynomial
          const poly = new Polynomial(coeffs);

          // Display the polynomial
          document.getElementById("kzg-polynomial").textContent = `f(X) = ${poly.toString()}`;

          // Calculate evaluation
          const evaluation = poly.evaluate(z);

          // Calculate quotient polynomial
          const quotientPoly = poly.quotient(z);

          document.getElementById("kzg-eval").textContent = `f(${z}) = ${evaluation}`;
          document.getElementById(
            "kzg-quotient"
          ).textContent = `q(X) = (f(X) - f(${z}))/(X - ${z}) = ${quotientPoly.toString()}`;
        } catch (error) {
          document.getElementById("kzg-polynomial").textContent = "Error: " + error.message;
          document.getElementById("kzg-eval").textContent = "Error";
          document.getElementById("kzg-quotient").textContent = "Error";
        }
      });
    }

    // Trigger calculations on page load to show initial values
    if (pedersenCalculateBtn) {
      pedersenCalculateBtn.click();
    }

    if (kzgCalculateBtn) {
      kzgCalculateBtn.click();
    }
  });
}
