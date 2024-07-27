import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { family } from "./fonts.util";

export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    html{
        font-size: 16px;
        box-sizing: border-box;
        font-family: ${family.primary};
    }

    *, *:before, *:after{
        box-sizing: inherit;
        border: none;
    }

    body{
        margin: 10px;
    }
`;