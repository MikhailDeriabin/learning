import React, {useEffect, useState} from "react";
import {InputLabel} from "../InputLabel/InputLabel";
import {ErrorText} from "../ErrorText/ErrorInput";
import styled from "styled-components";
import {Select} from "../Select/Select";
import {Theme} from "../../providers/ThemeProvider/themes";
import {Validation} from "../../types/Validation";

type SelectOption = {
    value: string;
    label: string;
}

type LabeledSelectProps = {
    label: string;
    name: string;
    options: SelectOption[];
    isRequired?: boolean;
    defaultValue?: string | 'default';
    value: string;
    setValue: (value: string) => void;
    errorMessage?: string;
    className?: string;
    id?: string;
    labelStyle?: React.CSSProperties;
    selectStyle?: React.CSSProperties;
    validation: Validation;
}

const Div = styled.div<{ theme: Theme }>`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
    `;

export const LabeledSelect: React.FC<LabeledSelectProps> = ({
    label,
    name,
    options,
    defaultValue,
    labelStyle,
    selectStyle,
    setValue,
    value,
    isRequired,
    errorMessage,
    className,
    id,
    validation
}) => {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (validation?.validationTrigger) {
            const validationError = validation.validator(value);
            setError(validationError);
        }
    }, [validation?.validationTrigger, value]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if(!isRequired)
            return;

        if(newValue == null)
            setError(errorMessage ?? 'Kenttä on pakollinen');
    }

    return (
        <Div className={className} id={id}>
            <InputLabel
                htmlFor={name}
                style={labelStyle}
                label={label}
            />

            <Select name={name} options={options} defaultValue={defaultValue} onChange={handleChange} style={selectStyle}/>

            <ErrorText
                error={error}
            />
        </Div>
    );
}