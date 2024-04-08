import {Turn} from "../../types/Turn";

type LogProps = {
    turns: Turn[];
}

export default function Log({turns}: LogProps) {
    return(
        <ol id="log">
            {
                turns.map( turn =>
                    <li
                        key={turn.square.row+'-'+turn.square.column}
                    >
                        {turn.player}: {turn.square.row+1}-{turn.square.column+1}
                    </li>
                )
            }
        </ol>
    );
}