import {ForwardedRef, forwardRef, HTMLAttributes, useImperativeHandle, useRef} from "react";
import {useInput} from "./hooks/useInput";

type Props = {
    id: string;
    label?: string;
    placeholder?: string;

    validator?: (value: string) => string;
} & HTMLAttributes<HTMLDivElement>;

export type InputRef = {
    value: string;
    isValid: () => boolean;
    validate: () => string;

    id: string;
}

const Input = forwardRef(function ({ id, label, placeholder, validator, ...props }: Props, ref: ForwardedRef<InputRef>) {
    const {
        valueS: value,
        handleChange,
        errorS: error,
        setErrorS: setError,
        handleBlur,
        handleFocus
    } = useInput(validator);

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            value,
            isValid: () => {
                if(!validator)
                    return true;
                return !validator(value);
            },
            validate: () => {
                if(!validator)
                    return '';

                const errorMessage = validator(value);
                if(!errorMessage)
                    return '';

                setError(errorMessage);
                return errorMessage;
            },

            id
        }
    });

    return(
        <div {...props}>
            {label && <label className="input-label" htmlFor={id}>{label}</label>}
            <input
                ref={inputRef}
                id={id}
                className="input"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            {error && <p className="input-error">{error}</p>}
        </div>
    );
});

export default Input;