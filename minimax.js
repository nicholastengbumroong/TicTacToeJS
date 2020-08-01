

function bestMove() {
    let bestMove;
    let bestScore = -100;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                board[i][j] = ai;
                let score = minimax(false, -100, 100);
                board[i][j] = '';
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { i, j };
                }
            }
        }
    }
    board[bestMove.i][bestMove.j] = ai;
}

function minimax(isMaximizing, alpha, beta) {

    if (didPlayerWin())
        return -1;
    else if (didAiWin())
        return 1;
    else if (getAvailableCells() == 0)
        return 0;

    if (isMaximizing) {
        let bestScore = -100;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = ai;
                    let score = minimax(false, alpha, beta);
                    board[i][j] = '';
                    bestScore = Math.max(score, bestScore)
                    alpha = Math.max(alpha, bestScore);

                    if (beta <= alpha)
                        break;
                }
            }
        }
        return bestScore; 
    }
    else {
        let bestScore = 100;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    board[i][j] = human;
                    let score = minimax(true, alpha, beta);
                    board[i][j] = '';
                    bestScore = Math.min(score, bestScore)
                    beta = Math.min(beta, bestScore);

                    if (beta <= alpha)
                        break;
                }
            }
        }
        return bestScore; 
    }
}
