// Function to show "true" using AND (&&)
function showAndTrue() {
    const result = true && true; // True - both are true
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>true && true:</strong> ${result}`;
}

// Function to show "false" using AND (&&)
function showAndFalse() {
    const result = true && false; // False - one is false
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>true && false:</strong> ${result}`;
}

// Function to show "true" using OR (||)
function showOrTrue() {
    const result = true || false; // True - at least one is true
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>true || false:</strong> ${result}`;
}

// Function to show "false" using OR (||)
function showOrFalse() {
    const result = false || false; // False - both are false
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>false || false:</strong> ${result}`;
}