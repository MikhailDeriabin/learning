import styled, { CSSProperties } from "styled-components"
import { border, color, ColorTheme, ColorType, font, Size, space } from "../common";
import { Children, cloneElement, InputHTMLAttributes, isValidElement, ReactElement, ReactNode } from "react";
import { Layers } from "./Gutter";


const InputField = styled.input`
    font-size: ${font.size[3]};
    font-weight: ${font.weight.normal};

    background-color: ${color.neutral[0]};

    border-radius: ${border.radius.normal};
    border: ${border.width[1]} solid ${color.neutral[600]};

    color: ${color.text.normal};
    transition: background-color 0.3s linear, color 0.3 linear;

    &:hover{
        background-color: ${color.neutral[100]};
    }

    &:focus{
        background-color: ${color.neutral[0]};
    }

    &:active{
        background-color: ${color.neutral[200]};
    }

    &:disabled{
        background-color: ${color.neutral[200]};
        color: ${color.text.normal}
    }
`; 

type PrimaryInputFieldProps = {
    size?: Size,
    type?: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert,
    theme?: ColorTheme
} & InputHTMLAttributes<HTMLInputElement>;
const PrimaryInputField = styled(InputField)<PrimaryInputFieldProps>`
    ${({size}) => getPrimaryInputFieldStyles(size ?? 'm')}

    ${({type, theme}) => getPrimaryInputFieldColorStyles(type ?? ColorType.primary, theme ?? 'light')}
`;

function getPrimaryInputFieldColorStyles(colorSchema: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert, theme: ColorTheme) {
    let styles = '';

    if(theme === 'dark'){
        styles = `
            --bg-color: ${color.neutral[300]};
            background-color: var(--bg-color);
            color: ${color.text.contrast};
            border-color: var(--bg-color);

            &:hover{
                background-color: ${color.neutral[200]};
            }
            &:focus{
                background-color: var(--bg-color);
            }
            &:active{
                background-color: ${color.neutral[100]};
            }   
        `;
    }

    switch (colorSchema) {
        case ColorType.success:
            return styles + `
                border-color: ${color.success[100]};

                &:hover{
                    background-color: ${color.success[200]};
                }

                &:active{
                    background-color: ${color.success[300]};
                }
            `;
        case ColorType.error:
            return styles + `
                border-color: ${color.error[100]};

                &:hover{
                    background-color: ${color.error[200]};
                }

                &:active{
                    background-color: ${color.error[300]};
                }
            `;
        case ColorType.alert: 
            return styles + `
                border-color: ${color.alert[100]};

                &:hover{
                    background-color: ${color.alert[200]};
                }

                &:active{
                    background-color: ${color.alert[300]};
                }
            `;
        default:
            return styles;
    }
}
function getPrimaryInputFieldStyles(size: Size){
    switch (size) {
        case 's':
            return `
                padding: ${space[1]} ${space[3]};
                font-size: ${font.size[3]};
            `;
        case 'm':
            return `
                padding: ${space[2]} ${space[4]};
                font-size: ${font.size[4]};
            `;
        case 'l':
            return `
                padding: ${space[3]} ${space[5]};
                font-size: ${font.size[5]};
            `;
        default:
            break;
    }
}

type InputLabelProps = {
    size?: Size,
    type?: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert,
    theme?: ColorTheme
}
const InputLabel = styled.label<InputLabelProps>`
    ${({size}) => getInputLabelStyles(size ?? 'm')}
    ${({type, theme}) => getInputLabelColorStyles(type ?? ColorType.primary, theme ?? 'light')}
`;

function getInputLabelColorStyles(colorSchema: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert, theme: ColorTheme) {
    switch (colorSchema) {
        case ColorType.success:
            return `color: ${color.success[300]}`;
        case ColorType.error:
            return `color: ${color.error[300]}`;
        case ColorType.alert: 
            return `color: ${color.alert[300]}`;
        default:
            const fontColor = theme === 'light' ? color.text.normal : color.text.contrast;
            return `color: ${fontColor}`;
    }
}
function getInputLabelStyles(size: Size){
    switch (size) {
        case 's':
            return `
                font-size: ${font.size[3]};
            `;
        case 'm':
            return `
                font-size: ${font.size[4]};
            `;
        case 'l':
            return `
                font-size: ${font.size[5]};
            `;
        default:
            break;
    }
}

type InputInfoProps = {
    size?: Size,
    type?: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert,
    theme?: ColorTheme
}
const InputInfo = styled.span<InputInfoProps>`
    ${({size}) => getInputInfoStyles(size ?? 'm')}
    ${({type, theme}) => getInputInfoColorStyles(type ?? ColorType.primary, theme ?? 'light')}
`;

function getInputInfoColorStyles(colorSchema: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert, theme: ColorTheme) {
    switch (colorSchema) {
        case ColorType.success:
            return `color: ${color.success[300]}`;
        case ColorType.error:
            return `color: ${color.error[300]}`;
        case ColorType.alert: 
            return `color: ${color.alert[300]}`;
        default:
            const fontColor = theme === 'light' ? color.text.normal : color.text.contrast;
            return `color: ${fontColor}`;
    }
}
function getInputInfoStyles(size: Size){
    switch (size) {
        case 's':
            return `
                font-size: ${font.size[2]};
            `;
        case 'm':
            return `
                font-size: ${font.size[3]};
            `;
        case 'l':
            return `
                font-size: ${font.size[4]};
            `;
        default:
            break;
    }
}

type InputCompoundProps = {
    size?: Size,
    type?: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert,
    theme?: ColorTheme,
    children?: ReactNode,
    style?: CSSProperties 
};
const InputCompound = function({size, type, theme, children, ...props}: InputCompoundProps){
    return(
        <div {...props}>
            {Children.map(children, child => {
                if(!isValidElement(child))
                    return child;

                return cloneElement(child as ReactElement<any>, { size: size ?? 'm', type: type ?? ColorType.primary, theme: theme ?? 'light' });
            })}
        </div>
    );
}

type TInputCompound = typeof InputCompound & {
    Label: typeof InputLabel,
    Field: typeof PrimaryInputField,
    Info: typeof InputInfo
};
const Input = InputCompound as TInputCompound;

Input.Label = InputLabel;
Input.Field = PrimaryInputField;
Input.Info = InputInfo;
  
export default Input;