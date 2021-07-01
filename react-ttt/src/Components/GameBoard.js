import Square from "./Square";

function GameBoard() {
    return (
        <div>
            <h3>Tic-Tac-Toe</h3>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div>
              
        </div>
    )
}

export default GameBoard;