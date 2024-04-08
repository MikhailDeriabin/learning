import React, {memo} from 'react';
import styled from "styled-components";
import {useTheme} from "../../providers/ThemeProvider/ThemeProvider";
import {DefaultButton} from "../../providers/ThemeProvider/themeStyles";

type SwitcherButtonProps = {
    className?: string;
    id?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    isSelected: boolean;
}

type DefaultSwitcherButtonProps = {
    isSelected: boolean;
}

const DefaultSwitcherButton = styled(DefaultButton)<DefaultSwitcherButtonProps>`
    width: auto;
    border-radius: 0;
    flex-grow: 1;

    background-color: ${({ theme , isSelected}) => isSelected ? theme.colors.button.background : theme.colors.background };
    color: ${({ theme, isSelected }) => isSelected ? theme.colors.button.text : theme.colors.text};
    
    &:not(:last-child){
        border-right: 1px solid #707070;
    }

    &:first-child{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    &:last-child{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

export const SwitcherButton: React.FC<SwitcherButtonProps> = memo(({ className, id, onClick, children, isSelected }) => {
    const theme = useTheme();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <DefaultSwitcherButton
            className={className}
            id={id}
            isSelected={isSelected}
            onClick={handleClick}
        >
            {children}
        </DefaultSwitcherButton>
    );
});