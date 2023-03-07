import { displayScore, displayTurn, displayWinner } from "./gameboard.js"
import { boardArray } from "./gameboard.js"
import { game } from "./gameState.js"
import { player1, player2 } from "./player.js"

const endGame = (condition) => {
    console.log(condition)
    switch (condition) {
        case 'X wins' :
            displayWinner(player1.name)
            resetGame()
            player1.score++
            displayScore('X', player1.score)
            break;
        case 'O wins':
            displayWinner(player2.name)
            resetGame()
            player2.score++
            displayScore('O', player2.score)
            break;
        default :
            displayWinner('tie')
            resetGame()
            game.ties++
            displayScore('tie', game.ties)
            break;
    }
}

const playRound = (cell) => {
    if (game.xTurn){
        cell.innerHTML = 'X'
        displayTurn('X')
        toggleTurn()
        return 'X'
    }
    else {
        cell.innerHTML = 'O'
        displayTurn('O')
        toggleTurn()
        return 'O'
    }
}

const toggleTurn = () => {
    game.xTurn = game.xTurn === true ? false : true
}

const resetGame = () => {
    //reset turn to X
    game.xTurn = true
    displayTurn('reset')
    //clean the board array
    for (let i = 0; i < boardArray.length; i++) {
        delete boardArray[i]
    }
    //clean the cells
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.classList.add('empty')
        cell.classList.remove('X')
        cell.classList.remove('O')
        cell.innerHTML = ''
    });
}


export { playRound, endGame, resetGame }