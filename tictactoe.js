/* 
    Creates a 9 x 9 tic tac toe board that has a getBoard method to return
    the board shape as well as a setBoard to set the Board
*/
function Gameboard() {
    let board = Array.from({length: 3}, () => []);
    for(let i = 0; i < board.length; i++) {
        board[i] = Array.from({length: 3}, () => []);
    }
    const getBoard = () => board;

    const getBoardPost = (x, y) => {
        return board[x][y];
    }
    const setBoard = (x, y, value) => {
        board[x][y] = value;
    }
    
    return {getBoard, setBoard, getBoardPost};
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
    let count = 1;
    //checks if count total 
    const checkCount = () => {
        console.log('This is a count', count)
        if(count < 3) {
            count = 1;
        } else {
            isWinner = true;
        }
        return;
    }
    
    //Checks the left starting from where the shape was placed.
    const checkLeft = (x,y) => {
        if(y-1 < 0) {
            return;
        }
        while(y-1 >= 0) {
            if(board.getBoardPost(x,y-1) === shape) {
                console.log(count);
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
        while(y+1 < 3) {
            if(board.getBoardPost(x,y+1) === shape) {
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
        while(x-1 >= 0) {
            if(board.getBoardPost(x-1,y) === shape) {
                count++;
                console.log(board.getBoard());
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
        while(x+1 < 3) {
            if(board.getBoardPost(x+1,y) === shape) {
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
        while(x-1 >= 0 && y-1 >= 0) {
            if(board.getBoardPost(x-1,y-1) === shape) {
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
        while(x-1 >= 0 && y+1 < 3) {
            if(board.getBoardPost(x-1,y+1) === shape) {
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
        while(x+1 < 3 && y-1 >= 0) {
            if(board.getBoardPost(x+1,y-1) === shape) {
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
        while(x+1 < 3 && y+1 < 3) {
            if(board.getBoardPost(x+1,y+1) === shape) {
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
    count = 0;
    return false;
}


const playGame = () => {
    //ask for the players name
    //should start with 9 rounds max
    //cannot go beyond 9
    //follow players input value on the board
    //logic to check if theres any value thats the same on all angles
    let testboard = Gameboard();
    let player1 = Player('Sam', 'X');
    let player2 = Player('Dan', 'O');
    let round = 1;
    let currentplayer = true;
    let winner;
    //creating a 9x9 board visually through DOMs manipulation
    //Player 1 whoever it is goes first and ask
    let somebutton = document.createElement('button');
    let container = document.querySelector('#container');
    somebutton.setAttribute('id', 'abutton');
    somebutton.textContent = 'Start';
    somebutton.addEventListener('click', (e) => {
        let tempx = Math.floor(Math.random() * 3);
        let tempy = Math.floor(Math.random() * 3);
        console.log("This is round", round)
        if(currentplayer) {
            //quick test on logic
            console.log("This is X");
            if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                console.log(testboard.getBoardPost(tempx, tempy))
                console.log(tempx, tempy)
                console.log('that space is taken');
            } else {
                console.log(tempx, tempy);
                testboard.setBoard(tempx, tempy, player1.shape);
                let result = checkSquare(tempx, tempy, player1.shape, testboard);
                if(result) {
                    winner = player1.name;
                }
                round++;
                currentplayer = false;
            }
        } else {
            console.log("This is O")
            if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                console.log(tempx, tempy)
                console.log('that space is taken');
            } else {
                console.log(tempx, tempy);
                testboard.setBoard(tempx, tempy, player2.shape);
                let result = checkSquare(tempx, tempy, player2.shape, testboard);
                if(result) {
                    winner = player2.name;
                }
                round++;
                currentplayer = true;
            }
        }
        
        if(winner) {
            console.log("The winner is", winner);
            console.log(testboard.getBoard())
        } else if(round > 9) {
            console.log("Its a tie");
        } else {
            console.log('continue')
            console.log(testboard.getBoard());
        }
        
    });
    container.appendChild(somebutton);
    
/*
    while(round <= 9) {
        let tempx = Math.floor(Math.random() * 2);
        let tempy = Math.floor(Math.random() * 2);
        let tempboard = testboard.getBoard()
        if(currentplayer) {
            //quick test on logic
            if(tempboard[tempx][tempy] === 'X' || tempboard[tempx][tempy] === 'O') {
                continue;
            }
            testboard.setBoard(tempx, tempy, player1.shape);
            let result = checkSquare(tempx, tempy, player1.shape, tempboard);
            if(result) {
                winner = player1.name;
                break;
            }
            round++;
            currentplayer = false;
        } else {
            if(tempboard[tempx][tempy] === 'X' || tempboard[tempx][tempy] === 'O') {
                continue;
            }
            testboard.setBoard(tempx, tempy, player1.shape);
            let result = checkSquare(tempx, tempy, player2.shape, tempboard);
            if(result) {
                winner = player2.name;
                break;
            }
            round++;
            currentplayer = true;
        }
    }
        */
}
/*

let somestuff = Gameboard();
console.log('hit3')
console.log(somestuff.getBoardPost(1, 0))
somestuff.setBoard(0, 0, 'X');
console.log(somestuff.getBoard())
// let round = 1;
let player1 = new Player('Sam', 'X');
console.log(player1.shape) */
let message = document.createElement('div');
message.setAttribute("id", "firstmessage");
message.textContent = "Welcome to the fun game of TTT!!!"
let message2 = document.createElement('div');
message2.textContent = "Please click the button to start playing"
let container2 = document.querySelector('#container2');
let container3 = document.querySelector('#container3');
let buttonexample = document.querySelector("#buttonthing")
let button = document.createElement('button');
button.setAttribute('id', 'startbutton');
button.textContent = "Start";

button.addEventListener("click", () => {
     playGame();
 })

 container2.appendChild(message);
 message.appendChild(message2);
container3.appendChild(button);
 
