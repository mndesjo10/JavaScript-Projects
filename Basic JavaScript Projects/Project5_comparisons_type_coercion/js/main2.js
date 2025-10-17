// Function to display NaN
function displayNaN() {
    const result = 0 / 0; // This creates NaN
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.innerHTML = `<strong>NaN:</strong> ${result}`;
}

// Function to display "true" using isNaN()
function displayTrue() {
    const value = "Hello"; // Not a number → NaN when coerced
    const result = isNaN(value); // Returns true
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.innerHTML = `<strong>isNaN:</strong> ${result}`;
}

// Function to display "false" using isNaN()
function displayFalse() {
    const value = 42; // A number → not NaN
    const result = isNaN(value); // Returns false
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.innerHTML = `<strong>isNaN:</strong> ${result}`;
}