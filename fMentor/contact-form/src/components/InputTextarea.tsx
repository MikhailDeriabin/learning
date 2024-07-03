import { Properties } from 'csstype';
import { useInputContext } from './Input';
import { ChangeEvent } from 'react';

type Props = {
    className?: string,
    style?: Properties,
    rows?: number,
    columns?: number
}
export default function InputTextarea({className, style, rows, columns}: Props) {
    const {value, handleChange, handleBlur, id} = useInputContext();

    function handleInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
        handleChange(e.target.value);
    }

    return(
        <textarea 
            id={id} 
            value={value ?? ''} 
            onChange={handleInputChange} 
            className={`${className}`} 
            style={style} 
            onBlur={handleBlur}
            rows={rows}
            cols={columns}
        />
    );
}