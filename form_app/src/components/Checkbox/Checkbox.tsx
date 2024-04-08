import React, {memo, useEffect, useState} from 'react';
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {ErrorText} from "../ErrorText/ErrorInput";
import {Validation} from "../../types/Validation";

interface CheckboxProps {
    className?: string;
    id?: string;
    value: boolean;
    setValue: (isChecked: boolean) => void;
    label?: string;
    initialChecked?: boolean;
    validation: Validation;
}

const Label = styled.label<{ theme: Theme }>`
    display: flex;
    flex-direction: row-reverse;
    gap: ${({ theme }) => theme.spacing.small};
    align-items: center;
    justify-content: left;

    margin-bottom: ${({ theme }) => theme.spacing.medium};
    padding-left: 0;

    font-size: ${({ theme }) => theme.fonts.sizes.small};
    user-select: none;
`;

const Input = styled.input<{ theme: Theme }>`
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    &:checked ~ .checkbox{
        background-color: #128659;
        opacity: 1;
    }
`;
const Box = styled.span<{ theme: Theme }>`
    display: block;
    height: 30px;
    width: 30px;
    min-width: 30px;
    
    border: ${({ theme }) => theme.borders.width} solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borders.radius};
    background-color: ${({ theme }) => theme.colors.background};
    
    &:hover{
        background-color: ${({ theme }) => theme.colors.button.hover};
    }
`;

export const Checkbox: React.FC<CheckboxProps> = memo( ({
    className,
    id,
    label,
    initialChecked ,
    setValue,
    value,
    validation
}) => {
    const [checked, setChecked] = useState<boolean>(initialChecked??false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (validation?.validationTrigger) {
            const validationError = validation.validator(value);
            setError(validationError);
        }
    }, [validation?.validationTrigger, value]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newChecked = !checked;
        setChecked(newChecked);
        setValue(newChecked);
    };

    return (
        <div>
            <Label id={id} className={className}>{label}
                <Input
                    type="checkbox"
                    name="accept-policy"
                    checked={checked}
                    readOnly
                />
                <Box className="checkbox" onClick={handleClick}></Box>
            </Label>
            <ErrorText
                error={error}
            />
        </div>
    );
});
