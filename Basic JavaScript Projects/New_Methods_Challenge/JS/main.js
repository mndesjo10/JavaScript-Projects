// Global Variables for the demonstration
const pi = 3.14159265358979;
const price = 19.9999;
const taxRate = 0.0825;
const largeNumber = 123456.789;
const smallNumber = 0.000123456;
const temperature = 98.678;

// Function to demonstrate the toFixed() method
function demonstrateToFixed() {
    // The toFixed() method formats a number with a specific number of digits after the decimal point
    // It returns a string representation of the number with exactly the specified number of digits after the decimal point
    // Syntax: number.toFixed(digits) where digits is between 0 and 20

    // Example 1: Basic usage with different decimal places
    const fixed1 = pi.toFixed(2);       // 2 decimal places - common for currency
    const fixed2 = pi.toFixed(4);       // 4 decimal places - more precision
    const fixed3 = pi.toFixed(0);       // No decimal places - rounded to nearest integer

    // Example 2: Currency formatting (most common use case)
    const formattedPrice = price.toFixed(2);           // Standard currency format
    const taxAmount = (price * taxRate).toFixed(2);    // Calculate and format tax
    const totalPrice = (parseFloat(formattedPrice) + parseFloat(taxAmount)).toFixed(2); //Total with tax
    
    // Example 3: Large numbers
    const largeFixed = largeNumber.toFixed(1);         // One decimal place
    const largeFixed2 = largeNumber.toFixed(3);        // Three decimal places

    // Example 4: Small numbers
    const smallFixed = smallNumber.toFixed(6);         // Six decimal places
    const smallFixed2 = smallNumber.toFixed(8);        // Eight decimal places

    // Example 5: Temperature readings
    const tempFixed = temperature.toFixed(1);          // One decimal place for temperature
    const tempFixed2 = temperature.toFixed(3);         // Three decimal places for precision instruments

    // Example 6: Zero padding demonstration
    const wholeNumFixed = (5).toFixed(2);                // Show zero padding: "5.00"

    // Debug information to console
    console.log("=== toFixed() Method Demonstration ===");
    console.log("Original numbers:");
    console.log("pi:", pi);
    console.log("price:", price);
    console.log("taxRate:", taxRate);
    console.log("largeNumber:", largeNumber);
    console.log("smallNumber:", smallNumber);
    console.log("temperature:", temperature);

    console.log("\nResult with toFixed():");
    console.log("pi.toFixed(2):", fixed1, "(type:", typeof fixed1, ")");
    console.log("pi.toFixed(4):", fixed2, "(type:", typeof fixed2, ")");
    console.log("pi.toFixed(0):", fixed3, "(type:", typeof fixed3, ")");
    console.log("price.toFixed(2):", formattedPrice, "(type:", typeof formattedPrice, ")");
    console.log("Tax amount:", taxAmount, "(type:", typeof taxAmount, ")");
    console.log("Total price:", totalPrice, "(type:", typeof totalPrice, ")");
    console.log("largeNumber.toFixed(1):", largeFixed, "(type:", typeof largeFixed, ")");
    console.log("smallNumber.toFixed(6):", smallFixed, "(type:", typeof smallFixed, ")");
    console.log("temperature.toFixed(1):", tempFixed, "(type:", typeof tempFixed, ")");
    console.log("5.toFixed(2):", wholeNumFixed, "(type:", typeof wholeNumFixed, ")");

    // Display the result on the page
    const toFixedResultElement = document.getElementById("toFixedResult");
    if (toFixedResultElement) {
        toFixedResultElement.innerHTML = `
            <strong>toFixed() Method Results:</strong><br>
            <div style="text-align: left; margin-left: 20px;">
                <strong>Math.PI Examples:</strong><br>
                toFixed(2): "${fixed1}" (rounded)<br>
                toFixed(4): "${fixed2}" (more precise)<br>
                toFixed(0): "${fixed3}" (integer)<br>
                <br>
                <strong>Currency Formatting:</strong>
                Price: $${formattedPrice}<br>
                Tax (8.25%): $${taxAmount}<br>
                Total: $${totalPrice}<br>
                <br>
                <strong>Large Numbers:</strong><br>
                ${largeNumber}.toFixed(1): "${largeFixed}"<br>
                <br>
                <strong>Small Numbers:</strong><br>
                ${smallNumber}.toFixed(6): "${smallFixed}"<br>
                <br>
                <strong>Temperature Readings:</strong><br>
                ${temperature}°F rounded: ${tempFixed}°F<br>
                <br>
                <strong>Zero Padding:</strong><br>
                5.toFixed(2): "${wholeNumFixed}" (demonstrates automatic zero padding)<br>
            </div>
            <em>Note: toFixed() always returns a string with exactly the specified number of decimal places, rounding when necessary. Remember that the return value is a string, not a number, so convert back to number with parseFloat() if you need to perform further calculations.</em>
        `;

        // Add some styling to highlight the result
        toFixedResultElement.style.backgroundColor = "#e8f5e8";
        toFixedResultElement.style.borderColor = "#28a745";
    } else {
        console.error('Element with ID "toFixedResult" not found.');
    }
}

// Function to demonstrate the valueOf() method
function demonstrateValueOf() {
    // The valueOf() method returns the primitive value of a Number object
    // For Number objects, valueOf() returns the number itself
    // This method is usually called internally by JavaScript, but can be called explicitly
    // Syntax: number.valueOf()

    // Example 1: Basic usage with Number object
    const numObj = new Number(42);
    const primitiveValue = numObj.valueOf();

    // Example 2: Comparing types and values
    const typeOfNumObj = typeof numObj;
    const typeOfPrimitive = typeof primitiveValue;
    const looseEquality = (numObj == primitiveValue); // true - values are equal
    const strictEquality = (numObj === primitiveValue); // false - different types

    // Example 3: Using valueOf() in calculations
    const calculation = numObj.valueOf() + 10;
    const automaticCalculation = numObj + 10; // JavaScript automatically calls valueOf()

    // Example 4: With primitive numbers (also works)
    const piValue = pi.valueOf();
    const largeValue = largeNumber.valueOf();

    // Example 5: In conditional statements
    const isGreaterThan100 = numObj.valueOf() > 100;

    // Example 6: Type conversion demonstration
    const stringNum = "123";
    const convertedNum = Number(stringNum).valueOf(); // Convert string to number object, then get primitive value

    // Example 7: Multiple operations
    const complexOperation = (new Number(10)).valueOf() * (new Number(5)).valueOf();

    // Debug information to console
    console.log("=== valueOf() Method Demonstration ===");
    console.log("Original values:");
    console.log("Number object:", numObj);
    console.log("Primitive number:", pi);

    console.log("\nType Information:");
    console.log("Type of Number object:", typeof numObj);
    console.log("Type of primitive via valueOf():", typeof primitiveValue);

    console.log("\nEquality Comparison:");
    console.log("Loose equality (==):", looseEquality);
    console.log("Strict equality (===):", strictEquality);

    console.log("\nCalculations:");
    console.log("Using valueOf():", calculation);
    console.log("Automatic conversion:", automaticCalculation);
    console.log("Complex operation:", complexOperation);

    console.log("\nOther Examples:");
    console.log("pi.valueOf():", piValue);
    console.log("Converted from string:", convertedNum);
    console.log("Is 42 > 100?:", isGreaterThan100);

    // Display the result on the page
    const valueOfResultElement = document.getElementById("valueOfResult");
    if (valueOfResultElement) {
        valueOfResultElement.innerHTML = `
            <strong>valueOf() Method Results:</strong><br>
            <div style="text-align: left; margin-left: 20px;">
            <strong>Object vs Primitive:</strong><br>
            Number object: ${numObj} (type: ${typeOfNumObj})<br>
            Primitive value: ${primitiveValue} (type: ${typeOfPrimitive})<br>
            <br>
            <strong>Equality Tests:</strong><br>
            Loose equality (==): <span style="color: ${looseEquality ? 'green' : 'red'};">${looseEquality ? "true ✓" : "false ✗"}</span><br>
            Strict equality (===): <span style="color: ${strictEquality ? 'green' : 'red'};">${strictEquality ? "true ✓" : "false ✗"}</span><br>
            <br>
            <strong>Arithmetic Operations:</strong><br>
            Explicit valueOF(): ${calculation}<br>
            Automatic conversion: ${automaticCalculation}<br>
            Complex operation: ${complexOperation}<br>
            <br>
            <strong>Value Retrieval:</strong><br>
            pi.valueOf(): ${piValue}<br>
            largeNumber.valueOf(): ${largeValue}<br>
            String "123" converted: ${convertedNum}<br>
            <br>
            <strong>Logic Operation:</strong><br>
            Is ${numObj} > 100? ${isGreaterThan100 ? "No" : "Yes"}<br>
            </div>
        <em>Note: valueOf() is crucial for understanding JavaScript's type system. While it's often called automatically, explicitly using it helps clarify when object-to-primitive conversion occurs. This method is part of JavaScript's value retrieval mechanism used in all arithmetic operations and comparisons.</em>
    `;

    // Add some styling to highlight the result
    valueOfResultElement.style.backgroundColor = "#f8e1e1";
    valueOfResultElement.style.borderColor = "#dc3545";
    } else {
        console.error('Element with ID "valueOfResult" not found.');
    }
}

// Function to reset the toFixed result display
function resetToFixedResult() {
    const toFixedResultElement = document.getElementById("toFixedResult");
    if (toFixedResultElement) {
        toFixedResultElement.innerHTML = "Click the button above to see the result of the toFixed() method.";
        toFixedResultElement.style.backgroundColor = "#e8f5e8";
        toFixedResultElement.style.borderColor = "#28a745";
    }

    console.log("toFixed result display has been reset.");
}

// Function to reset the valueOf result display
function resetValueOfResult() {
    const valueOfResultElement = document.getElementById("valueOfResult");
    if (valueOfResultElement) {
        valueOfResultElement.innerHTML = "Click the button above to see the result of the valueOf() method.";
        valueOfResultElement.style.backgroundColor = "#f8e1e1";
        valueOfResultElement.style.borderColor = "#dc3545";
    }

    console.log("valueOf result display has been reset.");
}

// Initialize when page loads
console.log("main.js loaded successfully.");
console.log("Available functions: demonstrateToFixed(), resetToFixedResult(), demonstrateValueOf(), resetValueOfResult()");
console.log("Page ready for the New Methods Challenge.");

// You can call these functions to see examples in the console
// demonstrateToFixed();
// demonstrateValueOf();