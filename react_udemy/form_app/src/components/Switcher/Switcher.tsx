import React, {memo, useState} from 'react';
import {InputLabel} from "../InputLabel/InputLabel";
import './styles.css';
import {SwitcherButton} from "../SwitcherButton/SwitcherButton";
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {Validation} from "../../types/Validation";
import {ErrorText} from "../ErrorText/ErrorInput";

type SwitcherProps = {
    label: string;
    className?: string;
    name: string;
    options: string[];
    value: string;
    setValue: (value: string) => void;
    validation: Validation;
}

const Div = styled.div<{ theme: Theme }>`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
    `;

export const Switcher: React.FC<SwitcherProps> = memo(({
       label,
       options,
       className,
       name,
       setValue,
       value,
       validation
}) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    function handleSelect(option: string) {
        setSelectedOption(option);
        setValue(option);
    }

    return (
        <Div className={className}>
            <InputLabel label={label} htmlFor={name}/>

            <div className="switcher">
                {options.map((option) => (
                    <SwitcherButton
                        key={option}
                        onClick={() => handleSelect(option)}
                        isSelected={selectedOption === option}
                    >
                        {option}
                    </SwitcherButton>
                ))}
            </div>
        </Div>
    );
});