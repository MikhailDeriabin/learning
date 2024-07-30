import styled from "styled-components";
import Card from "./card";
import { Gutter, spaceSchema } from "../../common/spaces";

//This Grid pattern allow you to specify the size of one column in the grid
//So if there the size is 200px and screen size is 250px => there will be only one column, but 
//if the screen size is 500px => 2 columns will fit and the grid will have two columns
type GridProps = {
    gutter?: Gutter,
    columnSize?: string
}
export const Grid = styled.div<GridProps>`
    display: grid;
    gap: ${({gutter}) => gutter ? spaceSchema[gutter] : spaceSchema.l};
    //minmax is saying to browser the min width of a column and max width of it
    //min function tells that if the size of the screen is less than the specified columnSize or 200px, just set max as 100% of this screen size
    grid-template-columns: repeat(auto-fit, minmax(min(${({columnSize}) => columnSize ?? '200px'}, 100%), 1fr));
`;

export default function GridCards() {
    return(
        <Grid columnSize="300px" gutter="s">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
    );
}