// Function that contains a while loop
function Call_Loop() {
    let counter = 1;
    let output = "";

    // While loop: runs as long as counter is less than or equal to 5
    while (counter <= 5) {
        output += "Iteration " + counter + "<br>";
        counter++;
    }

    // Display the result in the paragraph with id "Loop"
    document.getElementById("Loop").innerHTML = output;
}

// Function that contains a for loop
function for_Loop() {
    // Array of musical instruments
    const instruments = ["Guitar", "Drums", "Piano", "Saxophone", "Violin", "Trumpet", "Flute"];

    let output = "<strong>List of Instruments:</strong><br>";

    // For loop: iterate through each instrument in the array
    for (let i = 0; i < instruments.length; i++) {
        output += (i + 1) + ". " + instruments[i] + "<br>";
    }

    // Display the result in the paragraph with id "List_of_Instruments"
    document.getElementById("List_of_Instruments").innerHTML = output;
}

// Function that uses an array and document.getElementById().innerHTML
function array_Function() {
    // Create an array
    const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

    // Get the first color from the array
    const firstColor = colors[0];

    // Display the value in the paragraph with id "Array"
    document.getElementById("Array").innerHTML = "The first color in the array is: <strong>" + firstColor + "</strong>";
}

// Function that demonstrates const keyword with object
function constant_function() {
    // Create an object using const
    const car = {
        make: "Nissan",
        model: "Altima",
        year: 2025
    };

    // Display initial property values
    let output = "Initial Car Info:<br>";
    output += "Make: " + car.make + "<br>";
    output += "Model: " + car.model + "<br>";
    output += "Year: " + car.year + "<br><br>";

    // Change a property's value
    car.year = 2026;

    // Add a new property
    car.color = "Blue";

    // Display updated information
    output += "Updated Car Info:<br>";
    output += "Make: " + car.make + "<br>";
    output += "Model: " + car.model + "<br>";
    output += "Year: " + car.year + "<br>";
    output += "Color: " + car.color + "<br>";
    
    // Display the result in the paragraph with id "Constant"
    document.getElementById("Constant").innerHTML = output;
}

// Funvtion demonstrating the 'let' keyword
function let_keyword_function() {
    let message = "Hello from let!"; // Variable declared with 'let'

    if (true) {
        let message = "This is a different message inside the block."; // Block-scoped variable
        document.getElementById("Let_Example").innerHTML = "<strong>Inside block:</strong> " + message;
    }

    // This will still show the outer message because 'let' is block-scoped
    document.getElementById("Let_Example").innerHTML += "<br><br><strong>Outside block:</strong> " + message;
}

// Function demonstrating object with let keyword and method
function object_function() {
    // Create an object using let
    let person = {
        firstName: "John",
        lastName: "Mendes",
        age: 30,

        // Method to return full name
        getFullName: function() {
            return this.firstName + " " + this.lastName;
        },

        // Method to return greeting
        greet: function() {
            return "Hello, my name is " + this.getFullName() + " and I am " + this.age + " years old.";
        }
    };

    // Display object properties and method results
    let output = "<strong>Person Object:</strong><br>";
    output += "First Name: " + person.firstName + "<br>";
    output += "Last Name: " + person.lastName + "<br>";
    output += "Age: " + person.age + "<br><br>";
    output += "Full Name: " + person.getFullName() + "<br>";
    output += "Greeting: " + person.greet();

    // Display the result in the paragraph with id "Object_Output"
    document.getElementById("Object_Output").innerHTML = output;
}