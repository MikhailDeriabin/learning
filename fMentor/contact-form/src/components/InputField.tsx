import { Properties } from 'csstype';
import { useInputContext } from './Input';
import { ChangeEvent } from 'react';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputField({className, style}: Props) {
    const {value, handleChange, handleBlur, id} = useInputContext();

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        handleChange(e.target.value);
    }

    return(
        <input id={id} value={value ?? ''} onChange={handleInputChange} className={`${className}`} style={style} onBlur={handleBlur}/>
    );
}