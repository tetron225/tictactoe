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
    let container1 = document.querySelector('#container');

    let containertop = document.createElement('div');
    containertop.setAttribute('id', 'containtop');
    containertop.style.display = "flex";
    containertop.style.justifyContent = "center";
    containertop.style.alignContent = "center";
    let containermid = document.createElement('div');
    containermid.setAttribute('id', 'containmid');
    containermid.style.display = "flex";
    containermid.style.justifyContent = "center";
    containermid.style.alignContent = "center";
    let containerbot = document.createElement('div');
    containerbot.setAttribute('id', 'containbot');
    containerbot.style.display = "flex";
    containerbot.style.justifyContent = "center";
    containerbot.style.alignContent = "center";
    containerbot.style.display = "flex";

    container1.appendChild(containertop);
    container1.appendChild(containermid);
    container1.appendChild(containerbot);

    for(let u = 1; u < 10; u++) {
        if(u <= 3) {
            let button = document.createElement('button');
            button.setAttribute('id', `button${u}`)
            button.className = 'buttonmark'
            button.style.width = '100px';
            button.style.height = '100px';
            containertop.appendChild(button);
        } else if(u <= 6) {
            let button = document.createElement('button');
            button.setAttribute('id', `button${u}`)
            button.className = 'buttonmark'
            button.style.width = '100px';
            button.style.height = '100px';
            containermid.appendChild(button);
        } else {
            let button = document.createElement('button');
            button.setAttribute('id', `button${u}`)
            button.className = 'buttonmark'
            button.style.width = '100px';
            button.style.height = '100px';
            containerbot.appendChild(button);
        }
    }

    //create an object list of where each button value represents on a x, y value
    let coord = {
        'button1': [0,0],
        'button2': [0,1],
        'button3': [0,2],
        'button4': [1,0],
        'button5': [1,1],
        'button6': [1,2],
        'button7': [2,0],
        'button8': [2,1],
        'button9': [2,2]
    }

        //creating an event delegation to listen in on an onclick event inside a div
        containertop.addEventListener('click', () => {
            console.log(this.document.activeElement.id);
            let value = coord[this.document.activeElement.id];
            console.log('This was clicked at', value);
        })
    
/*

    let button1 = document.createElement('button');
    button1.setAttribute('id', 'button1');
    button1.setAttribute('class', 'buttonmark');
    let button2 = document.createElement('button');
    button2.setAttribute('id', 'button2');
    button2.setAttribute('class', 'buttonmark');
    let button3 = document.createElement('button');
    button3.setAttribute('id', 'button3');
    button3.setAttribute('class', 'buttonmark');
    let button4 = document.createElement('button');
    button4.setAttribute('id', 'button4');
    button4.setAttribute('class', 'buttonmark');
    let button5 = document.createElement('button');
    button5.setAttribute('id', 'button5');
    button5.setAttribute('class', 'buttonmark');
    let button6 = document.createElement('button');
    button6.setAttribute('id', 'button6');
    button6.setAttribute('class', 'buttonmark');
    let button7 = document.createElement('button');
    button7.setAttribute('id', 'button7');
    button7.setAttribute('class', 'buttonmark');
    let button8 = document.createElement('button');
    button8.setAttribute('id', 'button8');
    button8.setAttribute('class', 'buttonmark');
    let button9 = document.createElement('button');
    button9.setAttribute('id', 'button9');
    button9.setAttribute('class', 'buttonmark');

    console.log('hit')
    
*/
    
    /*
    containertop.appendChild(button1);
    containertop.appendChild(button2);
    containertop.appendChild(button3);
    containermid.appendChild(button4);
    containermid.appendChild(button5);
    containermid.appendChild(button6);
    containerbot.appendChild(button7);
    containerbot.appendChild(button8);
    containerbot.appendChild(button9);
*/



    let somebutton = document.createElement('button');
    let container = document.querySelector('#container');
    somebutton.setAttribute('id', 'abutton');
    somebutton.textContent = 'TicTACToeMe';
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
    
}

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
    while(container2.lastElementChild) {
        container2.removeChild(container2.lastElementChild);
    }
    while(container3.lastElementChild) {
        container3.removeChild(container3.lastElementChild);
    }
     playGame();
 })

 container2.appendChild(message);
 message.appendChild(message2);
container3.appendChild(button);
 
