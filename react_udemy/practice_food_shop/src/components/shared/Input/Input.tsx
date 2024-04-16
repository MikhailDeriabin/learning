import {ForwardedRef, forwardRef, HTMLAttributes} from "react";
import {useInput} from "./hooks/useInput";

type Props = {
    id: string;
    label?: string;
    placeholder?: string;

    validator?: (value: string) => string;
} & HTMLAttributes<HTMLDivElement>;

const Input = forwardRef(function ({ id, label, placeholder, validator, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) {
    const {
        valueS: value,
        handleChange,
        errorS: error,
        handleBlur,
        handleFocus
    } = useInput(validator);

    return(
        <div {...props}>
            {label && <label className="input-label" htmlFor={id}>{label}</label>}
            <input
                ref={ref}
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