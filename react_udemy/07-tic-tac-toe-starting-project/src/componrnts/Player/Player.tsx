import {ChangeEvent, createElement, HTMLAttributes, useState} from "react";
import {PlayerType} from "../../types/PlayerType";

type PlayerProps = {
    name: string;
    symbol: PlayerType;
    isActive: boolean;
} & HTMLAttributes<HTMLElement>

export default function Player({name, symbol, isActive, ...props}: PlayerProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [playerName, setPlayerName] = useState<string>(name);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;
        if(newValue)
            setPlayerName(e.target.value);
    }

    return(
        <li className={ isActive ? 'active' : undefined } {...props}>
            <span className="player">
                {
                    !isEditing ?
                        <span className="player-name">{playerName}</span> :
                        <input type="text" value={playerName} placeholder="Joe" onChange={handleNameChange} required/>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : "Edit"}</button>
        </li>
    );
}