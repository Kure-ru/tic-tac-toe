const boardArray = new Array(9);

const render = () => {
    console.log('rendering...')
    let xCells = []
    let oCells = []
boardArray.forEach((cell, index) => {

    if (cell === 'X'){
            xCells.push(index)
        }
        else { 
            oCells.push(index) 
        }
        
 })
 return { xCells, oCells}
    
}
    export {boardArray, render}