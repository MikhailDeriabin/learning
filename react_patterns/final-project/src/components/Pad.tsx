import styled from "styled-components";
import { space, Space } from "../common";

type Props = {
    padding?: Space | Space[]
}
export const Pad = styled.div<Props>`
    padding: ${({padding}) => {
        if(!padding)
            return 'inherit';

        const paddings = (typeof padding === 'number' ? [padding] : padding) as Space[];
        return paddings.map((p) => space[p]).join(' ');
    }}
`;