import {Grid} from "../../types/Grid";


type GameBoardProps = {
    gameBoard: Grid;
    onSelectSquare: (row: number, column: number) => void;
}

export default function GameBoard({onSelectSquare, gameBoard}: GameBoardProps) {
    return(
        <ol id="game-board">
            {
                gameBoard.map(
                    (row, rowNum) =>
                        <li key={rowNum}>
                            <ol>
                                {
                                    row.map(
                                        (value, key) =>
                                            <li key={rowNum+'-'+key}>
                                                <button disabled={value !== null} onClick={() => onSelectSquare(rowNum, key)}>{value}</button>
                                            </li>
                                    )
                                }
                            </ol>
                        </li>
                )
            }
        </ol>
    );
}