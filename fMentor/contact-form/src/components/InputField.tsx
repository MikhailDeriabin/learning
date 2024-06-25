import { Properties } from 'csstype';
import { useInputContext } from './Input';
import { ChangeEvent } from 'react';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputField({className, style}: Props) {
    const {onBlur, value, id, setValue} = useInputContext();

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        if(!e.target.value)
            return setValue(null);

        setValue(e.target.value);
    }

    function handleBlur() {
        onBlur(id, value ?? null);
    }

    return(
        <input id={id} value={value ?? ''} onChange={handleInputChange} className={`${className}`} style={style} onBlur={handleBlur}/>
    );
}