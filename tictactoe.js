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

    const boardReset = () => {
        console.log('hit')
        board = Array.from({length: 3}, () => []);
        for(let i = 0; i < board.length; i++) {
            board[i] = Array.from({length: 3}, () => []);
        }
        console.log(board);
    }
    
    return {getBoard, setBoard, getBoardPost, boardReset};
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



const playGame = (play1, play2) => {
    //ask for the players name
    //should start with 9 rounds max
    //cannot go beyond 9
    //follow players input value on the board
    //logic to check if theres any value thats the same on all angles
    let testboard = Gameboard();
    let player1 = Player(play1, 'X');
    let player2 = Player(play2, 'O');
    /*
    Creates a dialog box to input the name of each player
    */
    let round = 1;
    let currentplayer = true;
    let winner;
    let clickedNewGame = true;
    //creating a 9x9 board visually through DOMs manipulation
    //Player 1 whoever it is goes first and ask
    let container1 = document.querySelector('#container');
    let container5 = document.querySelector('#container5');
    

    let player1display = document.createElement('div');
    let player2display = document.createElement('div');
    player1display.setAttribute("id", "p1display");
    player2display.setAttribute('id', "p2display");
    player1display.style.fontSize = "40px";
    player2display.style.fontSize = "40px";
    player1display.textContent = `${player1.name}: ${player1.score}`;
    player2display.textContent = `${player2.name}: ${player2.score}`;

    container5.appendChild(player1display);
    container5.appendChild(player2display);

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

    /*
    Creates the visuals of the 3 x 3 grid for a tic-tac-toe game
    */
    const createVisual = () => {
        for(let u = 1; u < 10; u++) {
            if(u <= 3) {
                let button = document.createElement('button');
                button.setAttribute('id', `button${u}`)
                button.className = 'buttonmark'
                button.style.width = '100px';
                button.style.height = '100px';
                button.style.fontSize = '80px';
                containertop.appendChild(button);
            } else if(u <= 6) {
                let button = document.createElement('button');
                button.setAttribute('id', `button${u}`)
                button.className = 'buttonmark'
                button.style.width = '100px';
                button.style.height = '100px';
                button.style.fontSize = '80px';
                containermid.appendChild(button);
            } else {
                let button = document.createElement('button');
                button.setAttribute('id', `button${u}`)
                button.className = 'buttonmark'
                button.style.width = '100px';
                button.style.height = '100px';
                button.style.fontSize = '80px';
                containerbot.appendChild(button);
            }
        }
    }

    /*
    Removes all the button in the 3 x 3 grid
    */
    const removeVisual = () => {
        while(containertop.lastElementChild) {
            containertop.removeChild(containertop.lastElementChild);
        }
        while(containermid.lastElementChild) {
            containermid.removeChild(containermid.lastElementChild);
        }
        while(containerbot.lastElementChild) {
            containerbot.removeChild(containerbot.lastElementChild);
        }
    }

    createVisual();

    /*
    Creates a message saying who is currently playing and
    what round is it currently at.
    */
    let message1 = document.createElement('div');
    message1.setAttribute('id', 'message1');
    message1.style.fontSize = '20px';
    message1.style.color = 'white';
    message1.textContent = `Currently it is ${player1.name}'s turn`
    let message2 = document.createElement('div');
    message2.setAttribute('id', 'message2');
    message2.style.fontSize = '20px';
    message2.style.color = 'white'
    message2.textContent = `ROUND ${round}`;


    container2.appendChild(message1);
    container3.appendChild(message2);

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
        containertop.addEventListener('click', (e) => {
            if(!clickedNewGame) {
                message1.textContent = "Current Game is over, please click the new game"
            } else {
                console.log(document.querySelectorAll('#button1'));
                let element = document.getElementById(`${this.document.activeElement.id}`);
                let value = coord[this.document.activeElement.id];
                let tempx = value[0];
                let tempy = value[1];
                
                console.log('This was clicked at', value);
                //currentplayer = false;
                /*
                Checks if the currentplayer is player1 or player2 using true/false to toggle.
                It will check where the current shape is and check to see if it has 3 in a row
                using the checkSquare method.
                */
                if(currentplayer) {
                    if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                        message1.textContent = 'That space is taken. Try again'
                    } else {
                        element.innerHTML = player1.shape;
                        testboard.setBoard(tempx, tempy, player1.shape)
                        let result = checkSquare(tempx, tempy, player1.shape, testboard);

                        if(result) {
                            winner = player1.name;
                        }

                        message1.textContent = `Currently it is ${player1.name}'s turn`
                        round++;
                        message2.textContent = `ROUND ${round}`;
                        currentplayer = false;
                    }
                    
                } else {
                    if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                        message1.textContent = 'That space is taken. Try Again';
                    } else {
                        element.innerHTML = player2.shape;

                        testboard.setBoard(tempx, tempy, player2.shape)
                        let result = checkSquare(tempx, tempy, player2.shape, testboard);

                        if(result) {
                            winner = player2.name;
                        }
                            

                        console.log(element.innerHTML);
                        message1.textContent = `Currently it is ${player2.name}'s turn`
                        round++;
                        message2.textContent = `ROUND ${round}`;
                        currentplayer = true;
                    }
                }

                if(winner) {
                    message1.textContent = `The winner is ${winner}`;
                    if(winner === player2.name) {
                        player2.score += 1;
                    } else {
                        player1.score += 1;
                    }
                    let nextgame = document.createElement('button');
                    nextgame.textContent = 'Next Game';
                    nextgame.style.gap = "10px";
                    nextgame.style.borderRadius = "20px";
                    nextgame.style.width = "80px"
                    nextgame.style.height = "30px"
                    nextgame.style.border = "none";
                    nextgame.style.backgroundColor = "cyan";
                    nextgame.addEventListener('click', () => {
                        clickedNewGame = true;
                        testboard.boardReset();
                        round = 0;
                        while(container4.lastElementChild) {
                            container4.removeChild(container4.lastElementChild);
                        }
                        //remove the buttons
                        removeVisual();
                        //readd the buttons
                        createVisual();
                        console.log(testboard.getBoard());
                        message1.textContent = `Currently it is ${player1.name}'s turn`;
                        round = 1;
                        count = 1;
                        winner = '';
                        message2.textContent =`ROUND ${round}`;
                        player1display.textContent = `${player1.name}: ${player1.score}`;
                        player2display.textContent = `${player2.name}: ${player2.score}`;
                    });
                    container4.appendChild(nextgame);
                    
                } else if(round > 9) {
                    clickedNewGame = true;
                    message1.textContent = 'It\'s a tie';
                    let nextgame = document.createElement('button');
                    nextgame.textContent = 'Next Game';
                    nextgame.style.gap = "10px";
                    nextgame.style.borderRadius = "20px";
                    nextgame.style.width = "80px"
                    nextgame.style.height = "30px"
                    nextgame.style.border = "none";
                    nextgame.style.backgroundColor = "cyan";
                    nextgame.addEventListener('click', () => {
                        testboard.boardReset();
                        round = 0;
                        while(container4.lastElementChild) {
                            container4.removeChild(container4.lastElementChild);
                        }
                        //remove the buttons
                        removeVisual();
                        //readd the buttons
                        createVisual();
                        console.log(testboard.getBoard());
                        message1.textContent = `Currently it is ${player1.name}'s turn`;
                        round = 1;
                        count = 1;
                        winner = '';
                        message2.textContent =`ROUND ${round}`;
                        console.log(player1.score);
                        console.log(player2.score);
                        player1display.textContent = `${player1.name}: ${player1.score}`;
                        player2display.textContent = `${player2.name}: ${player2.score}`;
                    });
                    container4.appendChild(nextgame);
                } else {
                    console.log(testboard.getBoard());
                }
            }
        });
        containermid.addEventListener('click', (e) => {
            if(!clickedNewGame) {
                message1.textContent = "Current Game is over, please click the new game"
            } else {
                console.log(document.querySelectorAll('#button1'));
                let element = document.getElementById(`${this.document.activeElement.id}`);
                let value = coord[this.document.activeElement.id];
                let tempx = value[0];
                let tempy = value[1];
                
                console.log('This was clicked at', value);
                //currentplayer = false;
                if(currentplayer) {
                    if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                        message1.textContent = 'That space is taken. Try again'
                    } else {
                        element.innerHTML = player1.shape;
                        testboard.setBoard(tempx, tempy, player1.shape)
                        let result = checkSquare(tempx, tempy, player1.shape, testboard);

                        if(result) {
                            winner = player1.name;
                        }

                        message1.textContent = `Currently it is ${player1.name}'s turn`
                        round++;
                        message2.textContent = `ROUND ${round}`;
                        currentplayer = false;
                    }
                    
                } else {
                    if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                        message1.textContent = 'That space is taken. Try Again';
                    } else {
                        element.innerHTML = player2.shape;

                        testboard.setBoard(tempx, tempy, player2.shape)
                        let result = checkSquare(tempx, tempy, player2.shape, testboard);

                        if(result) {
                            winner = player2.name;
                        }
                            

                        console.log(element.innerHTML);
                        message1.textContent = `Currently it is ${player2.name}'s turn`
                        round++;
                        message2.textContent = `ROUND ${round}`;
                        currentplayer = true;
                    }
                }

                if(winner) {
                    message1.textContent = `The winner is ${winner}`;
                    if(winner === player2.name) {
                        player2.score += 1;
                    } else {
                        player1.score += 1;
                    }
                    let nextgame = document.createElement('button');
                    nextgame.textContent = 'Next Game';
                    nextgame.style.gap = "10px";
                    nextgame.style.borderRadius = "20px";
                    nextgame.style.width = "80px"
                    nextgame.style.height = "30px"
                    nextgame.style.border = "none";
                    nextgame.style.backgroundColor = "cyan";
                    nextgame.addEventListener('click', () => {
                        clickedNewGame = true;
                        testboard.boardReset();
                        round = 0;
                        while(container4.lastElementChild) {
                            container4.removeChild(container4.lastElementChild);
                        }
                        //remove the buttons
                        removeVisual();
                        //readd the buttons
                        createVisual();
                        console.log(testboard.getBoard());
                        message1.textContent = `Currently it is ${player1.name}'s turn`;
                        round = 1;
                        count = 1;
                        winner = '';
                        message2.textContent =`ROUND ${round}`;
                        player1display.textContent = `${player1.name}: ${player1.score}`;
                        player2display.textContent = `${player2.name}: ${player2.score}`;
                    });
                    container4.appendChild(nextgame);
                    
                } else if(round > 9) {
                    message1.textContent = 'It\'s a tie';
                    let nextgame = document.createElement('button');
                    nextgame.textContent = 'Next Game';
                    nextgame.style.gap = "10px";
                    nextgame.style.borderRadius = "20px";
                    nextgame.style.width = "80px"
                    nextgame.style.height = "30px"
                    nextgame.style.border = "none";
                    nextgame.style.backgroundColor = "cyan";
                    nextgame.addEventListener('click', () => {
                        clickedNewGame = true;
                        testboard.boardReset();
                        round = 0;
                        while(container4.lastElementChild) {
                            container4.removeChild(container4.lastElementChild);
                        }
                        //remove the buttons
                        removeVisual();
                        //readd the buttons
                        createVisual();
                        console.log(testboard.getBoard());
                        message1.textContent = `Currently it is ${player1.name}'s turn`;
                        round = 1;
                        count = 1;
                        winner = '';
                        message2.textContent =`ROUND ${round}`;
                        console.log(player1.score);
                        console.log(player2.score);
                        player1display.textContent = `${player1.name}: ${player1.score}`;
                        player2display.textContent = `${player2.name}: ${player2.score}`;
                    });
                    container4.appendChild(nextgame);
                } else {
                    console.log(testboard.getBoard());
                }
            }
        });
        containerbot.addEventListener('click', (e) => {
            if(!clickedNewGame) {
                message1.textContent = "Current Game is over, please click the new game"
                
            } else {
            console.log(document.querySelectorAll('#button1'));
            let element = document.getElementById(`${this.document.activeElement.id}`);
            let value = coord[this.document.activeElement.id];
            let tempx = value[0];
            let tempy = value[1];
            
            console.log('This was clicked at', value);
            //currentplayer = false;
            if(currentplayer) {
                if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                    message1.textContent = 'That space is taken. Try again'
                } else {
                    element.innerHTML = player1.shape;
                    testboard.setBoard(tempx, tempy, player1.shape)
                    let result = checkSquare(tempx, tempy, player1.shape, testboard);

                    if(result) {
                        winner = player1.name;
                    }

                    message1.textContent = `Currently it is ${player1.name}'s turn`
                    round++;
                    message2.textContent = `ROUND ${round}`;
                    currentplayer = false;
                }
                
            } else {
                if(testboard.getBoardPost(tempx, tempy).length !== 0) {
                    message1.textContent = 'That space is taken. Try Again';
                } else {
                    element.innerHTML = player2.shape;

                    testboard.setBoard(tempx, tempy, player2.shape)
                    let result = checkSquare(tempx, tempy, player2.shape, testboard);

                    if(result) {
                        winner = player2.name;
                    }
                        
                    console.log(element.innerHTML);
                    message1.textContent = `Currently it is ${player2.name}'s turn`
                    round++;
                    message2.textContent = `ROUND ${round}`;
                    currentplayer = true;
                }
            }

            if(winner) {
                clickedNewGame = false;
                message1.textContent = `The winner is ${winner}`;
                if(winner === player2.name) {
                    player2.score += 1;
                } else {
                    player1.score += 1;
                }
                let nextgame = document.createElement('button');
                nextgame.textContent = 'Next Game';
                nextgame.style.gap = "10px";
                nextgame.style.borderRadius = "20px";
                nextgame.style.width = "80px"
                nextgame.style.height = "30px"
                nextgame.style.border = "none";
                nextgame.style.backgroundColor = "cyan";
                nextgame.addEventListener('click', () => {
                    clickedNewGame = true;
                    testboard.boardReset();
                    round = 0;
                    while(container4.lastElementChild) {
                        container4.removeChild(container4.lastElementChild);
                    }
                    //remove the buttons
                    removeVisual();
                    //readd the buttons
                    createVisual();
                    console.log(testboard.getBoard());
                    message1.textContent = `Currently it is ${player1.name}'s turn`;
                    round = 1;
                    count = 1;
                    winner = '';
                    message2.textContent =`ROUND ${round}`;
                    console.log(player1.score);
                    console.log(player2.score);
                    player1display.textContent = `${player1.name}: ${player1.score}`;
                    player2display.textContent = `${player2.name}: ${player2.score}`;
                });
                container4.appendChild(nextgame);
                
            } else if(round > 9) {
                clickedNewGame = false;
                message1.textContent = 'It\'s a tie';
                let nextgame = document.createElement('button');
                nextgame.textContent = 'Next Game';
                nextgame.style.gap = "10px";
                nextgame.style.borderRadius = "20px";
                nextgame.style.width = "80px"
                nextgame.style.height = "30px"
                nextgame.style.border = "none";
                nextgame.style.backgroundColor = "cyan";
                nextgame.addEventListener('click', () => {
                    clickedNewGame = true;
                    testboard.boardReset();
                    round = 0;
                    while(container4.lastElementChild) {
                        container4.removeChild(container4.lastElementChild);
                    }
                    //remove the buttons
                    removeVisual();
                    //readd the buttons
                    createVisual();
                    console.log(testboard.getBoard());
                    message1.textContent = `Currently it is ${player1.name}'s turn`;
                    round = 1;
                    count = 1;
                    winner = '';
                    message2.textContent =`ROUND ${round}`;
                    console.log(player1.score);
                    console.log(player2.score);
                    player1display.textContent = `${player1.name}: ${player1.score}`;
                    player2display.textContent = `${player2.name}: ${player2.score}`;
                });
                container4.appendChild(nextgame);
            } else {
                console.log(testboard.getBoard());
            }
        }
        });
    
}

let message = document.createElement('div');
message.setAttribute("id", "firstmessage");
message.textContent = "Welcome to the fun game of TTT!!!"

let message2 = document.createElement('div');
message2.textContent = "Please click the button to start playing"

let container2 = document.querySelector('#container2');
let container3 = document.querySelector('#container3');
let container4 = document.querySelector('#container4');
let buttonexample = document.querySelector("#buttonthing")

let button = document.createElement('button');
button.setAttribute('id', 'startbutton');
button.textContent = "Start";

button.addEventListener("click", () => {
    let player1;
    let player2;
    while(container2.lastElementChild) {
        container2.removeChild(container2.lastElementChild);
    }
    while(container3.lastElementChild) {
        container3.removeChild(container3.lastElementChild);
    }
    let aDialog = document.querySelector('dialog');
    aDialog.showModal();
    let aname1 = document.createElement('div');
    let aname2 = document.createElement('div');
    let writename1 = document.createElement('input');
    let writename2 = document.createElement('input');
    aname1.textContent = 'Player 1 name: ';
    aname2.textContent = 'Player 2 name: ';
    writename1.setAttribute('type', 'text');
    writename2.setAttribute('type', 'text');
    writename1.setAttribute('id', 'name1');
    writename2.setAttribute('id', 'name2');
    let submitbutton = document.createElement('button');
    submitbutton.textContent = 'Submit'
    

    aDialog.appendChild(aname1);
    aname1.appendChild(writename1);
    aDialog.appendChild(aname2);
    aname2.appendChild(writename2);
    aDialog.appendChild(submitbutton);
    submitbutton.addEventListener('click', () => {
        let play1 = document.getElementById('name1').value;
        let play2 = document.getElementById('name2').value;
        player1 = play1;
        player2 = play2;
        while(aDialog.lastElementChild) {
            aDialog.removeChild(aDialog.lastElementChild);
        }
        aDialog.close();
        playGame(player1, player2);
    })
    
 })

 container2.appendChild(message);
 message.appendChild(message2);
container3.appendChild(button);
 
