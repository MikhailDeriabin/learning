import React, {memo} from "react";
import styled from "styled-components";
import arrowDown from './icons/arrow-down.svg';
import arrowDownWhite from './icons/arrow-down-white.svg';
import {Theme} from "../../providers/ThemeProvider/themes";
import {labelStyles, selectStyles} from "../../providers/ThemeProvider/themeStyles";

type SelectOption = {
    value: string;
    label: string;
}

type InputProps = {
    name: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    options: SelectOption[];
    defaultValue?: string | 'default';

    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DefaultSelect = styled.select<{ theme: Theme }>`${ selectStyles }`;
const SelectWithBG = styled(DefaultSelect)`
    appearance: none;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
    background-position: 97% 50%;
    background-color: ${({ theme }) => theme.colors.background};
    &:hover{
        background-image: url(${arrowDownWhite});
    }
    &:focus{
        background-image: url(${arrowDown});
    }
`;
const Option = styled.option<{ theme: Theme }>`${ labelStyles }`;

export const Select: React.FC<InputProps> = memo(({
    name,
    className,
    id,
    style,
    onChange,
    options,
    defaultValue
}) => {
    return (
        <SelectWithBG
            id={id}
            className={className}
            name={name}
            defaultValue={defaultValue}
            onChange={onChange}
            style={style}
        >
            {options.map(option => (
                option.value === defaultValue ?
                    <Option key={option.value} value={option.value} disabled hidden>{option.label}</Option>:
                    <Option key={option.value} value={option.value}>{option.label}</Option>

            ))}
        </SelectWithBG>
    );
});