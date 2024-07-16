import { ReactNode, useState } from "react"
import { styled } from "styled-components";
import { ScrollableContainer } from "./DummyComponents";

const DynamicBlock = styled.div<{top: number, color: string}>`
  position: ${(props) => (props.top === 113 ? 'fixed' : 'absolute')};
  top: ${(props) => (props.top === 113 ? '0.2rem' : `${props.top}px`)};
  left: 1rem;
  background: ${(props) => props.color};
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function calculatePosition(scrollValue: number) {
  return 170 - scrollValue/2;
}
function calculateColor(position: number) {
  const normalizedPosition = Math.min(Math.max(position, 0), 255);
  return `rgb(${normalizedPosition}, ${255 - normalizedPosition}, 150)`;
}

type Props = {
    content: ReactNode
}
export default function DynamicScroll({ content }: Props) {
    const [position, setPosition] = useState<number>(170);
    
    function handleScroll(e: React.UIEvent<HTMLDivElement>) {
        const newPosition = calculatePosition(e.currentTarget.scrollTop);
        setPosition(Math.max(113, newPosition));
    }

    const blackColor = calculateColor(position);

    return(
        <ScrollableContainer onScroll={handleScroll}>
            <DynamicBlock top={position === 113 ? 113 : position} color={blackColor}>🛒</DynamicBlock>
            {content}
        </ScrollableContainer>
    );
}