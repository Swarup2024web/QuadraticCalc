function solve() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const result = document.getElementById("steps");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.textContent = "❗ Please enter all three values.";
    return;
  }

  if (a === 0) {
    result.textContent = "❗ Not a quadratic equation (a ≠ 0).";
    return;
  }

  const D = b * b - 4 * a * c;
  const stepLines = [];

  stepLines.push(`📘 Step 1: Use the formula`);
  stepLines.push(`  x = (-b ± √(b² - 4ac)) / 2a`);
  stepLines.push(``);

  stepLines.push(`📘 Step 2: Substitute the values`);
  stepLines.push(`  x = (-(${b}) ± √(${b}² - 4×${a}×${c})) / (2×${a})`);
  stepLines.push(``);

  stepLines.push(`📘 Step 3: Calculate discriminant`);
  stepLines.push(`  D = ${b}² - 4×${a}×${c} = ${D}`);
  stepLines.push(``);

  if (D > 0) {
    const x1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(3);
    const x2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(3);
    stepLines.push(`📘 Step 4: D > 0 → Two distinct real roots`);
    stepLines.push(`  x₁ = ${x1}`);
    stepLines.push(`  x₂ = ${x2}`);
  } else if (D === 0) {
    const x = (-b / (2 * a)).toFixed(3);
    stepLines.push(`📘 Step 4: D = 0 → Two equal real roots`);
    stepLines.push(`  x = ${x}`);
  } else {
    const real = (-b / (2 * a)).toFixed(3);
    const imag = (Math.sqrt(-D) / (2 * a)).toFixed(3);
    stepLines.push(`📘 Step 4: D < 0 → Two complex roots`);
    stepLines.push(`  x₁ = ${real} + ${imag}i`);
    stepLines.push(`  x₂ = ${real} - ${imag}i`);
  }

  result.textContent = stepLines.join("\n");
}
