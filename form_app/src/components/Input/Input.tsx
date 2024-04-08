import React, {memo} from "react";
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {inputStyles} from "../../providers/ThemeProvider/themeStyles";

type InputProps = {
    name: string;
    placeholder?: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;

    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput = styled.input<{ theme: Theme }>`${ inputStyles }`;

export const Input: React.FC<InputProps> = memo(({
    name,
    placeholder,
    className,
    id,
    style,
    value,
    onChange
}) => {
    return (
        <DefaultInput
            className={className}
            id={id}
            name={name}
            style={style}
            placeholder={placeholder}

            value={value}
            onChange={onChange}
        />
    );
});