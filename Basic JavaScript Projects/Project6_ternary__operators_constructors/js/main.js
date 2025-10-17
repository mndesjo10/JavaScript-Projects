// Function to check if rider can ride using ternary operator
// This function uses browser input and applies a ternary operation to determine eligibility
function Ride_Function() {
    // Get the height from the input field
    const Height = document.getElementById("Height").value;

    // Use ternary operator to determine if rider can ride
    // The ternary operator (condition ? value_if_true : value_if_false) is used here
    const Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

    // Display result in the paragraph
    const rideElem = document.getElementById("Ride");
    if (!rideElem) {
        console.error('Element with ID "Ride" not found.');
        return;
    }
    rideElem.innerHTML = Can_ride + " to ride.";
}

// Constructor function that uses "new" and "this" keywords
// This creates Visitor objects with name, age, ticket type, and methods
function Visitor(name, age, ticketType) {
    // Using "this" keyword to assign properties to the object being created
    this.name = name;
    this.age = age;
    this.ticketType = ticketType;
    this.entryTime = new Date();

    // Method to get visitor category based on age
    this.getCategory = function() {
        if (this.age < 12) return "Child";
        if (this.age < 18) return "Teen";
        if (this.age < 65) return "Adult";
        return "Senior";
    };

    // Method to determine access level based on ticket type
    this.getAccessLevel = function() {
        switch (this.ticketType) {
            case "VIP": return "Full Access + Fast Pass";
            case "Family": return "Group Rides + Kids Zone";
            default: return "Standard Rides";
        }
    };

    // Method to generate a complete visitor pass
    this.generatePass = function() {
        return `
            <strong>Visitor Pass</strong><br>
            Name: ${this.name}<br>
            Age: ${this.age} (${this.getCategory()})<br>
            Ticket: ${this.ticketType}<br>
            Access Level: ${this.getAccessLevel()}<br>
            Entry Time: ${this.entryTime.toLocaleString()}<br>
            Date: ${this.entryTime.toLocaleDateString()}
        `;
    };
}

// Function to create a Visitor using the constructor and display results
// This function gets input from the form and uses the Visitor constructor
function CreateVisitor() {
    // Get values from the input fields
    const name = document.getElementById("visitorName").value || "Anonymous";
    const age = parseInt(document.getElementById("visitorAge").value) || 0;
    const ticketType = document.getElementById("visitorTicket").value;

    // Validate inputs
    if (age <= 0) {
        document.getElementById("ConstructorResult").innerHTML = "<span style='color: red;'>Please enter a valid age.</span>";
        return;
    }

    // Create a new Visitor object using the "new" keyword
    // This invokes the constructor function and creates an instance
    const visitor = new Visitor(name, age, ticketType);

    // Display the result of the constructor function within an HTML element
    const resultElement = document.getElementById("ConstructorResult");
    if (resultElement) {
        resultElement.innerHTML = visitor.generatePass();
    } else {
        console.error('Element with ID "ConstructorResult" not found.');
    }
}

// Nested function as per assignment requirements
// This demonstrates multiple levels of function nesting
function Nested_Function() {
    // Outer function containing the nested function

    // First nested function: Data processing
    // This function handles the main data formatting
    function processData() {
        // Variable declaration for the base message
        const message = "Nested Function Result: ";

        // Second level of nesting: Formatting function
        // This function handles the visual formatting of the message
        function formatData() {
            // Third level of nesting: Style application
            // This innermost function applies styling to the text
            function applyStyles() {
                return `<strong style="color: #007bff;">${message}</strong>`;
            }
            // Fourth level of nesting: Additional formatting
            // This function adds timestamp information
            function addDetails() {
                const time = new Date().toLocaleTimeString();
                return `${applyStyles()}<br><small>Generated at: ${time}</small>`;
            }

            // Return the fully formatted data
            return addDetails();
        }

        // Fifth level of nesting: Validation function
        // This ensures the result is valid before returning
        function validateResult(result) {
            // Inner validation function to check if result is empty
            function isEmpty() {
                return !result || result.trim() === "";
            }

            // Return appropriate message based on validation
            if (isEmpty()) {
                return "Error: Result is empty.";
            }

            return result;
        }

        // Execute the formatting and validation chain
        const formatted = formatData();
        return validateResult(formatted);
    }

    // Second major nested function: Calculation system
    // This function performs calculations based on user input
    function performCalculations() {
        // Base values for comparison
        const baseHeight = 52;

        // Nested function to get user input from the height field
        function getUserHeight() {
            // Try to get height from the input field
            const heightInput = document.getElementById("Height");
            let userHeight = baseHeight; // Default to minimum height

            // Nested validation function to ensure input is valid
            function validateHeight() {
                if (heightInput && heightInput.value) {
                    const value = parseFloat(heightInput.value);
                    if (!isNaN(value) && value > 0) {
                        userHeight = value;
                    }
                }
            }

            // Execute validation to set the userHeight
            validateHeight();
            return userHeight;
        }

        // Nested function to calculate difference from minimum height
        function calculateDifference() {
            const currentHeight = getUserHeight();

            // Deeply nested function for the actual mathematical computation
            function compute() {
                return currentHeight - baseHeight;
            }

            return compute();
        }

        // Return an object with calculated results
        return {
            height: getUserHeight(),
            difference: calculateDifference()
        };
    }

    // Main display function (nested within the outer function)
    // This orchestrates the display of all results
    function displayResults() {
        // Get the target element for output
        const outputElement = document.getElementById("Nested_Function");

        // Nested function to create the complete output content
        function generateOutput() {
            // Get processed data and calculations
            const data = processData();
            const calculations = performCalculations();

            // Deeply nested formatting function to structure the final output
            function formatOutput() {
                return `
                    ${data}
                    <br>
                    <div style="text-align: left; margin-top: 10px; padding: 10px; background-color: #f0f8ff; border-radius: 4px;">
                        <strong>Calculation Details:</strong><br>
                        Minimum height required: ${52} cm<br>
                        Your height: ${calculations.height} cm<br>
                        Difference: ${calculations.difference} cm<br>
                        <em>${calculations.difference >= 0 ? 'Qualified to ride!' : 'Not qualified yet'}</em>
                    </div>
                `;
            }

            return formatOutput();
        }


        // Final nested function to update the DOM with results
        function updateDOM() {
            if (outputElement) {
                // Set the inner HTML to our generated output
                outputElement.innerHTML = generateOutput();
                // Modify the element to show it's been processed
                outputElement.onclick = null;
                outputElement.style.cursor = 'default';
            } else {
                console.error('Element with ID "Nested_Function" not found.');
            }
        }

        // Execute updateDOM function
        updateDOM();
    }

     // Execute the display function to start the process
     displayResults();
}
