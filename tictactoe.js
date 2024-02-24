$(function() {
    let currentPlayer = 'X';
    let cells = $('.grid-cell');
    let gameOver = false;

    // Cell click
    cells.click(function() {
        if (gameOver) return;
        if ($(this).text() === '') {
            $(this).text(currentPlayer); 
            checkWin();
            togglePlayer();
        }
    });

    // Toggle player
    function togglePlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        $('#turnIndicator').text(`${currentPlayer}'s Turn`);
    }

    // Check for a win
    function checkWin(){
        const winningGames = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]
        ];

        for (let combo of winningGames) {
            const [a, b, c] = combo;
            if (cells.eq(a).text() && cells.eq(a).text() === cells.eq(b).text() && cells.eq(a).text() === cells.eq(c).text()) {
                gameOver = true;
                setTimeout(() => {
                    alert(`${currentPlayer} wins!`);
                }, 50);
            }
        }

        // Check for a tie
        if (!cells.toArray().some(cell => $(cell).text() === '') && !gameOver) {
            setTimeout(() => {
                alert("It's a tie!");
            }, 50);
        }
    }

    // Reset the game
    $('#resetButton').click(function(){
        cells.text('');
        currentPlayer = 'X';
        $('#turnIndicator').text("X's Turn");
        gameOver = false;
    });
});

