import React from 'react';
import styled from 'styled-components';
import {Theme} from "../../providers/ThemeProvider/themes";
import {useTheme} from "../../providers/ThemeProvider/ThemeProvider";
import {DefaultButton} from "../../providers/ThemeProvider/themeStyles";

const ThemeToggle = styled(DefaultButton)<{ theme: Theme }>`
    background: ${ ({ theme }) => theme.colors.background };
    color: ${ ({ theme }) => theme.colors.text };
    margin-bottom: ${ ({ theme }) => theme.spacing.medium};
    height: auto;
    max-width: 150px;
`;

export const TeamToggleButton: React.FC = () => {
    const { toggleTheme } = useTheme();
    return (
        <ThemeToggle onClick={toggleTheme}>Muokkaa teema</ThemeToggle>
    );
};