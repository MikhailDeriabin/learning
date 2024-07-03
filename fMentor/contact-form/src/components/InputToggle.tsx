import { Properties } from 'csstype';
import { useInputContext } from './Input';
import { useState, MouseEvent } from 'react';

type Props = {
    value: string,
    label?: string,
    className?: string,
    style?: Properties
}
export default function InputToggle({className, style, value, label}: Props) {
    const { id, handleChange } = useInputContext();
    
    const [isSelected, setIsSelected] = useState<boolean>(false);

    function handleToggle(e: MouseEvent<HTMLInputElement>) {
        setIsSelected(!isSelected);
    }

    return(<div>
            <input 
                id={`${id}-${value}`}
                value={value}
                className={`${className}`}
                style={style}
                type="radio"
                onChange={()=>{}}
                onClick={handleToggle}
                checked={isSelected}
            />
            {label && <label htmlFor={`${id}-${value}`}>{label}</label>}
    </div>
        
    );
}