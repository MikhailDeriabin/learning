import React, {memo} from "react";
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {errorTextStyles} from "../../providers/ThemeProvider/themeStyles";

type ErrorTextProps = {
    error: string | null;
    className?: string;
    id?: string;
}

const Div = styled.div<{ theme: Theme }>`${ errorTextStyles }`;

export const ErrorText: React.FC<ErrorTextProps> = memo(({
    error,
    className,
    id
}) => {
    return (
        <Div
            className={className}
            id={id}
            style={error ? {} : {display: "none"}}
        >
            {error}
        </Div>
    );
});