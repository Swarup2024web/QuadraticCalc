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
  let text = `Discriminant (D) = ${b}² - 4×${a}×${c} = ${D}\n`;

  if (D > 0) {
    const x1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(3);
    const x2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(3);
    text += "🟢 D > 0 → Two distinct real roots\n";
    text += `x₁ = ${x1}, x₂ = ${x2}`;
  } else if (D === 0) {
    const x = (-b / (2 * a)).toFixed(3);
    text += "🔵 D = 0 → Two equal real roots\n";
    text += `x = ${x}`;
  } else {
    const real = (-b / (2 * a)).toFixed(3);
    const imag = (Math.sqrt(-D) / (2 * a)).toFixed(3);
    text += "🔴 D < 0 → Two complex roots\n";
    text += `x₁ = ${real} + ${imag}i\nx₂ = ${real} - ${imag}i`;
  }

  result.textContent = text;
}
