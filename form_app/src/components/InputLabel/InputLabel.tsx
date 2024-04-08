import React, {memo} from "react";
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {labelStyles} from "../../providers/ThemeProvider/themeStyles";

type InputLabelProps = {
    label: string;
    htmlFor: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}

const Label = styled.label<{ theme: Theme }>`${ labelStyles }`;

export const InputLabel: React.FC<InputLabelProps> = memo(({
    label,
    htmlFor,
    className,
    id,
    style
}) => {
    return (
        <Label
            id={id}
            className={className}
            htmlFor={htmlFor}
            style={style}
        >
            {label}
        </Label>
    );
});