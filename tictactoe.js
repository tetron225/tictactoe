/* 
    Creates a 9 x 9 tic tac toe board that has a getBoard method to return
    the board shape as well as a setBoard to set the Board
*/
function Gameboard() {
    let board = new Array(3);
    for(let i = 0; i < board.length; i++) {
        board[i] = new Array(3);
    }
    const getBoard = () => board;
    const setBoard = (x, y, value) => board[x,y] = value;
    
    return {getBoard, setBoard};
}

/*
    Creates a player with the name, the choice piece that they use and counts the score
*/

function Player(name, choice) {
    this.name = name;
    this.piece = choice;
    this.score = 0;
}
/*
    Checks the logic to see whether the current marked position of the value matches 
    vertical, horizontal and diagonal areas.
    If there is such a mark and if matches 3 times, we consider that a winner
*/
const checkSquare = (x,y) => {
    let isWinner = false;

    return isWinner;
}

const playGame = () => {
    //ask for the players name
    //should start with 9 rounds max
    //cannot go beyond 9
    //follow players input value on the board
    //logic to check if theres any value thats the same on all angles
}

let somestuff = Gameboard();
somestuff.setBoard(1, 1, 'X');
let name = prompt("Whats your name");
console.log(somestuff.getBoard());

let player1 = new Player('Sam', 'X');
console.log(player1.piece);