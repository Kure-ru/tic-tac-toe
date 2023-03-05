//gameboard
import Player from "./player.js";
import { boardArray, render } from "./gameboard.js";
import { playRound, startGame, endGame } from "./gameFlow.js";
import { game } from "./gameState.js";

const player1 = new Player('player 1', 'X', 0)
const player2 = new Player('player 2', 'O', 0)


//event listener 
document.addEventListener('click', event => {
    const isCell = event.target.classList.contains('cell')
    const isEmpty = event.target.classList.contains('empty')

    if (isCell && isEmpty) {
        let symbol = playRound(event.target)
        event.target.classList.add(symbol)
        event.target.classList.remove('empty')
        boardArray[event.target.id] = symbol
        render()
        checkWin()
    }
})

startGame(player1, player2);


const checkWin = () => {
game.winningStates.map((winningState) => {
    console.log(boardArray[winningState[0]])
if(boardArray[winningState[0]] === 'X' && boardArray[winningState[1]] === 'X' && boardArray[winningState[2]] === 'X'){
    endGame('X wins')
} else if (boardArray[winningState[0]] === 'O' && boardArray[winningState[1]] === 'O' && boardArray[winningState[2]] === 'O'){
    endGame('O wins')
}})
}