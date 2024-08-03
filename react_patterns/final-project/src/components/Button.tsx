import styled from "styled-components"
import { border, color, ColorType, font, Position, Size, space } from "../common";
import { ButtonHTMLAttributes, ReactNode } from "react";

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
    size?: Size,
    type?: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert;
} & ButtonHTMLAttributes<HTMLButtonElement>
export const PrimaryButton = styled(Button)<PrimaryButtonProps>`
    ${({size}) => getPrimaryButtonSizeStyles(size ?? 'm')}

    ${({type: bgColor}) => getPrimaryButtonColorStyles(bgColor ?? ColorType.primary)}
`;

function getPrimaryButtonColorStyles(type: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert) {
    switch (type) {
        case ColorType.success:
            return `
                background-color: ${color.success[100]};
                color: ${color.text.normal};

                &:hover{
                    background-color: ${color.success[200]};
                }

                &:focus{
                    background-color: ${color.success[300]};
                }

                &:active{
                    background-color: ${color.success[300]};
                }
            `;
        case ColorType.error:
            return `
                background-color: ${color.error[100]};
                color: ${color.text.normal};

                &:hover{
                    background-color: ${color.error[200]};
                }

                &:focus{
                    background-color: ${color.error[300]};
                }

                &:active{
                    background-color: ${color.error[300]};
                }
            `;
        case ColorType.alert: 
            return `
                background-color: ${color.alert[100]};
                color: ${color.text.normal};

                &:hover{
                    background-color: ${color.alert[200]};
                }

                &:focus{
                    background-color: ${color.alert[300]};
                }

                &:active{
                    background-color: ${color.alert[300]};
                }
            `;
        default:
            return 
    }
}
function getPrimaryButtonSizeStyles(size: Size){
    switch (size) {
        case 's':
            return `
                padding: ${space[2]} ${space[4]};
                font-size: ${font.size[3]};
            `;
        case 'm':
            return `
                padding: ${space[3]} ${space[5]};
                font-size: ${font.size[4]};
            `;
        case 'l':
            return `
                padding: ${space[4]} ${space[6]};
                font-size: ${font.size[5]};
            `;
        default:
            break;
    }
}

const IconButtonWrapper = styled.div`
    > * {
        display: flex;
        align-items: center;
        gap: ${space[3]};
    }
`;
type IconButtonProps = {
    iconPath: string,
    iconPosition?: Position.left | Position.right,
    children?: ReactNode
} & PrimaryButtonProps;
export function IconButton(props: IconButtonProps) {
    const {iconPosition, iconPath, children, ...primaryButtonProps} = props;

    let button;
    if(iconPosition === Position.right)
        button = <PrimaryButton {...primaryButtonProps}>{children}<img src={iconPath}/></PrimaryButton>;
    else
        button = <PrimaryButton {...primaryButtonProps}><img src={iconPath}/>{children}</PrimaryButton>;

    return(
        <IconButtonWrapper>
            {button}
        </IconButtonWrapper>
    );
}