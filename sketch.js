
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let human = 'O';
let ai = 'X';
let currentPlayer = human;

let w;
let h;

function setup() {
    let cnv = createCanvas(390, 390);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background('#e0e0e0');

}

function draw() {

    
    w = 130;
    h = 130;
    strokeWeight(4);

    line(w, 0, w, h * 3);
    line(w * 2, 0, w * 2, h * 3);
    line(0, h, w * 3, h);
    line(0, h * 2, w * 3, h * 2);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            let x = w * i + w / 2;
            let y = h * j + h / 2;
            let r = w / 4;

            if (board[i][j] == human) {
                noFill();
                ellipse(x, y, r * 2);
            }
            else if (board[i][j] == ai) {

                line(x - r, y - r, x + r, y + r);
                line(x + r, y - r, x - r, y + r);
            }
        }
    }
    

   
    
    if (didPlayerWin() || didAiWin() || getAvailableCells() == 0) {
        noLoop();
        var x = (windowWidth - width) / 2;
        var y = ((windowHeight - height) / 2) - 100;
        let endText = createP('');
        endText.style('font-size', '32pt');
        endText.position(x, y ); 
        if (didPlayerWin()) {
            endText.html('Player wins!');
           
        }
        else if (didAiWin()) {
            endText.html('AI wins!');
           
        }
        else {
            endText.html('Tie!');
            
        }
        
    }

}

function resetBoard() {
      
}

function mousePressed() {
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);

    if (currentPlayer == human) {
        
        if (board[i][j] == '') {
            board[i][j] = human;
            currentPlayer = ai;
            setTimeout(bestMove, 400); 
        }
    }
    

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



