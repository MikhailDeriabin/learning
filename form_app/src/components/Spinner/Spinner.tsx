import React from 'react';
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";

type SpinnerProps = {
    isActive: boolean;
}

const Div = styled.div<{ theme: Theme }>`
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    border: 4px solid ${({ theme }) => theme.colors.text+"50"};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-left-color: ${({ theme }) => theme.colors.button.background};

    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`

export const Spinner = ({ isActive }: SpinnerProps) => {
    return (
        <Div style={isActive ? {} : {display: "none"}}></Div>
    );
};