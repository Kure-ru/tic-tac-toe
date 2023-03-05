//gameboard
import { boardArray } from "./gameboard.js";
import { playRound, startGame, endGame, resetGame } from "./gameFlow.js";
import { game } from "./gameState.js";


//event listener 
document.addEventListener('click', event => {
    const isCell = event.target.classList.contains('cell')
    const isEmpty = event.target.classList.contains('empty')

    if (isCell && isEmpty) {
        let symbol = playRound(event.target)
        event.target.classList.add(symbol)
        event.target.classList.remove('empty')
        boardArray[event.target.id] = symbol
        checkWin()
    }
})

//reset button
document.querySelector('#reset_btn').addEventListener('click', function(){
    resetGame()
})

startGame();


const checkWin = () => {
game.winningStates.map((winningState) => {
if(boardArray[winningState[0]] === 'X' && boardArray[winningState[1]] === 'X' && boardArray[winningState[2]] === 'X'){
    endGame('X wins')
} else if (boardArray[winningState[0]] === 'O' && boardArray[winningState[1]] === 'O' && boardArray[winningState[2]] === 'O'){
    endGame('O wins')
}})
}