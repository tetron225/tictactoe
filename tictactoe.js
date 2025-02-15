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

function Player(name, shape) {
    let score = 0;
    return {name, shape, score};
}
/*
    Checks the logic to see whether the current marked position of the value matches 
    vertical, horizontal and diagonal areas.
    If there is such a mark and if matches 3 times, we consider that a winner
*/
const checkSquare = (x,y,shape, board) => {
    let isWinner = false;
    let count = 0;
    const checkLeft = (x,y) => {
        if(count === 3) {
            isWinner = true;
            return;
        }
        if(y-1 < 0) {
            return;
        }
        while(y > 0) {
            if(board[x, y] === shape) {
                count++;
                y--;
            }
            else {
                break;
            }
        }
        return;
    }
    const checkRight = (x,y) => {
        if(count === 3) {
            isWinner = true;
            return;
        }
        if(y+1 > 2) {
            return;
        }
        while(y < 3) {
            if(board[x,y] === shape) {
                count++;
                y++;
            }
            else {
                break;
            }
        }
        return;
    }
    const checkTop = (x,y) => {
        if(count === 3) {
            isWinner = true;
            return;
        }
        if(x-1 < 0) {
            return;
        }
    }


    return;
}


const playGame = () => {
    //ask for the players name
    //should start with 9 rounds max
    //cannot go beyond 9
    //follow players input value on the board
    //logic to check if theres any value thats the same on all angles
    let player1 = Player('Sam', 'X');
    let player2 = Player('Dan', 'O');
    let round = 0;

}

let somestuff = Gameboard();
somestuff.setBoard(1, 1, 'X');
let name = prompt("Whats your name");
console.log(somestuff.getBoard());

let player1 = new Player('Sam', 'X');
console.log(player1.piece);
playGame();
