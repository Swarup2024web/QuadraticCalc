function solve() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const result = document.getElementById("steps");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.textContent = "Please enter all three values.";
    return;
  }

  if (a === 0) {
    result.textContent = "This is not a quadratic equation (a ≠ 0).";
    return;
  }

  const discriminant = b * b - 4 * a * c;
  let stepText = `Discriminant (D) = ${b}² - 4×${a}×${c} = ${discriminant}\n`;

  if (discriminant > 0) {
    const root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    const root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    stepText += "D > 0 → Two distinct real roots.\n";
    stepText += `Roots: x₁ = ${root1}, x₂ = ${root2}`;
  } else if (discriminant === 0) {
    const root = (-b / (2 * a)).toFixed(2);
    stepText += "D = 0 → Two equal real roots.\n";
    stepText += `Root: x = ${root}`;
  } else {
    const real = (-b / (2 * a)).toFixed(2);
    const imag = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    stepText += "D < 0 → Two complex roots.\n";
    stepText += `Roots: x₁ = ${real} + ${imag}i, x₂ = ${real} - ${imag}i`;
  }

  result.textContent = stepText;
}
