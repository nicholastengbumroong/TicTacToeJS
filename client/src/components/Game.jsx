import {useState} from 'react'; 
import {Container, Row, Col} from 'react-bootstrap'
import '../css/Game.css'
import Board from './Board'


function calculateWinner(board) {
    // 0 1 2
    // 3 4 5
    // 6 7 8 
    const winCond  = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (let i = 0; i < winCond.length; i++) {
        const [a, b, c] = winCond[i];
        if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

function Game() {

    const [board, setBoard] = useState(Array(9).fill(null)); 
    const [playerTurn, setPlayerTurn] = useState(true);     
    //const [winner, setWinner] = useState(null); 

    const handleClick = (i) => {
        let newBoard = [...board];  
        newBoard[i] = (playerTurn) ? 'X' : 'O'; 

        setBoard(newBoard); 
        setPlayerTurn(!playerTurn); 
    }
    
    return (
        <Container className='d-flex flex-column justify-content-center vertical-center'>
            <Row className='m-0'>
                <h2>Winner: {calculateWinner(board)}</h2>
            </Row>
            <Row className='m-0'>
                <Board 
                    board={board}
                    onClick={(i) => handleClick(i)} 
                />
            </Row>  
        </Container>
    );
}

export default Game;