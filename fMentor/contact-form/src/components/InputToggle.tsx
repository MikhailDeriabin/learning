import { Properties } from 'csstype';
import { TInputValue, useInputContext, TInputId } from './Input';
import { forwardRef, useImperativeHandle, useState } from 'react';

type THandleChangeFn = (value: TInputValue) => any;
export type TInputToggleRef = {
    readonly getId: () => TInputId,
    readonly getValue: () => TInputValue,
    readonly toggle: () => void,
    readonly setHandleChange: (fn: THandleChangeFn) => void
}

type Props = {
    value: string,
    label?: string,
    className?: string,
    style?: Properties
}
const InputToggle = forwardRef<TInputToggleRef, Props>(({className, style, value, label}, ref) => {
    let { id, handleChange } = useInputContext();
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const toggleId = `${id}-${value}`;

    useImperativeHandle(ref, () => {
        return {
            getId: () => toggleId,
            getValue: () => isSelected ? value : undefined,
            toggle: () => (setIsSelected(isSelected => !isSelected)),
            setHandleChange: (fn: THandleChangeFn) => (handleChange = fn)
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
                type="radio"
                onChange={()=>{}}
                onClick={handleToggle}
                checked={isSelected}
            />
            {label && <label htmlFor={`${id}-${value}`}>{label}</label>}
        </div>
    );
});

export default InputToggle;