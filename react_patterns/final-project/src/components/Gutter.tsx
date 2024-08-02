import styled from "styled-components"
import { space, Space } from "../common"

type Props = {
    size?: Space
}
export const Layers = styled.div<Props>`
    display: grid;
    gap: ${({size}) => size ? space[size] : space[3]};
`;