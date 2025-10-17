// Function to show "true" using === (strict equality)
function showTrue() {
    const result = 5 === 5; // True - same value AND same type (Number)
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found');
        return;
    }
    resultElem.innerHTML = `<strong>5 === 5:</strong> ${result}`;
}

// Function to show "false" - diferent data type and diferent value
function showFalseDifferentTypeAndValue() {
    const result = 5 === "hello"; // False - different value AND different type
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found');
        return;
    }
    resultElem.innerHTML = `<strong>5 === "hello":</strong> ${result}`;
}

// Function to show "false" - same value but diferent data type
function showFalseSameValueDifferentType() {
    const result = 5 === "5"; // False - same value, but different types (number vs string)
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found');
        return;
    }
    resultElem.innerHTML = `<strong>5 === "5":</strong> ${result}`;
}

// Function to show "false" - same data type but different value
function showFalseSameTypeDifferentValue() {
    const result = 5 === 10; // False - same type (number), but different value
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>5 === 10:</strong> ${result}`;
};