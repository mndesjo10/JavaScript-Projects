// js/tictactoe.js

// This variable keeps track of whose turn it is
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];
// Score tracking variables
let scoreX = 0;
let scoreO = 0;
let scoreTies = 0;
// Body element reference - will be set when DOM loads
let body;
// Variable to track current audio object
let currentAudio = null;

// This function is for placing an X or O in a square
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        
        // This condition checks who's turn it is.
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/o1.png")';
        } else {
            select.style.backgroundImage = 'url("images/x1.png")';
        }

        // Add the move to selectedSquares FIRST
        selectedSquares.push(squareNumber + activePlayer);
        
        // Check for win conditions
        let hasWin = checkForWin();
        
        // Only play click sound — don't try to stop anything
        audio('./media/click.mp3');
        
        // Process win conditions (this will trigger drawWinLine for wins)
        checkWinConditions();
        
        // Check for tie after win conditions are processed
        if (!hasWin && selectedSquares.length === 9) {
            // Play tie sound
            audio('./media/tie.mp3');
        }
        
        // Change active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        // Update display
        updateCurrentPlayerDisplay();

        // Computer's turn
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
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

// This function makes our body element temporarily unclickable.
function disableClick() {
    // This makes our body unclickable.
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This function checks if there's a win condition without drawing lines
function checkForWin() {
    // Check all win conditions
    return arrayIncludes('0X', '1X', '2X') || arrayIncludes('3X', '4X', '5X') || 
           arrayIncludes('6X', '7X', '8X') || arrayIncludes('0X', '3X', '6X') ||
           arrayIncludes('1X', '4X', '7X') || arrayIncludes('2X', '5X', '8X') ||
           arrayIncludes('6X', '4X', '2X') || arrayIncludes('0X', '4X', '8X') ||
           arrayIncludes('0O', '1O', '2O') || arrayIncludes('3O', '4O', '5O') ||
           arrayIncludes('6O', '7O', '8O') || arrayIncludes('0O', '3O', '6O') ||
           arrayIncludes('1O', '4O', '7O') || arrayIncludes('2O', '5O', '8O') ||
           arrayIncludes('6O', '4O', '2O') || arrayIncludes('0O', '4O', '8O');
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
        // Play tie sound
        audio('./media/ties.mp3');
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

function audio(audioURL) {
    const sound = new Audio(audioURL);
    // Store reference to current audio for potential stopping
    if (audioURL.includes('applause')) {
        currentAudio = sound;
    }
    return sound.play().catch(e => {
        console.log("Audio blocked:", e.message);
    });
}

// This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // Stop any currently playing applause
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // Play applause and store the audio object
    audio('./media/applause.mp3');
    
    // This line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    // This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    // This line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        // This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        // This line indicates where the end of a lines x axis is.
        x2 = coordX2,
        // This line indicates where the end of a lines y axis is.
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
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
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

    // This function clears our canvas after our win line is drawn.
    function clear() {
        // This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        // This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        // This line stops our animation loop.
        cancelAnimationFrame(animationLoop);
    }

    // This line disallows clicking while the win sound is playing.
    disableClick();
    // This line calls our main animation loop.
    animateLineDrawing();
    // This line waits 1 second. Then, clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

// This function resets the game in the event of a tie or a win.
function resetGame() {
    // Stop any currently playing applause sound
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    
    // This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        // This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        // This removes our elements backgroundImage.
        square.style.backgroundImage = '';
    }
    // This resets our array so it is empty and we can start over.
    selectedSquares = [];
}

// This function starts a completely new game and resets all scores
function newGame() {
    // Reset the current game
    resetGame();
    // Reset all scores
    scoreX = 0;
    scoreO = 0;
    scoreTies = 0;
    // Update score display
    updateScoreDisplay();
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
    // Initialize body reference
    body = document.body;
    
    // Event listener for reset button (resets current game only)
    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', resetGame);
    }
    
    // Event listener for new game button (resets everything including scores)
    const newGameButton = document.getElementById('newGameButton');
    if (newGameButton) {
        newGameButton.addEventListener('click', function() {
            console.log('New Game button clicked - resetting all scores'); // Debug log
            newGame();
        });
    } else {
        console.log('New Game button not found'); // Debug log
    }
    
    // Initialize current player display
    updateCurrentPlayerDisplay();
    // Initialize score display
    updateScoreDisplay();
});