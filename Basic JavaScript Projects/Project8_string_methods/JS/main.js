// Global variables for the demonstration
const firstName = "John";
const lastName = "Anderson";
const greeting = "Hello";
const punctuation = "!";
const originalString = "The quick brown fox jumps over the lazy dog.";

// Number variable for toString() method demonstration
const myNumber = 123.45;
const pi = 3.14159265358979;
const largeNumber = 123456.789;
const smallNumber = 0.000123456;

// Function to demonstrate the concat() method
function demonstrateConcat() {
    // Using concat() method to join multiple strings
    // The concat() method returns a new string without modifiying the original strings
    const fullName = firstName.concat(" ", lastName);
    const fullGreeting = greeting.concat(", ", firstName, " ", lastName, punctuation);

    // Demonstrating concat() with multiple parameters
    const detailedMessage = "Welcome".concat(" ", firstName, " ", lastName, "! ", "Today is ", new Date().toLocaleDateString(), ".");

    // Debug information to console
    console.log("=== concat() Method Demonstration ===");
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Full name using concat():", fullName);
    console.log("Full greeting using concat():", fullGreeting);
    console.log("Detailed message using concat():", detailedMessage);

    // Displaying the result on the page
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = `
            <strong>String Concatenation Results:</strong><br>
            Original strings: "${firstName}" and "${lastName}"<br>
            Using concat() method: "${fullName}"<br>
            Complete greeting: "${fullGreeting}"<br>
            Detailed message: "${detailedMessage}"<br>
            <em>Note: The concat() method does not modify the original strings.</em>
        `;

        // Add some styling to highlight the result
        resultElement.style.backgroundColor = "#d4edda";
        resultElement.style.borderColor = "#28a745";
    } else {
        console.error('Element with id "result" not found.');
    }
}

// Function to demonstrate the slice() method
function demonstrateSlice() {
    // The Slice() method extracts a section of a string and returns a new string
    // Syntax: string.slice(startIndex, endIndex)
    // startIndex - The position to begin extraction (inclusive)
    // endIndex - The position to end extraction (exclusive)

    // Example 1: Extract characters from index 4 to 9 (characters 5-10)
    const sliced1 = originalString.slice(4, 9); // "quick"

    // Example 2: Extract from index 10 to the end string
    const sliced2 = originalString.slice(10); // " brown fox jumps over the lazy dog."

    // Example 3: Extract the last 9 characters using negative index
    const sliced3 = originalString.slice(-9); // "y dog."

    // Example 4: Extract a middle section
    const sliced4 = originalString.slice(16, 25); // "fox jumps"
    
    // Example 5: Using slice() with no parameters returns the entire string
    const sliced5 = originalString.slice(); // "The quick brown fox jumps over the lazy dog."

    // Debug information to console
    console.log("=== slice() Method Demonstration ===");
    console.log("Original string:", originalString);
    console.log("Length of original string:", originalString.length);
    console.log("Example 1 = sliced1 (4,9):", sliced1);
    console.log("Example 2 = sliced2 (10):", sliced2);
    console.log("Example 3 = sliced3 (-9):", sliced3);
    console.log("Example 4 = sliced4 (16,25):", sliced4);
    console.log("Example 5 = sliced5 ():", sliced5);

    // Display the result on the page
    const sliceResultElement = document.getElementById("sliceResult");
    if (sliceResultElement) {
        sliceResultElement.innerHTML = `
            <strong>String Slice Result:</strong><br>
            Original string: "${originalString}"<br>
            <br>
            <strong>Exemples:</strong><br>
            1. slice(4, 9): "${sliced1}"<br>
            2. slice(10): "${sliced2}"<br>
            3. slice(-9): "${sliced3}"<br>
            4. slice(16, 25): "${sliced4}"<br>
            5. slice(): "${sliced5}"<br>
            <br>
            <em>Note: The slice() method does not modify the original string.</em>
        `;

        // Add some styling to highlight the result
        sliceResultElement.style.backgroundColor = "#d1ccff";
        sliceResultElement.style.borderColor = "#007bff";
    } else {
        console.error('Element with ID "sliceResult" not found.');
    }
}

// Function to demonstrate the toString() method
function demonstrateToString() {
    // The toString() method converts a number to a string
    // This is the Number Methods Assignment requirement
    const numberAsString = myNumber.toString();

    // Additional examples of toString() with different bases
    const binaryString = myNumber.toString(2); // Binary representation
    const hexString = myNumber.toString(16); // Hexadecimal representation

    // Debug information to console
    console.log("=== toString() Method Demonstration ===");
    console.log("Original number:", myNumber);
    console.log("Type of orginal:", typeof myNumber);
    console.log("After toString():", numberAsString);
    console.log("Type after toString():", typeof numberAsString);
    console.log("Binary representation:", binaryString);
    console.log("Hexadecimal representation:", hexString);

    // Display the result on the page
    const numberResultElement = document.getElementById("numberResult");
    if (numberResultElement) {
        numberResultElement.innerHTML = `
            <strong>toString() Method Results:</strong><br>
            Original number: ${myNumber} (type: ${typeof myNumber})<br>
            After toString(): "${numberAsString}" (type: ${typeof numberAsString})<br>
            Binary (base 2): "${binaryString}"<br>
            Hexadecimal (base 16): "${hexString}"<br>
            <em>Note: toString() successfully the number ${myNumber} to a string.</em>
        `;
        
        // Add some styling to highlight the result
        numberResultElement.style.backgroundColor = "#d1ccff";
        numberResultElement.style.borderColor = "#4b0082";
    } else {
        console.error('Element with ID "numberResult" not found.');
    }
}

// Function to demonstrate the toPrecision() method
function demonstrateToPrecision() {
    // The toPrecision() method returns a string representing the number object to the specific precision
    // This is the toPrecision() Method Assignment requirement
    // Syntax: number.toPreicision(precision) where preicision is the number of significant digits

    // Example 1: Basic usage with diferent precision levels
    const precision1 = pi.toPrecision(3);  // 3 significant digits
    const precision2 = pi.toPrecision(5);  // 5 significant digits
    const precision3 = pi.toPrecision(10); // 10 significant digits

    // Example 2: large numbers
    const precision4 = largeNumber.toPrecision(3);  // Scientific notation for large numbers
    const precision5 = largeNumber.toPrecision(7);  // More precise representation

    // Example 3: Small numbers
    const precision6 = smallNumber.toPrecision(3);  // Scientific notation for small numbers
    const precision7 = smallNumber.toPrecision(6);  // More precision representation

    // Example 4: Whole numbers
    const precision8 = myNumber.toPrecision(3);     // Rounding occurs
    const precision9 = myNumber.toPrecision(7);     // More precision representation

    // Debug information to console
    console.log("=== toPrecision() Method Demonstration ===");
    console.log("Original numbers:");
    console.log("Pi:", pi);
    console.log("largeNumber:", largeNumber);
    console.log("smallNumber:", smallNumber);
    console.log("myNumber:", myNumber);

    console.log("\nResults with toPrecision():");
    console.log("pi.toPrecision(3):", precision1);
    console.log("pi.toPrecision(5):", precision2);
    console.log("pi.toPrecision(10):", precision3);
    console.log("largeNumber.toPrecision(3):", precision4);
    console.log("largeNumber.toPrecision(7):", precision5);
    console.log("smallNumber.toPrecision(3):", precision6);
    console.log("smallNumber.toPrecision(6):", precision7);
    console.log("myNumber.toPrecision(3):", precision8);
    console.log("myNumber.toPrecision(7):", precision9);

    // Display the result on the page
    const precisionResultElement = document.getElementById("precisionResult");
    if (precisionResultElement) {
        precisionResultElement.innerHTML = `
            <strong>toPrecision() Method Results:</strong><br>
            <div style="text-align: left; margin-left: 20px;">
                <strong>Using Math.PI (${pi}):</strong><br>
                toPrecision(3): "${precision1}"<br>
                toPrecision(5): "${precision2}"<br>
                toPrecision(10): "${precision3}"<br>
                <br>
                <strong>Large Number (${largeNumber})</strong><br>
                toPrecision(3): "${precision4}"<br>
                toPrecision(7): "${precision5}"<br>
                <br>
                <strong>Small Number (${smallNumber})</strong><br>
                toPrecision(3): "${precision6}"<br>
                toPrecision(6): "${precision7}"<br>
                <br>
                <strong>My Number (${myNumber}):</strong><br>
                toPrecision(3): "${precision8}"<br>
                toPrecision(7): "${precision9}"<br>
            <div>
            <em>Note: toPrecision() returns a string with the specific number of significant digits and may use scientific notation when appropriate.</em>
        `;

        // Add some styling to highlight the result
        precisionResultElement.style.backgroundColor = "#d1ecf1";
        precisionResultElement.style.borderColor = "#007bff";
    } else {
        console.error('Element with ID "precisionResult" not found.');
    }
}

// Function to reset the result display
function resetResult() {
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = "Click the button to see the result of string concatenation.";
        resultElement.style.backgroundColor = "white";
        resultElement.style.borderColor = "#007bff";
    }

    console.log("Result display has been reset.");
}

// Function to reset the slice result display
function resetSliceResult() {
    const sliceResultElement = document.getElementById("sliceResult");
    if (sliceResultElement) {
        sliceResultElement.innerHTML = "Click the button above to se the result of the slice() method.";
        sliceResultElement.style.backgroundColor = "#fff3cd";
        sliceResultElement.style.borderColor = "#ffc107";
    }

    console.log("Slice result display has been reset.");
}

// Function to reset the number result display
function resetNumberResult() {
    const numberResultElement = document.getElementById("numberResult");
    if (numberResultElement) {
        numberResultElement.innerHTML = "Click the button above to see the result of the toString() method.";
        numberResultElement.style.backgroundColor = "#d1ccff";
        numberResultElement.style.borderColor = "#4b0082";
    }

    console.log("Number result display has been reset.");
}

// Function to reset the precision result display
function resetPrecisionResult() {
    const precisionResultElement = document.getElementById("precisionResult");
    if (precisionResultElement) {
        precisionResultElement.innerHTML = "Click the button above to see the result of the toPrecision() method.";
        precisionResultElement.style.backgroundColor = "#d1ccff";
        precisionResultElement.style.borderColor = "#007bff";
    }

    console.log("Precision result display has been reset.");
}

// Additional examples of concat() method usage
function additionalConcatExamples() {
    // Example 1: Concatenating multiple strings
    const example1 = "JavaScript" .concat(" is ", "awesome", "!");
    console.log("Example 1:", example1);

    // Example 2: Using concat() with numbers (they get converted to strings)
    const example2 = "The number is " .concat(45, " which is the answer!");
    console.log("Example 2:", example2);

    // Example 3: Chaining concat() methods
    const example3 = "Hello" .concat(" world").concat("! How are you?").concat(" Fine, thanks.");
    console.log("Example 3:", example3);

    // Example 4: Empty string concatenation
    const example4 = "".concat("Starting with empty string.");
    console.log("Example 4:", example4);
}

// Initialize when page loads
console.log("main.js loaded successfully.");
console.log("Available functions: demonstrateConcat(), resetResult(), demonstrateSlice(), resetSliceResult(), demonstrateToString(), resetNumberResult(), demonstrateToPrecision(), resetPrecisionResult(), additionalConcatExamples()");
console.log("Page ready for string and number methods demonstration.");

// You can call additionalConcatExamples() to see more examples in the console
// additionalConcatExamples();