class Player {
    constructor(name, symbol, score) {
        this.name = name;
        this.symbol = symbol,
        this.score = 0,
        this.cells = []
    }
}

const player1 = new Player('player 1', 'X', 0)
const player2 = new Player('player 2', 'O', 0)

export {player1, player2}

