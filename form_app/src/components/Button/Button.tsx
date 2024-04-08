import React, {memo} from 'react';
import {DefaultButton} from "../../providers/ThemeProvider/themeStyles";

interface ButtonProps {
    className?: string;
    id?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    style?: React.CSSProperties
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = memo( ({ className, id, onClick, children, style, disabled }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <DefaultButton
            onClick={handleClick}
            id={id}
            className={className}
            style={style}
            disabled={disabled}
        >
            {children}
        </DefaultButton>
    );
});
