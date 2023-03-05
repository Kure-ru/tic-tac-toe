let turn = 0

const startGame = (player1, player2) => {
    turn = 0
    player1.score = 0
    player2.score = 0
}

const endGame = (condition) => {
    switch (condition) {
        case 'tie' :
            alert('its a tie')
            resetGame()
            break
        case 'X wins' :
            alert('Player 1 wins')
            resetGame()
            break
        case 'O wins':
            alert('Player 2 wins')
            resetGame()
            break
    }
}

const playRound = (cell) => {
    addTurn()
    if(turn === 9) {
        endGame('tie')
    }
    if (turn % 2 !== 0){
        cell.innerHTML = 'X'
        return 'X'
    }
    else {
        cell.innerHTML = 'O'
        return 'O'
    }
}

const addTurn = () => {
    turn++;
}


const resetGame = () => {
    window.location.reload();
}


export { playRound, startGame, endGame }