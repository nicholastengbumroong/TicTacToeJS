import Square from './Square';
import {Container, Row, Col} from 'react-bootstrap'

function Board(props) {

    const renderSquare = (i) => {
        return (
            <Square 
                value={props.board[i]}
                onClick={() => props.onClick(i)}
            />
        )
    }

    return (
        <Container>
            <Row className='m-0'>
                <Col className='p-0'>{renderSquare(0)}</Col>
                <Col className='p-0'>{renderSquare(1)}</Col>  
                <Col className='p-0'>{renderSquare(2)}</Col> 
            </Row>
            <Row className='m-0'>
                <Col className='p-0'>{renderSquare(3)}</Col>
                <Col className='p-0'>{renderSquare(4)}</Col>
                <Col className='p-0'>{renderSquare(5)}</Col>
            </Row>
            <Row className='m-0'>
                <Col className='p-0'>{renderSquare(6)}</Col>
                <Col className='p-0'>{renderSquare(7)}</Col>
                <Col className='p-0'>{renderSquare(8)}</Col>
            </Row>
        </Container>
    );
}

export default Board;