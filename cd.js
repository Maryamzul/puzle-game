// script.js
let score = 0;
let timer;
let timeLeft = 15;
let isGameActive = false;

function startGame() {
    score = 0;
    timeLeft = 15;
    isGameActive = true;
    document.getElementById('score').textContent = 'Score: ' + score;
    document.getElementById('gameStatus').textContent = '';
    document.getElementById('timer').textContent = 'Time: ' + timeLeft;
    document.getElementById('clickButton').disabled = false;

    // Disable the start button to prevent starting multiple games
    document.getElementById('startButton').disabled = true;

    // Start the countdown timer
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = 'Time: ' + timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function incrementScore() {
    if (isGameActive) {
        score++;
        document.getElementById('score').textContent = 'Score: ' + score;
    }
}

function endGame() {
    isGameActive = false;
    document.getElementById('clickButton').disabled = true;
    document.getElementById('gameStatus').textContent = 'Game Over! Your Final Score is : ' + score;
    document.getElementById('startButton').disabled = false;
}