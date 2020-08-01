
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let human = 'O';
let ai = 'X';

let w;
let h;

function setup() {
    createCanvas(250, 250);

}

function draw() {
    w = width / 3;
    h = height / 3;
    strokeWeight(3);

    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            let x = w * i + w / 2;
            let y = h * j + h / 2;
            let r = w / 5;

            if (board[i][j] == human)
                ellipse(x, y, r * 3);
            else if (board[i][j] == ai) {
                line(x - r, y - r, x + r, y + r);
                line(x + r, y - r, x - r, y + r);
            }
        }
    }
     
    if (didPlayerWin() || didAiWin() || getAvailableCells() == 0){
        noLoop(); 
        let endText = createP('');
        endText.style('font-size', '32pt'); 
        if (didPlayerWin){
            endText.html('Player wins!');
        }
        else if (didAiWin){
            endText.html('AI wins!');
        }
        else
            endText.html('Tie!');
    }


    /*
    let result = checkWinner();
    console.log(result);  
    if (result != null){
        noLoop(); 
        let endText = createP('');
        endText.style('font-size', '32pt'); 
        if (result == human){
            endText.html('Player wins!');
        }
        else if (result == ai){
            endText.html('AI wins!');
        }
        else if (result == 'tie')
            endText.html('Tie!');
    }
    */
}

function mousePressed() {
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);

    if (board[i][j] == '') {
        board[i][j] = human;
    }
    bestMove();
}

function getAvailableCells() {
    let availableCells = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '')
                availableCells++;
        }
    }
    return availableCells;
}

function didPlayerWin() {
    if ((board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[1][1] == human) ||
        (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] == human))
        return true;

    for (let i = 0; i < 3; i++) {
        if ((board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][1] == human) ||
            (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[1][i] == human))
            return true;
    }
    return false;
}

function didAiWin() {
    if ((board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[1][1] == ai) ||
        (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[1][1] == ai))
        return true;

    for (let i = 0; i < 3; i++) {
        if ((board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][1] == ai) ||
            (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[1][i] == ai))
            return true;
    }
    return false;
}
/*

/*
function checkWinner() {
    let winner = null; 

    if ((board[0][0] == board[1][1] && board[1][1] == board[2][2]) ||
        (board[0][2] == board[1][1] && board[1][1] == board[2][0])) {
            winner = board[1][1]; 
        }
        
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
            winner = board[i][1];  
        }
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i]){
            winner = board[1][i]; 
        }
    }

    //check tie
    if (getAvailableCells() == 0)
        winner = 'tie'; 
        
    return winner; 

}
*/


