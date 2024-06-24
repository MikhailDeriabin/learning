import { Properties } from 'csstype';
import { useInputFormContext } from './InputForm';
import { FormEvent } from 'react';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputSubmit({className, style}: Props) {
    const formCtx = useInputFormContext();

    if(!formCtx)
        return <p>Wrap the InputSubmit with InputForm component, overwise it can not be used</p>

    const { onSubmit } = formCtx;

    return(
        <button id="submit-btn" onClick={onSubmit} className={`${className}`} style={style}>Submit</button>
    );
}