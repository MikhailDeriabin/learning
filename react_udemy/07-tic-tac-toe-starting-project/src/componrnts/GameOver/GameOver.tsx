import {PlayerType} from "../../types/PlayerType";

type GameOverProps = {
    winner?: PlayerType;
    onRestart: () => void;
}

export default function GameOver({winner, onRestart}: GameOverProps) {
    return(
        <div id="game-over">
            <h2>Game over!</h2>
            {
                winner ?
                    <p>Winner is {winner}</p> :
                    <p>It is a draw game</p>
            }
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
        </div>
    );
}