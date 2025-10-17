// Reusable function to update paragraph
function updateDisplay(text) {
    const mathElem = document.getElementById("Math");
    if (!mathElem) {
        console.error('Element with ID "Math" not found.');
        return;
    }
    mathElem.textContent = text;
}
// Example 1: Math.abs() - Absolute value
function absValue() {
    const result = Math.abs(-5);
    updateDisplay(`Math.abs(-5) = ${result}`);
}

// Example 2: Math.round() - Rounding
function roundNumber() {
    const result = Math.round(4.7);
    updateDisplay(`Math.round(4.7) = ${result}`);
}

// Example 3: Math.max() - Maximum value
function maxValue() {
    const result = Math.max(1, 2, 3);
    updateDisplay(`Math.max(1, 2, 3) = ${result}`);
}

// Example 4: Math.min() - Minimum value
function minValue() {
    const result = Math.min(1, 2, 3);
    updateDisplay(`Math.min(1, 2, 3) = ${result}`);
}

// Example 5: Math.sqrt() - Square root
function sqrtValue() {
    const result = Math.sqrt(16);
    updateDisplay(`Math.sqrt(16) = ${result}`);
}

// Optional: Run on page load
window.onload = function () {
    updateDisplay("Ready! Click any button to see a Math method result.");
};