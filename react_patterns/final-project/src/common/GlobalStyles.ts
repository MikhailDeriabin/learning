import { createGlobalStyle } from "styled-components";
import { font } from "./fonts";

export const GlobalStyles = createGlobalStyle`
    *{
        font-size: ${font.size[4]};
        font-family: ${font.family};
        font-weight: ${font.weight.normal};
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    *, *:before, *:after{
        box-sizing: inherit;
        border: none;
    }
`;
