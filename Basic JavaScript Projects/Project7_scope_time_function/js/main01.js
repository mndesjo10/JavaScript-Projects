// GLOBAL VARIABLE - declared outside of an function
// This variable can be accessed from any function in this script
const appName = "Variable Scope Demo";
let globalCounter = 0;
var isPageLoaded = true;

// Function to demonstrate local and global variables
function testVariables() {
    // LOCAL VARIABLE - declared inside the function
    // This variable only exists within this function
    const localMessage = "Hello from local scope!";
    let localVar = 50;

    // Accessing global variables
    console.log("=== Testing Global Variables ===");
    console.log("Global app name:", appName);
    console.log("Global counter before:", globalCounter);

    // Modifying global variables
    globalCounter++;

    // Using local variables
    console.log("Local message:", localMessage);
    console.log("Local variable:", localVar);
    console.log("Global counter after increment:", globalCounter);

    // Display results
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = `
            <strong>Variable Test Results:</strong><br>
            Global app name: ${appName}<br>
            Global counter: ${globalCounter}<br>
            Page loaded: ${isPageLoaded}<br>
            Local Variable Value: ${localVar}<br>
            Status: Variables Working correctly!
        `;
    }
}

// Function with intentional error for debugging practice
function triggerError() {
    console.log("=== Starting function with intentional errors ===");

    // This will work fine
    console.log("Current global counter:", globalCounter);

    // Creating a nested function to demonstrate scope
    function errorFunction() {
        // Local variables
        let userName = "Edson Pedro";
        let userAge = 35;

        // Debug point before error
        console.log("Debug: userName =", userName);
        console.log("Debug: userAge =", userAge);

        // Intentional error 1: Trying to access undefined variable
        // This will cause a ReferenceError
        console.log("User email:", userEmail);

        // Intentional error 2: Type error (commented out to focus on first error)
        // let numberValue = 100;
        // numberValue();

        // This line won't execute due to the errors above
        console.log("This line will not execute");
}

// Call the function with errors
errorFunction();

// This line might not execute if there's an uncaught error
console.log("Function completed (if no fatal errors)");
}

// Function demonstrating time-based functionality
function showTime() {
    // Local variable storing current time
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toDateString();

    // Update global counter
    globalCounter++;

    // Debug information
    console.log("Current time displayed:", currentTime);
    console.log("Total interactions:", globalCounter);

    // Display time on page
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = `
            <strong>Current Time & Date:</strong><br>
            ${currentDate}<br>
            ${currentTime}<br>
            <strong>Total Actions:</strong> ${globalCounter}
        `;
    }
}

// Method: Function that uses new Date().getHours() method with if statement
// This function displays a message based on the current time of day
function displayTimeBasedMessage() {
    // Get the current hour (0-23) using Date object method
    const currentHour = new Date().getHours();

    // Variable to store the message
    let message = "";
    let backgroundColor = "";
    let textColor = "";

    // If statement to determine appropriate message based on the hour
    if (currentHour >= 5 && currentHour < 12) {
        // Morning: 5 AM to 11:59 AM
        message = "Good morning! The early bird gets the worm.";
        backgroundColor = "#d4edda"; // Light green
        textColor = "#155724"; // Dark green
    } else if (currentHour >= 12 && currentHour < 17) {
        // Afternoon: 12 PM to 4:59 PM
        message = "Good afternoon! Hope your day is going smoothly.";
        backgroundColor = "#d1ecf1"; // Light blue
        textColor = "#0c5460"; // Dark blue
    } else if (currentHour >= 17 && currentHour < 21) {
        // Evening: 5 PM to 8:59 PM
        message = "Good evening! Time to unwind and relax!";
        backgroundColor = "#fff3cd"; // Light yellow
        textColor = "#856404"; // Dark yellow
    } else {
        // Night: 9 PM to 4:59 AM
        message = "Good night! Most people are sleeping now!";
        backgroundColor = "#d1ccff"; // Light purple
        textColor = "#4b0082"; // Indigo
    }

    // Additional information about the current time
    const currentTime = new Date().toLocaleTimeString();
    const dayOfWeek = new Date().toLocaleDateString(undefined, {weekday: 'long'});
    const formattedHour = currentHour > 12 ? currentHour - 12 : (currentHour === 0 ? 12 : currentHour);
    const period = currentHour >= 12 ? "PM" : "AM";

    // Debug information to console
    console.log("=== Time-Based Message Function Activated ===");
    console.log("Current Hour:", currentHour);
    console.log("Generated Message:", message);
    console.log("Current Time:", currentTime);
    console.log("Day of the Week:", dayOfWeek);

    // Use document.getElementById() method to reference the HTML element by its ID
    // and update its content and style based on the time of day
    const timeElement = document.getElementById("timeGreeting");

    if (timeElement) {
        // Update the content of the element
        timeElement.innerHTML = `
            <strong>${message}</strong><br>
            <small>Current time: ${formattedHour}:${new Date().getMinutes().toString().padStart(2, '0')} ${period}<br>
            It's ${dayOfWeek} (${currentHour}:00 on a 24-hour clock)</small>
        `;

        // Update the style based on time of day
        timeElement.style.backgroundColor = backgroundColor;
        timeElement.style.color = textColor;
        timeElement.style.borderColor = textColor;

        // Change cursor to default since it's no longer clickable
        timeElement.style.cursor = "default";

        // Remove the onclick event so it doesn't trigger again
        timeElement.onclick = null;
    } else {
        console.error("Element with ID \"timeGreeting\" not found.");
    }
}

// If Statement: New function with custom if statements
// This function provides weather-based activity recommendations
function checkWeatherRecommendation() {
    // Simulate getting temperature from a weather API
    // In a real application, this would come from an external source
    const currentTemperature = Math.floor(Math.random() * 40) - 5; // Random temp between -5 and 34°C
    const isRaining = Math.random() < 0.3; // 30% chance of rain
    const isWeekend = new Date().getDay() === 0 || new Date().getDay() === 6; // 0=Sunday, 6=Saturday

    // Variables to store recommendation
    let activity = "";
    let clothing = "";
    let emoji = "";
    let backgroundColor = "";

    // Complex if statement with multiple conditions to determine outdoor activities
    if (isRaining) {
        // If it's raining, recommend indoor activities
        activity = "Visit a museum or watch a movie at home.";
        clothing = "Don't forget your umbrella and raincoat!";
        emoji = "🌧️☔🏠";
        backgroundColor = "#d6d8db"; // Gray for rainy days

        console.log("It's raining, recommending indoor activities.");
    } else if (currentTemperature < 0) {
        // Very cold conditions
        activity = "Go ice skating or build a snowman!";
        clothing = "Wear heavy winter coat, gloves, hat and boots.";
        emoji = "⛸️☃️❄️";
        backgroundColor = "#a8d8ea"; // Light blue for cold

        console.log("Temperature below freezing, recommending winter activities.");
    } else if (currentTemperature >= 0 && currentTemperature <= 10) {
        // Cold conditions
        activity = "Take a brisk walk in the park.";
        clothing = "Wear a warm jacket, scarf and sweater.";
        emoji = "🚶‍♂️🍂🧥";
        backgroundColor = "#c4e8e4"; // Teal for cool weather

        console.log("Cold but above freezing, recommending light outdoor activity.");
    } else if (currentTemperature >= 10 && currentTemperature <= 20) {
        // Mild conditions
        if (isWeekend) {
            // Special weekend recommendation
            activity = "Go for a hike or have a picnic!";
            clothing = "Wear a light jacket or sweater.";
            emoji = "🥾🍉🌳";
            backgroundColor = "#d4edc9"; // Light green for pleasant weather

            console.log("Mild weekend weather, recommending outdoor recreation.");
        } else {
            // Weekday recommendation
            activity = "Enjoy a bike ride or visit a local cafe.";
            clothing = "A light sweater or long-sleeve shirt is perfect.";
            emoji = "🚴‍♀️☕🍰";
            backgroundColor = "#e2f0cb"; // Yellow-green for nice weather

            console.log("Mild weekday weather, recommending casual outdoor activity.");
        }
    } else if (currentTemperature >= 20 && currentTemperature < 30) {
        // Warm conditions
        activity = "Go swimming or visit the beach!";
        clothing = "Wear shorts, t-shirts, and sunscreen.";
        emoji = "🏊‍♂️🏖️☀️";
        backgroundColor = "#fff3cd"; // Yellow for warm weather

        console.log("Warm weather, recommending water activities.");
    } else {
        // Hot conditions
        activity = "Stay in air conditioning or visit a water park.";
        clothing = "Wear lightweight clothing, hat, and plenty of sunscreen.";
        emoji = "🏖️🌞💦";
        backgroundColor = "#ffd4d4"; // Light red for hot weather

        console.log("Hot weather, recommending cooling activities.");
    }

    // Additional if statement to provide advice based on extreme conditions
    if (currentTemperature > 35) {
        activity += " (Extreme heat warning: stay hydrated!)";
        console.log("Extreme heat detected, adding safety warning");
    } else if (currentTemperature < -10) {
        activity += " (Extreme cold warning: beware of frostbite!)";
        console.log("Extreme cold detected, adding safety warning");
    }

    // Create result element if it doesn't exist
    let resultElement = document.getElementById("weatherResult");
    if (!resultElement) {
        resultElement = document.createElement("p");
        resultElement.id = "weatherResult";
        // Insert after the timeGreeting element
        const timeGreetingElement = document.getElementById("timeGreeting");
        if (timeGreetingElement) {
            timeGreetingElement.insertAdjacentElement("afterend", resultElement);
        }
    }

    // Display the weather recommendation
    resultElement.innerHTML = `
        <strong>Weather Recommendation:</strong><br>
        Current Temperature: ${currentTemperature}°C<br>
        Precipitation: ${isRaining ? "Raining 🌧️" : "Dry ☀️"}<br>
        Today is: ${isWeekend ? "the Weekend 🎉" : "a Weekday 🏢"}<br>
        Recommended Activity: ${activity} ${emoji}<br>
        What to Wear: ${clothing}<br>
        <em>Note: Temperature is randomly generated for demonstration purposes.</em>
    `;

    // Style the result element
    resultElement.style.backgroundColor = backgroundColor;

    // Update global counter
    globalCounter++;

    // Debug information
    console.log("=== Weather Recommendation Generation ===");
    console.log("Temperature:", currentTemperature);
    console.log("Is Raining:", isRaining);
    console.log("Is Weekend:", isWeekend);
    console.log("Recommended Activity:", activity);
}

// Else Assignment: Function with if-else statement
// This function checks age eligibility for various activities
function checkAgeEligibility() {
    // Get the age value from the input field using document.getElementById()
    const ageInput = document.getElementById("ageInput");
    const ageResultElement = document.getElementById("ageResult");

    // Validate that element exists
    if (!ageInput || !ageResultElement) {
        console.error("Required HTML elements not found");
        return;
    }

    // Get the age value and convert it to a number
    const age = parseInt(ageInput.value);

    // Validate input
    if (isNaN(age) || age < 0) {
        ageResultElement.innerHTML = "<strong>Error:</strong> Please enter a valid age.";
        ageResultElement.style.backgroundColor = "#f8d7da"; // Light red for error
        ageResultElement.style.color = "#721c24"; // Dark red for error text
        console.log("Invalid age input:", ageInput.value);
        return;
    }

    // Variables to store eligibility information
    let eligibilityMessage = "";
    let activitySuggestions = "";
    let emoji = "";
    let backgroundColor = "";

    // If-else statement to determine age category and eligibility
    if (age < 13) {
        // Child category
        eligibilityMessage = "You are classified as a child.";
        activitySuggestions = "You can enjoy kid-friendly attractions, playgrounds, and children's shows.";
        emoji = "👶🎠";
        backgroundColor = "#d1ecf1"; // Light blue for child

        console.log(`Age ${age}: Child category - suggesting kid-friendly activities.`);
    } else if (age >= 13 && age < 18) {
        // Teen category
        eligibilityMessage = "You are considered as a teenager.";
        activitySuggestions = "You can participate in teen programs, sports leagues, and youth clubs.";
        emoji = "🧑‍🎤🏀";
        backgroundColor = "#fff3cd"; // Light yellow for teens

        console.log(`Age ${age}: Teen category - suggesting teen activities.`);
    } else if (age >= 18 && age < 65) {
        // Adult category
        eligibilityMessage = "You are classified as an adult.";

        // Nested if-else to provide more specific suggestions for adults
        if (age >= 18 && age < 30) {
            activitySuggestions = "You can enjoy nightlife, travel adventures, and career development events.";
        } else if (age >= 30 && age < 50) {
            activitySuggestions = "You can participate in professional networking, family activities, and fitness programs.";
        } else {
            activitySuggestions = "You can enjoy cultural events, travel groups, and wellness programs.";
        }

        emoji = "🧑‍💼✈️";
        backgroundColor = "#d4edda"; // Light green for adults

        console.log(`Age ${age}: Adult category - suggesting adult activities.`);
    } else {
        // Senior category
        eligibilityMessage = "You are considered a senior.";
        activitySuggestions = "You can enjoy senior centers, leisure activities, retirement communities, and volunteer opportunities.";
        emoji = "🧓🎉";
        backgroundColor = "#f8e1e1"; // Light pink for seniors

        console.log(`Age ${age}: Senior category - suggesting senior activities.`);
    }

    // Final if-else to determine special eligibility status
    if (age >= 65) {
        activitySuggestions += " As a senior, you may be eligible for special discounts and programs.";
        console.log(`Age ${age}: Qualified for senior benefits.`);
    } else if (age < 18) {
        activitySuggestions += " Parental supervision may be required for some activities.";
        console.log(`Age ${age}: May require parental supervision.`);
    } else {
        activitySuggestions += " You have full access to all adult activities.";
        console.log(`Age ${age}: Full adult access.`);
    }

    // Update the global counter
    globalCounter++;

    // Use document.getElementById() to update the result paragraph
    ageResultElement.innerHTML = `
        <strong>Age Verification Results:</strong><br>
        Your Age: ${age} years old<br>
        Status: ${eligibilityMessage}<br>
        Suggested Activities: ${activitySuggestions} ${emoji}<br>
        Interactions Count: ${globalCounter}
        <em>Note: This is a demonstration of if-else logic in JavaScript.</em>
    `;

    // Style the result element based on age category
    ageResultElement.style.backgroundColor = backgroundColor;
    ageResultElement.style.color = "#333";

    // Debug information
    console.log("=== Age Eligibility Check Completed ===");
    console.log("Input Age:", age);
    console.log("Eligibility Message:", eligibilityMessage);
    console.log("Activity Suggestions:", activitySuggestions);
}

// Initialize when page loads
console.log("main01.js Loaded Successfully");
console.log("Global variables initialized:");
console.log("- appName:", appName);
console.log("- globalCounter:", globalCounter);
console.log("- isPageLoaded:", isPageLoaded);
console.log("Available functions: testVariables(), triggerError(), showTime(), displayTimeBasedMessage(), checkWeatherRecommendation(), checkAgeEligibility()");