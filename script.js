function solve() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const result = document.getElementById("steps");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.innerHTML = "❗ Please enter all three values.";
    return;
  }

  if (a === 0) {
    result.innerHTML = "❗ Not a quadratic equation (a ≠ 0).";
    return;
  }

  const D = b * b - 4 * a * c;
  const sqrtD = Math.sqrt(Math.abs(D));
  const denom = 2 * a;
  const steps = [];

  steps.push("$$\\textbf{Step\\ 1:}\\ \\text{Standard form of a quadratic equation:}$$");
  steps.push("$$ax^2 + bx + c = 0$$");

  steps.push("$$\\textbf{Step\\ 2:}\\ \\text{Quadratic formula is:}$$");
  steps.push("$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$");

  steps.push("$$\\textbf{Step\\ 3:}\\ \\text{Identify coefficients:}$$");
  steps.push(`$$a = ${a},\\quad b = ${b},\\quad c = ${c}$$`);

  steps.push("$$\\textbf{Step\\ 4:}\\ \\text{Substitute into the formula:}$$");
  steps.push(`$$x = \\frac{-(${b}) \\pm \\sqrt{(${b})^2 - 4(${a})(${c})}}{2(${a})}$$`);

  steps.push("$$\\textbf{Step\\ 5:}\\ \\text{Calculate the discriminant (}D\\text{):}$$");
  steps.push(`$$D = ${b}^2 - 4(${a})(${c}) = ${D}$$`);

  if (D > 0) {
    const x1 = ((-b + sqrtD) / denom).toFixed(3);
    const x2 = ((-b - sqrtD) / denom).toFixed(3);
    steps.push("$$\\textbf{Step\\ 6:}\\ D > 0 \\Rightarrow \\text{Two real and distinct roots}$$");
    steps.push(`$$x_1 = ${x1},\\quad x_2 = ${x2}$$`);
  } else if (D === 0) {
    const x = (-b / denom).toFixed(3);
    steps.push("$$\\textbf{Step\\ 6:}\\ D = 0 \\Rightarrow \\text{Two equal real roots}$$");
    steps.push(`$$x = ${x}$$`);
  } else {
    const real = (-b / denom).toFixed(3);
    const imag = (sqrtD / denom).toFixed(3);
    steps.push("$$\\textbf{Step\\ 6:}\\ D < 0 \\Rightarrow \\text{Two complex roots}$$");
    steps.push(`$$x_1 = ${real} + ${imag}i,\\quad x_2 = ${real} - ${imag}i$$`);
  }

  result.innerHTML = steps.join("");
  renderMathInElement(result);
}
