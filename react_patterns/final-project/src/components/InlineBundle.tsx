import styled from "styled-components"
import { space as spaceSchema, Space } from "../common";

type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between';
type Props = {
    space?: Space,
    justify?: Justify,
    align?: Justify
}
export const InlineBundle = styled.div<Props>`
    display: flex;
    flex-wrap: wrap;
    gap: ${({space}) => space ? spaceSchema[space] : 'auto'};
    justify-content: ${({justify}) => justify ?? 'flex-start'};
    align-items: ${({align}) => align ?? 'flex-start'};
`;