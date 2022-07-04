import '../css/Square.css';

function Square(props) {    
    return (
        <div>
            <button className='btn-lg w-100 min-wh' onClick={props.onClick}>
                {props.value}
            </button>
        </div>
        
    );
}

export default Square; 