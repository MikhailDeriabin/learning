import styled from "styled-components"
import { alert, buttonMinSize, error, fontSize, neutral, primary, size, success, text } from "../utils";

type Props = {

}
export const Button = styled.button<Props>`
    background-color: ${primary[100]};

    border-radius: ${size.borderRadius};

    color: ${text.contrast};
    transition: background-color 0.3s linear, color 0.3 linear;
    cursor: pointer;

    &:hover{
        background-color: ${primary[200]};
    }

    &:focus{
        background-color: ${primary[100]};
    }

    &:active{
        background-color: ${primary[400]};
    }

    &:disabled{
        background-color: ${neutral[100]};
        color: ${text.text}
    }
`;

//Extend the base button
export const PrimaryButton = styled(Button)`
    min-width: ${buttonMinSize.mediumWidth};
    min-height: ${buttonMinSize.mediumHeight};

    font-size: ${fontSize.buttonMedium};

    &.small{
        min-width: ${buttonMinSize.smallWidth};
        min-height: ${buttonMinSize.smallHeight};

        font-size: ${fontSize.buttonSmall};
    }

    &.big{
        min-width: ${buttonMinSize.bigWidth};
        min-height: ${buttonMinSize.bigHeight};

        font-size: ${fontSize.buttonBig};
    }

    &.warning{
        background-color: ${alert[100]};
        color: ${text.text};

        &:hover{
            background-color: ${alert[200]};
        }

        &:focus{
            background-color: ${alert[300]};
        }

        &:active{
            background-color: ${alert[300]};
        }
    }

    &.risk{
        background-color: ${error[100]};
        color: ${text.text};

        &:hover{
            background-color: ${error[200]};
        }

        &:focus{
            background-color: ${error[300]};
        }

        &:active{
            background-color: ${error[300]};
        }
    }

    &.submit{
        background-color: ${success[100]};
        color: ${text.text};

        &:hover{
            background-color: ${success[200]};
        }

        &:focus{
            background-color: ${success[300]};
        }

        &:active{
            background-color: ${success[300]};
        }
    }
`;