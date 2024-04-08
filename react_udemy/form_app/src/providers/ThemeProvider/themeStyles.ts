import styled, { css } from 'styled-components';
import {Theme} from "./themes";

export const containerStyles = css<{ theme: Theme }>`
    ${
        ({ theme }) => `    
                margin: 0 auto;
                padding: ${theme.spacing.large};
                
                background-color: ${theme.colors.background};
                color: ${theme.colors.text};
                font-size: ${theme.fonts.sizes.medium};
                font-family: ${theme.fonts.family};
        `}
`;
export const DefaultContainer = styled.div<{ theme: Theme }>`${ containerStyles }`;

export const buttonStyles = css<{ theme: Theme }>`
    ${
        ({ theme }) => `
            max-width: ${theme.widths.button};
            height: ${theme.heights.button};
            background-color: ${theme.colors.button.background};
            color: ${theme.colors.button.text};
            font-size: ${theme.fonts.sizes.medium};
            font-family: ${theme.fonts.family};
            padding: ${theme.paddings.button.t} ${theme.paddings.button.r} ${theme.paddings.button.b} ${theme.paddings.button.l};
            border: ${theme.borders.width} solid ${theme.colors.border};
            border-radius: ${theme.borders.radius};
            
            &:hover {
              background-color: ${theme.colors.input.hover.background};
              color: ${theme.colors.input.hover.text};
            }
    `}
`;
export const DefaultButton = styled.button<{ theme: Theme }>`${ buttonStyles }`;

export const inputStyles = css<{ theme: Theme }>`
    ${
        ({ theme }) => `
            max-width: ${theme.widths.input};
            height: ${theme.heights.input};
            background-color: ${theme.colors.input.background};
            color: ${theme.colors.input.text};
            font-size: ${theme.fonts.sizes.medium};
            font-family: ${theme.fonts.family};
            padding: ${theme.paddings.input.t} ${theme.paddings.input.r} ${theme.paddings.input.b} ${theme.paddings.input.l};
            border: ${theme.borders.width} solid ${theme.colors.border};
            border-radius: ${theme.borders.radius};
            
            &:hover {
              background-color: ${theme.colors.input.hover.background};
              color: ${theme.colors.input.hover.text};
            }
            
            &:hover::placeholder {
              opacity: 1;
            }
    `}
`;

export const selectStyles = css<{ theme: Theme }>`
    ${
    ({ theme }) => `
            max-width: ${theme.widths.input};
            height: ${theme.heights.input};
            background-color: ${theme.colors.select.background};
            color: ${theme.colors.select.text};
            font-size: ${theme.fonts.sizes.medium};
            font-family: ${theme.fonts.family};
            padding: ${theme.paddings.input.t} ${theme.paddings.input.r} ${theme.paddings.input.b} ${theme.paddings.input.l};
            border: ${theme.borders.width} solid ${theme.colors.border};
            border-radius: ${theme.borders.radius};
            
            &:hover {
              background-color: ${theme.colors.select.hover.background};
              color: ${theme.colors.select.hover.text};
            }
            
            &:focus {
              background-color: ${theme.colors.select.focus.background};
              color: ${theme.colors.select.focus.text};
            }
    `}
`;

export const labelStyles = css<{ theme: Theme }>`
    ${
        ({ theme }) => `
            color: ${theme.colors.text};
            font-size: ${theme.fonts.sizes.medium};
            font-family: ${theme.fonts.family};
    `}
`;

export const errorTextStyles = css<{ theme: Theme }>`
    ${
    ({ theme }) => `
            color: ${theme.colors.error};
            font-size: ${theme.fonts.sizes.medium};
            font-family: ${theme.fonts.family};
    `}
`;