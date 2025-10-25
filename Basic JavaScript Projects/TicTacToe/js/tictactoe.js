// js/tictactoe.js

// This variable keeps track of whose turn it is
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];
// Score tracking variables
let scoreX = 0;
let scoreO = 0;
let scoreTies = 0;

// This function is for placing an X or O in a square
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectSquare array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn it is.
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            // Active player may only be 'X' or 'O' so, if not 'X', it must be 'O'.
        } else {
            // If activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            // If active player is 'X' change it to 'O'.
            activePlayer = 'O';
        } else {
            // If active player is anything other than 'X'
            // Change the activePlayer to 'X'
            activePlayer = 'X';
        }

        // Update current player display
        updateCurrentPlayerDisplay();

        // This function plays placement sound.
        audio('./media/place.mp3');
        // This condition checks to see if it is the computer's turn.
        if (activePlayer === 'O') {
            // This function disables clicking for computer's turn.
            disableClick();
            // This function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
            // Returning true is needed for our computersTurn() function to work.
            return true;
        }
    }
}

// This function results in a random square being selected by the computer.
function computersTurn() {
    // This boolean is needed for our while loop.
    let success = false;
    // This variable stores a random number 0-8.
    let pickASquare;
    // Add safety counter to prevent infinite loop
    let attempts = 0;
    // This condition allows our while loop to keep trying if a square is selected already.
    while (!success && attempts < 9) {
        // A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));
        // Check if the square is available before attempting to place a mark.
        if (!selectedSquares.some(element => element.includes(pickASquare))) {
            placeXOrO(pickASquare);
            success = true;
        }
        attempts++;
    }
}

// This function makes it so a user can't click until the computer has finished its turn.
function disableClick() {
    // This makes our body tag temporarily unclickable.
    document.body.style.pointerEvents = 'none';
    // This makes our body tag clickable again after 1 second.
    setTimeout(function () { document.body.style.pointerEvents = 'auto'; }, 1000);
}

// This function parses the selectedSquares array to search for win conditions.
// drawLine() function is called in an appropriate condition.
function checkWinConditions() {
    // X 0,1,2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(50, 100, 558, 100); 
    }
    // X 3,4,5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(50, 304, 558, 304); 
    }
    // X 6,7,8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(50, 508, 558, 508); 
    }
    // X 0,3,6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(100, 50, 100, 558); 
    }
    // X 1,4,7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(304, 50, 304, 558); 
    }
    // X 2,5,8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(508, 50, 508, 558); 
    }
    // X 6,4,2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(100, 508, 508, 90); 
    }
    // X 0,4,8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { 
        scoreX++;
        updateScoreDisplay();
        drawWinLine(100, 90, 508, 508); 
    }
    // O 0,1,2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(50, 100, 558, 100); 
    }
    // O 3,4,5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(50, 304, 558, 304); 
    }
    // O 6,7,8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(50, 508, 558, 508); 
    }
    // O 0,3,6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(100, 50, 100, 558); 
    }
    // O 1,4,7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(304, 50, 304, 558); 
    }
    // O 2,5,8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(508, 50, 508, 558); 
    }
    // O 6,4,2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(100, 508, 508, 90); 
    }
    // O 0,4,8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { 
        scoreO++;
        updateScoreDisplay();
        drawWinLine(100, 90, 508, 508); 
    }
    // This condition checks for a tie. If none of the above conditions register and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9) {
        scoreTies++;
        updateScoreDisplay();
        // This function plays the tie game sound.
        audio('./media/tie.mp3');
        // This function sets a 1 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }
}

// This function checks if an array includes 3 strings.
// It is used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row.
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    // If the 3 variables we pass are all includes in our array true is returned and our else if condition executes the drawWinLine() function.
    if (a && b && c) { return true; }
}

// Function to update score display
function updateScoreDisplay() {
    const scoreXElement = document.getElementById('scoreX');
    const scoreOElement = document.getElementById('scoreO');
    const scoreTiesElement = document.getElementById('scoreTies');
    
    if (scoreXElement) scoreXElement.textContent = scoreX;
    if (scoreOElement) scoreOElement.textContent = scoreO;
    if (scoreTiesElement) scoreTiesElement.textContent = scoreTies;
}

// This function takes a string parameter of the path you set earlier for placement sound ('./media/place.mp3')
function audio(audioURL) {
    let howl = new Audio(audioURL);
    howl.play().catch(error => {
        console.log("Audio playback failed:", error);
        // Optionally provide visual feedback if audio fails
    });
}

// This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This function accesses our html canvas element.
    const canvas = document.getElementById('win-lines');
    // This gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    // This line indicates where the start of a line x axis is.
    let x1 = coordX1,
        // This line indicates where the start of a line y axis is.
        y1 = coordY1,
        // This line indicates where the end of a line x axis is.
        x2 = coordX2,
        // This line indicates where the end of a line y axis is.
        y2 = coordY2,
        // This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        // This variable stores temporary y axis data we update in our animation loop.
        y = y1;

    // This function interacts with the canvas.
    function animateLineDrawing() {
        // This variable creates the loop for when the game ends it restarts.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        // This method starts a new path.
        c.beginPath();
        // This method moves us to a starting point in our line.
        c.moveTo(x1, y1);
        // This method indicates the end point in our line.
        c.lineTo(x2, y2);
        // This method sets width of our line.
        c.lineWidth = 10;
        // This method sets the color of our line.
        c.strokeStyle = 'rgba(70, 255, 0, .8)';
        // This method draws everything we laid out above.
        c.stroke();
        // This condition checks if we've reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            // This condition adds 10 to the x endpoint until it equals the x end point.
            if (x < x2) { x += 10; }
            // This condition adds 10 to the y endpoint until it equals the y end point.
            if (y < y2) { y += 10; }
            // This condition cancels our animation loop if we've reached the end points.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // This condition is similar to the one above.
        // This is necessary for the 6,4,2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // This function clears our canvas after  our win line is drawn.
    function clear() {
        // This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        // This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        // This line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }

    //  This line disallows clicking while the win sound is playing.
    disableClick();
    // This line plays the win game sound.
    audio('./media/winGame.mp3');
    // This line calls our main animation loop.
    animateLineDrawing();
    // This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

// This function resets the game in a tie or a win.
function resetGame() {
    // This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        // This variable gets the html element of i.
        let square = document.getElementById(String(i));
        // This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    // This resets our array so it is empty and we can start over.
    selectedSquares = [];
    // Reset active player to X
    activePlayer = 'X';
    // Update current player display
    updateCurrentPlayerDisplay();
    // Clear any win lines
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, 608, 608);
}

// Function to update current player display
function updateCurrentPlayerDisplay() {
    const currentPlayerElement = document.getElementById('currentPlayer');
    if (currentPlayerElement) {
        currentPlayerElement.textContent = activePlayer;
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for reset button
    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', resetGame);
    }
    
    // Event listener for new game button
    const newGameButton = document.getElementById('newGameButton');
    if (newGameButton) {
        newGameButton.addEventListener('click', resetGame);
    }
    
    // Initialize current player display
    updateCurrentPlayerDisplay();
    // Initialize score display
    updateScoreDisplay();
});