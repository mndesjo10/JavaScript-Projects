// Define a function that uses document.getElementById and += operator
function displayOperators() {
    // Use += to concatenate strings
    var result = "Result: ";
    result += 10 + 5; // += concatenates

    // Get the addition paragraph and append the result
    var addition = document.getElementById("addition");
    addition.innerHTML += " (using +=: " + result + ")";
}

// Define a function that uses document.getElementById
function changeText() {
    // Assign two variables
    var message = "Welcome to JavaScript!";
    var color = "blue";

    // Get the paragraph element by its ID
    var paragraph = document.getElementById("myParagraph");

    // Change the text content and style
    paragraph.textContent = message;
    paragraph.style.color = color;
}

// Displaying basic operations
document.getElementById("addition").innerHTML = "10 + 5 = " + (10 + 5);
document.getElementById("subtraction").innerHTML = "10 - 5 = " + (10 - 5);
document.getElementById("multiplication").innerHTML = "10 * 5 = " + (10 * 5);
document.getElementById("division").innerHTML = "10 / 5 = " + (10 / 5);
document.getElementById("modulus").innerHTML = "10 % 3 = " + (10 % 3);

// Operator to concatenate to the addition paragraph using +=
var result = "Result: ";
result += 10 + 5; // += concatenates
document.getElementById("addition").innerHTML += " (using +=: " + result + ")";

// Increment
var x = 7;
x++;
document.getElementById("increment").innerHTML = "7 incremented is " + x;

// Drecrement
var y = 9;
y--;
document.getElementById("decrement").innerHTML = "9 decremented is " + y;
