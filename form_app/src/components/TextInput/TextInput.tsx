import {FC, memo, useEffect, useState} from "react";
import {InputLabel} from "../InputLabel/InputLabel";
import {Input} from "../Input/Input";
import {ErrorText} from "../ErrorText/ErrorInput";
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {Validation} from "../../types/Validation";

type TextInputProps = {
    label: string;
    placeholder?: string;
    name: string;
    className?: string;

    value: string;
    setValue: (value: string) => void;
    validation?: Validation
}

const Div = styled.div<{ theme: Theme }>`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
    `;

export const TextInput: FC<TextInputProps> = memo(({
    label,
    placeholder,
    name,
    className,
    value,
    setValue,
    validation
}) => {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (validation?.validationTrigger) {
            const validationError = validation.validator(value);
            setError(validationError);
        }
    }, [validation?.validationTrigger, value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if(!validation?.validator)
            return;
        const errorMessage = validation.validator(newValue);
        if(errorMessage === null)
            setError(null);
        else
            setError(errorMessage ?? 'Virheellinen arvo');
    }

    return (
        <Div className={className}>
            <InputLabel
                htmlFor={name}
                label={label}
            />
            <Input
                name={name}
                placeholder={placeholder}

                value={value}
                onChange={handleChange}
            />
            <ErrorText
                error={error}
            />
        </Div>
    );
});