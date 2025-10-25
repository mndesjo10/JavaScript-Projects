// Function that uses a switch statement
function evaluateDay() {
    // Get today's day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const today = new Date().getDay();

    let message = "Today is ";

    // Switch statement to determine the day
    switch(today) {
        case 0:
            message += "Sunday - Time to relax!";
            break;
        case 1:
            message += "Monday - Back to work!";
            break;
        case 2:
            message += "Tuesday - Keep going!";
            break;
        case 3:
            message += "Wednesday - Halfway there!";
            break;
        case 4:
            message += "Thursday - Almost the weekend!";
            break;
        case 5:
            message += "Friday - Last push before the weekend!";
            break;
        case 6:
            message += "Saturday - Enjoy your day off!";
            break;
        default:
            message += "an unknown day!";
    }

    // Display the result
    document.getElementById("result").innerHTML = "<strong>" + message + "</strong>";
}

// Function that uses document.getElementsByClassName()
function changeHighlights() {
    // Get all elements with the class "highlight"
    const highlightedElements = document.getElementsByClassName("highlight");

    let output = "<strong>Found " + highlightedElements.length + " elements with class 'highlight':</strong><br>";

    // Loop through each element and change its text and style
    for (let i = 0; i < highlightedElements.length; i++) {
        // Change the text content
        highlightedElements[i].textContent = "Updated Paragraph " + (i + 1) + " - Changed by JavaScript!";

        // Change the style (optional)
        highlightedElements[i].style.color = 'blue';
        highlightedElements[i].style.fontWeight = 'bold';

        // Add to output
        output += "Element " + (i + 1) + ": " + highlightedElements[i].textContent + "<br>";
    }

    // Display the result
    document.getElementById("output").innerHTML = output;
}

// Function to draw on the canvas
function drawOnCanvas() {
    // Get the canvas element
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw a rectangle
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 100, 50);

    // Draw a circle
    ctx.beginPath();
    ctx.arc(250, 100, 30, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();

    // Draw text
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Hello Canvas!", 150, 170);
}