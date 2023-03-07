const boardArray = new Array(9);

const displayTurn = (currentPlayer) => {
    console.log(currentPlayer)
    const display = document.querySelector('#turnDisplay')
    if(currentPlayer === 'X') {
        display.innerHTML = 'O turn'
     } else {
        display.innerHTML = 'X turn'
     } 
}

const displayScore = (player, score) => {
const xScore = document.querySelector('#xScore')
const oScore = document.querySelector('#oScore')
const tieScore = document.querySelector('#tieScore')

if(player === 'X'){
    xScore.innerHTML = score
} else if (player === 'O') {
    oScore.innerHTML = score
} else {
    tieScore.innerHTML = score
}
}

const displayWinner = (winner) => {
const messageBox = document.querySelector('#messageBox')
const playerName = document.querySelector('#playerName')
const messageWinner = document.querySelector('#messageWinner')
const nextTurnBtn = document.querySelector('#nextTurnBtn')

nextTurnBtn.addEventListener('click', function() {clearMessageBox()})

messageBox.style.display = 'block'
if (winner == 'tie'){
    playerName.innerHTML = "It's a tie!"
    messageWinner.innerHTML = ''
} else {
    playerName.innerHTML = winner
}
}

const clearMessageBox = () => {
    messageBox.style.display = 'none'
}

    export { boardArray, displayTurn, displayScore, displayWinner }