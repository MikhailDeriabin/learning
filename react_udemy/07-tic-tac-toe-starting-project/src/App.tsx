import Player from "./componrnts/Player/Player";
import GameBoard from "./componrnts/GameBoard/GameBoard";
import {useState} from "react";
import {PlayerType} from "./types/PlayerType";
import Log from "./componrnts/Log/Log";
import {Turn} from "./types/Turn";
import {AllowedValue, Grid} from "./types/Grid";
import {WINNING_COMBINATIONS} from "./winning-combinations";
import GameOver from "./componrnts/GameOver/GameOver";


const board: Grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function determineCurrentPlayer(turns: Turn[]): PlayerType {
    return turns[0] && turns[0].player === 'X' ? 'O' : 'X';
}

function App() {
    const [gameTurns, setGameTurns] = useState<Turn[]>([]);

    const currentPlayer = determineCurrentPlayer(gameTurns);

    function handleSelectSquare(row: number, column: number) {
        //Here we are computing needed values, because so we can have less different states
        //Also here since we need to store turns info for both GameBoard and Log components, we are having one shared
        setGameTurns(prevState => {
            let currentPlayer: PlayerType = determineCurrentPlayer(prevState);
            return [{square: {row, column}, player: currentPlayer }, ...prevState];
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    //Here we are computing needed property, again instead of using additional state
    const gameBoard = [...board.map(row => [...row] as AllowedValue[]) ] as Grid;
    for(const turn of gameTurns){
        const { row, column } = turn.square;
        gameBoard[row][column] = turn.player;
    }

    let winner = null;
    for (const combo of WINNING_COMBINATIONS){
        const first = gameBoard[combo[0].row][combo[0].column];
        const second = gameBoard[combo[1].row][combo[1].column];
        const third = gameBoard[combo[2].row][combo[2].column];

        if(first && first === second && first === third){
            winner = first;
        }
    }
    const isDraw = gameTurns.length === 9 && ! winner;


    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="Player 1" symbol="X" isActive={ currentPlayer === 'X' }/>
                    <Player name="Player 2" symbol="O" isActive={ currentPlayer === 'O' }/>
                </ol>
                {(winner||isDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
                <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
