//your JS code here. If required.
let player1 = '';
let player2 = '';
let currentPlayer = '';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;

// Handle Start Game button click
document.getElementById('submit').addEventListener('click', function() {
    player1 = document.getElementById('player-1').value;
    player2 = document.getElementById('player-2').value;
    
    if (player1 && player2) {
        document.getElementById('player-names').style.display = 'none';
        document.getElementById('game-board').style.display = 'block';
        
        // Initialize the game
        currentPlayer = player1;
        updateMessage();
    }
});

// Handle player cell click
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        if (gameBoard[cell.id - 1] === '' && gameActive) {
            gameBoard[cell.id - 1] = currentPlayer === player1 ? 'X' : 'O';
            cell.innerHTML = gameBoard[cell.id - 1];
            cell.classList.add('taken');
            
            if (checkWinner()) {
                document.querySelector('.message').innerHTML = `${currentPlayer}, congratulations you won!`;
                document.querySelector('.message').classList.add('winner');
                gameActive = false;
            } else if (gameBoard.every(cell => cell !== '')) {
                document.querySelector('.message').innerHTML = 'It\'s a draw!';
                gameActive = false;
            } else {
                // Switch turn
                currentPlayer = currentPlayer === player1 ? player2 : player1;
                updateMessage();
            }
        }
    });
});

// Update message to show whose turn it is
function updateMessage() {
    document.querySelector('.message').innerHTML = `${currentPlayer}, you're up!`;
}

// Check if there's a winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];
    
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}
