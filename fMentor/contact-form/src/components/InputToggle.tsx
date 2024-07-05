import { Properties } from 'csstype';
import { useInputContext, TInputId } from './Input';
import { forwardRef, useImperativeHandle, useState } from 'react';

type THandleChangeFn = (value: string | undefined) => any;
export type TInputToggleRef = {
    readonly getId: () => TInputId,
    readonly getValue: () => string | undefined,
    readonly toggle: () => void,
    readonly setHandleChange: (fn: THandleChangeFn) => void
}

type Props = {
    value: string,
    label?: string,
    type?: 'radio' | 'checkbox',
    className?: string,
    style?: Properties
}
const InputToggle = forwardRef<TInputToggleRef, Props>(({className, style, value, label, type}, ref) => {
    let { id, handleChange } = useInputContext();
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const toggleId = `${id}-${value}`;

    useImperativeHandle(ref, () => {
        return {
            getId: () => toggleId,
            getValue: () => isSelected ? value : undefined,
            toggle: () => (setIsSelected(isSelected => !isSelected)),
            setHandleChange: (fn: THandleChangeFn) => (handleChange = fn as any)
        }
    });

    function handleToggle() {
        !isSelected ? handleChange(value) : handleChange(undefined);
        setIsSelected(isSelected => !isSelected);
    }

    return(
        <div>
            <input 
                id={toggleId}
                value={value}
                className={`${className}`}
                style={style}
                type={type ?? 'checkbox'}
                onChange={()=>{}}
                onClick={handleToggle}
                checked={isSelected}
            />
            {label && <label htmlFor={`${id}-${value}`}>{label}</label>}
        </div>
    );
});

export default InputToggle;