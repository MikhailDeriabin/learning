import { Children, ReactNode } from "react"
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

type PanelProps = { flex: number }
const Panel = styled.div<PanelProps>`
    flex: ${p => p.flex};
`;

type Props = {
    children: ReactNode,
    leftWidth?: number,
    rightWidth?: number
}
//Left - what to display on the Left side, Right on the right
//width determines how much space does each component takes
export default function SplitScreen({ children, leftWidth=1, rightWidth=1 }: Props) {
    //Expecting 2 children inside the SplitScreen component
    let left, right;
    if(children && Array.isArray(children) && children.length === 2)
        [left, right] = children;
    else
        throw new Error('Please specify exactly 2 child components inside the SplitScreen');

    return(
        <Container>
            <Panel flex={leftWidth}>
                {left}
            </Panel>

            <Panel flex={rightWidth}>
                {right}
            </Panel>
        </Container>
    );
}