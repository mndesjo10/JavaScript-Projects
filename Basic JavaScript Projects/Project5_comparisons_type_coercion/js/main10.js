// Function to display all comparison and coercion results
function showResults() {
    // 1. Use typeof to get data type of a variable
    const myVariable = "Hello, Joel!";
    const dataType = typeof myVariable;

    // 2. Combine string and number (type coercion)
    const combined = "Number: " + 42;

    // 3. Use == (loose equality)
    const looseEqual = 5 == Number("5"); // true

    // 4. Use === (strict equality)
    const strictEqual = 5 === Number("5"); // true

    // 5. Use > and < operators
    const greaterThan = 10 > 5; // true
    const lessThan = 3 < 2; // false

    // 6. Use && (AND) operator
    const andResult = true && false; // false

    // 7. Use || (OR) operator
    const orResult = true || false; // true

    // 8. Use ! (NOT) operator
    const notResult = !true; // false

    // Get the result element
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }

    // Output all results using innerHTML
    resultElem.innerHTML = `
        <strong>Data Type:</strong> ${dataType}<br>
        <strong>String + Number:</strong> ${combined}<br>
        <strong>5 == Number("5"):</strong> ${looseEqual}<br>
        <strong>5 === Number("5"):</strong> ${strictEqual}<br>
        <strong>10 > 5:</strong> ${greaterThan}<br>
        <strong>3 < 2:</strong> ${lessThan}<br>
        <strong>true && false:</strong> ${andResult}<br>
        <strong>true || false:</strong> ${orResult}<br>
        <strong>!true:</strong> ${notResult}
    `;
}