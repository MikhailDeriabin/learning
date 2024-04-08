import {PlayerType} from "./PlayerType";

export type Turn = {
    square: { row: number, column: number };
    player: PlayerType;
}