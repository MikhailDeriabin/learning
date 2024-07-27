import styled from "styled-components";
import { size, neutral, primary, text, fontSize } from "../utils";
import closeImg from '../assets/close-icon.svg'
import { ReactNode } from "react";

const Container = styled.div`
    position: relative;
    width: 700px;
    height: 400px;

    margin: auto;
    padding: 70px 40px;

    border: 2px ${primary[100]} solid;
    border-radius: ${size.borderRadius};
    background-color: ${neutral[0]};

    color: ${text.text};
`;

const ImageContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 40px;
    max-width: 50px;
    max-height: 50px;

    border: none;

    cursor: pointer;
    background: none;

    img{
        max-width: inherit;
    }
`;

const ContentContainer = styled.div<{image: string}>`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    height: 260px;

    .img{
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        background-image: url(${(p) => p.image});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    .text{
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .text-wrapper{
        display: flex;
        align-items: center;
        height: 100%;

        margin: 0 0 0 15px;
    }

    .text h3{
        color: ${text.text};
        font-weight: normal;
        font-size: ${fontSize.header2};
    }

    .buttons{
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }

    .buttons-wrapper{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: end;
        justify-content: end;
    }
`;

type Props = {
    label: ReactNode,
    image: string,
    actions?: ReactNode
}
const Modal = ({ label, image, actions }: Props) => {
    return(
        <Container>
            <ImageContainer>
                <img src={closeImg} alt="close" />
            </ImageContainer>
            <ContentContainer image={image}>
                <div className="img"></div>
                <div className="text">
                    <div className="text-wrapper">
                        {label}
                    </div>
                </div>
                <div className="buttons">
                    <div className="buttons-wrapper">
                        {actions}
                    </div>
                </div>
            </ContentContainer>
            
        </Container>
    );
}

export default Modal;