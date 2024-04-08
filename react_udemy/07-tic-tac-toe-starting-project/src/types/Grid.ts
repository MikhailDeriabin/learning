import {PlayerType} from "./PlayerType";

export type AllowedValue = PlayerType | null;
export type Row = [AllowedValue, AllowedValue, AllowedValue];
export type Grid = [Row, Row, Row];