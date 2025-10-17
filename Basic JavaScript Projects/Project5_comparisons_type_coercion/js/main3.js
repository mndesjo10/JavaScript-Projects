// Function to show positive infinity
function showPositiveInfinity() {
    // A number large enough to become Infinity
    const largeNum = 1e309; // 1 followed by 309 zeros
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.innerHTML = `<strong>Largee Number:</strong> ${largeNum} → ${typeof largeNum} `;
}

// Function to show negative infinity
function showNegativeInfinity() {
    // A very negative number
    const negativeNum = -1e309;
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.innerHTML = `<strong>Negative Number:</strong> ${negativeNum} → ${typeof negativeNum} `;
}
