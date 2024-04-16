const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) { // Corrected loop condition
        const winCondition = winConditions[i];
        const a = gameState[winCondition[0]];
        const b = gameState[winCondition[1]];
        const c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `Player ${currentPlayer} wins!`; // Corrected string interpolation
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusDisplay.innerHTML = 'It\'s a draw!';
        gameActive = false;
        return;
    }

    changePlayer();
}

function makeMove(cellIndex) {
    if (gameState[cellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[cellIndex] = currentPlayer;
    cells[cellIndex].innerHTML = currentPlayer;

    handleResultValidation();
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.innerHTML = '';
    cells.forEach(cell => cell.innerHTML = '');
}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
