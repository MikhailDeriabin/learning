import styled from "styled-components"
import { Space, space as spaceSchema } from "../common"

type Props = {
    space?: Space
}
export const Layers = styled.div<Props>`
    display: grid;
    gap: ${({space}) => space ? spaceSchema[space] : spaceSchema[4]};
`;