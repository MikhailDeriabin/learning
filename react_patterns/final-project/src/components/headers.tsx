import styled from "styled-components";
import { color, ColorTheme, ColorType, font } from "../common";

type HeaderProps = {
    type?: ColorType.primary | ColorType.success | ColorType.error | ColorType.alert,
    theme?: ColorTheme
}
const Header = styled.h1<HeaderProps>`
    ${({theme, type}) => getHeaderColorStyles(theme ?? 'light', type ?? ColorType.primary)}
`
function getHeaderColorStyles(theme: ColorTheme, type: ColorType){
    const basicStyles = `
        font-weight: ${font.weight.bold};
    `;

    switch (type) {
        case ColorType.success:
            return basicStyles + `color: ${color.success[100]};`
        case ColorType.error:
            return basicStyles + `color: ${color.error[100]};`
        case ColorType.alert:
            return basicStyles + `color: ${color.alert[100]};`
        default:
           return basicStyles + theme === 'dark' ? `color: ${color.text.contrast};` : `color: ${color.text.normal};`
    }
}

type HeaderTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
const BaseHeader = (tag: HeaderTags) => styled(Header).attrs({ as: tag })``;

export const H1 = styled(BaseHeader('h1'))`
    font-size: ${font.size[9]};
`;

export const H2 = styled(BaseHeader('h2'))`
    font-size: ${font.size[8]};
`;

export const H3 = styled(BaseHeader('h3'))`
    font-size: ${font.size[7]};
`;

export const H4 = styled(BaseHeader('h4'))`
    font-size: ${font.size[6]};
`;

export const H5 = styled(BaseHeader('h5'))`
    font-size: ${font.size[5]};
`;

export const H6 = styled(BaseHeader('h6'))`
    font-size: ${font.size[4]};
`;