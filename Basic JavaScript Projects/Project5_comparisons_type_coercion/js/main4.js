// Function to show "true" using greater than operator
function showTrue() {
    const result = 10 > 5; // True because 10 is greater than 5
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.innerHTML = `<strong>10 > 5:</strong> ${result}`;
}

// Function to show "false" using less than operator
function showFalse() {
    const result = 3 < 2; // False because 3 is not less than 2
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.innerHTML = `<strong>3 < 2:</strong> ${result}`;
}