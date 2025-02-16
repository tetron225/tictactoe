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
    //checks if count total 
    const checkCount = () => {
        if(count === 3) {
            isWinner = true;
        } else {
            count = 0;
        }
        return;
    }
    
    //Checks the left starting from where the shape was placed.
    const checkLeft = (x,y) => {
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
    
    //Checks the right starting from where the shape was placed.
    const checkRight = (x,y) => {
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
    
    //Checks the top starting from where the shape was placed.
    const checkTop = (x,y) => {
        if(x-1 < 0) {
            return;
        }
        while(x > 0) {
            if(board[x,y] === shape) {
                count++;
                x--;
            }
             else {
                break;
             }
        }
        return;
    }

    
    //Checks the bottom starting from where the shape was placed.
    const checkBottom = (x,y) => {
        if(x+1 > 2) {
            return;
        }
        while(x < 3) {
            if(board[x,y] === shape) {
                count++;
                x++;
            } else {
                break;
            }
        }
        return;
    }

    //Checks the top left starting from where the shape was placed.
    const checkTopLeft = (x,y) => {
        if(x-1 < 0 && y-1 < 0) {
            return;
        }
        while(x > 0 && y > 0) {
            if(board[x,y] === shape) {
                count++;
                x--;
                y--;
            } else {
                break;
            }
        }
        return;
    }

    //Checks the top right starting from where the shape was placed.
    const checkTopRight = (x,y) => {
        if(x-1 < 0 && y+1 > 2) {
            return;
        }
        while(x > 0 && y < 3) {
            if(board[x,y] === shape) {
                count++;
                x--;
                y++;
            } else {
                break;
            }
        }
        return;
    }

    //Checks the bottom left starting from where the shape was placed.
    const checkBottomLeft = (x,y) => {
        if(x+1 > 2 && y-1 < 0) {
            return;
        }
        while(x < 3 && y > 0) {
            if(board[x,y] === shape) {
                count++;
                x++;
                y--;
            }
            else {
                break;
            }
        }
        return;
    }

    //Checks the bottom right starting from where the shape was placed.
    const checkBottomRight = (x,y) => {
        if(x+1 > 2 && y+1 > 2) {
            return;
        }
        while(x < 3 && y < 3) {
            if(board[x,y] === shape) {
                count++;
                x++;
                y++;
            } else {
                break;
            }
        }
        return;
    }

    if(x % 2 !== y % 2) {
        checkTop(x,y);
        checkBottom(x,y)
        checkCount()
        if(isWinner) {
            //return some form of true that there is a winner
            return true;
        }
        checkLeft(x,y);
        checkRight(x,y);
        checkCount()
        if(isWinner) {
            //return some form of true
            return true;
        }
    } else {
        checkTop(x,y);
        checkBottom(x,y)
        checkCount();
        if(isWinner) {
            //return some form of true that there is a winner
            return true;
        }
        checkLeft(x,y);
        checkRight(x,y);
        checkCount();
        if(isWinner) {
            //return some form of true
            return true;
        }
        checkTopLeft(x,y);
        checkBottomLeft(x,y);
        checkCount();
        if(isWinner) {
            return true;
        }
        checkTopRight(x,y);
        checkBottomRight(x,y);
        checkCount();
        if(isWinner) {
            return true;
        }
    }

    return false;
}


const playGame = () => {
    //ask for the players name
    //should start with 9 rounds max
    //cannot go beyond 9
    //follow players input value on the board
    //logic to check if theres any value thats the same on all angles
    let player1 = Player('Sam', 'X');
    let player2 = Player('Dan', 'O');
    let round = 1;
    let currentplayer = player1;
    //creating a 9x9 board visually through DOMs manipulation
    //Player 1 whoever it is goes first and asks where he/she will place the shape
    //the shape should be a DOM manipulated container with 9 buttons.
    //depending on where the button is placed, it tells the location using a hash map
    
}

let somestuff = Gameboard();
somestuff.setBoard(1, 1, 'X');
console.log(somestuff.getBoard());
// let round = 1;
let player1 = new Player('Sam', 'X');
console.log(player1.piece);
let buttonexample = document.querySelector("#buttonthing")
// buttonexample.addEventListener("click", () => {
//     round++;
//     console.log(round)
// })
