import { ReactNode, useState } from "react";
import styled from "styled-components";

const ModalBG = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    overflow: auto;
    background-color: #00000070;
    width: 100%;
    height: 100%;
`;

const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background-color: wheat;
    width: 50%;
`;

type Props = {
    children: ReactNode
}
export default function Modal({ children }: Props) {
    const [isShown, setIsShown] = useState<boolean>(false);

    function handleShow() {
        setIsShown(true);
    }

    function handleHide() {
        setIsShown(false);
    }

    return(
        <>
        <button onClick={handleShow}>Show Modal</button>
            {isShown && 
                <ModalBG onClick={handleHide}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <button onClick={handleHide}>Hide Modal</button>
                        {children}
                    </ModalContent>
                </ModalBG>
            }
        </>
    );
}