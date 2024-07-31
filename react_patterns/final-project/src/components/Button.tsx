import styled from "styled-components"
import { border, color, ColorType, font, Size } from "../common";

export const Button = styled.button`
    font-size: ${font.size[4]};
    font-weight: ${font.weight.normal};

    background-color: ${color.primary[100]};

    border-radius: ${border.radius.normal};

    color: ${color.text.contrast};
    transition: background-color 0.3s linear, color 0.3 linear;
    cursor: pointer;

    &:hover{
        background-color: ${color.primary[200]};
    }

    &:focus{
        background-color: ${color.primary[100]};
    }

    &:active{
        background-color: ${color.primary[400]};
    }

    &:disabled{
        background-color: ${color.neutral[100]};
        color: ${color.text.normal}
    }
`;

type PrimaryButtonProps = {
    size: Size,
    bgColor: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert;
}
export const PrimaryButton = styled(Button)<PrimaryButtonProps>`
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