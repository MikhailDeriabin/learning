import {InputHTMLAttributes, memo} from "react";

type Props = {
    id: string;
    label: string;
    error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomInput = memo(function ({id, error, label, ...props}: Props) {
    return(
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
            {error && <div className="control-error">{error}</div>}
        </div>
    );
});

export default CustomInput;