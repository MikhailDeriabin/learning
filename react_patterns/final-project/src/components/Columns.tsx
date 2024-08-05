import styled from "styled-components"
import { Space, space as spaceSchema } from "../common";

type ColumnsProps = {
    columnCount?: number,
    space?: Space
}
export const Columns = styled.div<ColumnsProps>`
    --columns: ${({columnCount=1}) => columnCount};

    display: grid;
    gap: ${({space}) => space ? spaceSchema[space] : '0'};
    grid-template-columns: repeat(var(--columns), 1fr);
`;

type ColumnProps = {
    size?: number
}
export const ColumnsCell = styled.div<ColumnProps>`
    grid-column: span min(${({size=1}) => size}, var(--columns));
`;