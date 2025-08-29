// Function to demonstrate type coercion
function showCoercion() {
    // Example 1: String + Number → String concatenation
    const str = "5";
    const num = 3;
    const result1 = str + num; // "53" (string concatenation)

    // Example 2: String - Number → Number subtraction
    const result2 = num - str; // 3 - 5 = -2 (coerced to number)

    // Example 3: Boolean + Number
    const bool = true;
    const result3 = bool + num; // true + 3 = 4 (true → 1)

    // Get the paragraph element
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }

    // Output result
    resultElem.innerHTML = `<strong>Type Coercion Examples:</strong><br>
        1. "5" + 3 = ${result1} (string concatenation)<br>
        2. 3 - "5" = ${result2} (number subtraction)<br>
        3. true + 3 = ${result3} (true → 1)
    `;
}

// Optiona: Run on page load
window.onload = function () {
    showCoercion();
};