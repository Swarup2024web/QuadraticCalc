function solve() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const result = document.getElementById("steps");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    result.innerHTML = "<p>❗ Please enter valid numbers for a, b, and c.</p>";
    return;
  }

  if (a === 0) {
    result.innerHTML = "<p>❗ Not a quadratic equation (a ≠ 0).</p>";
    return;
  }

  const D = b * b - 4 * a * c;
  const sqrtD = Math.sqrt(Math.abs(D));
  const denom = 2 * a;
  const steps = [];

  steps.push(`<p><strong>Step 1:</strong> Standard form of a quadratic equation:</p>`);
  steps.push(`$$ax^2 + bx + c = 0$$`);

  steps.push(`<p><strong>Step 2:</strong> Use the quadratic formula:</p>`);
  steps.push(`$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`);

  steps.push(`<p><strong>Step 3:</strong> Identify the coefficients:</p>`);
  steps.push(`<p>a = ${a}, b = ${b}, c = ${c}</p>`);

  steps.push(`<p><strong>Step 4:</strong> Substitute into the formula:</p>`);
  steps.push(`$$x = \\frac{-(${b}) \\pm \\sqrt{(${b})^2 - 4(${a})(${c})}}{2(${a})}$$`);

  steps.push(`<p><strong>Step 5:</strong> Calculate the discriminant (D):</p>`);
  steps.push(`$$D = ${b}^2 - 4(${a})(${c}) = ${D}$$`);

  if (D > 0) {
    const x1 = ((-b + sqrtD) / denom).toFixed(3);
    const x2 = ((-b - sqrtD) / denom).toFixed(3);
    steps.push(`<p><strong>Step 6:</strong> D > 0 → Two real and distinct roots:</p>`);
    steps.push(`$$x_1 = ${x1}, \\quad x_2 = ${x2}$$`);
  } else if (D === 0) {
    const x = (-b / denom).toFixed(3);
    steps.push(`<p><strong>Step 6:</strong> D = 0 → Two equal real roots:</p>`);
    steps.push(`$$x = ${x}$$`);
  } else {
    const real = (-b / denom).toFixed(3);
    const imag = (sqrtD / denom).toFixed(3);
    steps.push(`<p><strong>Step 6:</strong> D < 0 → Two complex roots:</p>`);
    steps.push(`$$x_1 = ${real} + ${imag}i, \\quad x_2 = ${real} - ${imag}i$$`);
  }

  result.innerHTML = steps.join("");
  renderMathInElement(result);
}

function saveAsImage() {
  const resultPanel = document.getElementById("result");
  html2canvas(resultPanel).then(canvas => {
    const link = document.createElement("a");
    link.download = "quadratic_solution.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
                                }
