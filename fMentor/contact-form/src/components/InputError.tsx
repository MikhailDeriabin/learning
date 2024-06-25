import { Properties } from 'csstype';
import { useInputContext } from './Input';
import { useEffect, useState } from 'react';

let initialInput = true;

type Props = {
    className?: string,
    style?: Properties
}
export default function InputError({className, style}: Props) {
    const {validate, value, id, validationTrigger} = useInputContext();
    if(!validate)
        return <p>Error: you must provide a validation function in order to use InputError</p>;

    let text = '';
    if(validationTrigger || !initialInput)
        text = validate(id, value ?? null);

    if(initialInput && (validationTrigger || value !== undefined))
        initialInput = false;

    return(
        <p className={`${className}`} style={style}>{text}</p>
    );
}