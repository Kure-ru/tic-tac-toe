import { displayScore, displayTurn, displayWinner } from "./gameboard.js"
import { boardArray } from "./gameboard.js"
import { game } from "./gameState.js"
import { player1, player2 } from "./player.js"

let turn = 0

const startGame = () => {
    turn = 0
}

const endGame = (condition) => {
    switch (condition) {
        case 'tie' :
            displayWinner('tie')
            resetGame()
            game.ties++
            displayScore('tie', game.ties)
            break
        case 'X wins' :
            displayWinner(player1.name)
            resetGame()
            player1.score++
            displayScore('X', player1.score)
            break
        case 'O wins':
            displayWinner(player2.name)
            resetGame()
            player2.score++
            displayScore('O', player2.score)
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
        displayTurn('X')
        return 'X'
    }
    else {
        cell.innerHTML = 'O'
        displayTurn('O')
        return 'O'
    }
}

const addTurn = () => {
    turn++;
}


const resetGame = () => {
    turn = 0
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


export { playRound, startGame, endGame, resetGame }