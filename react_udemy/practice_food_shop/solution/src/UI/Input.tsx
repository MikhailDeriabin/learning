import {HTMLProps} from "react";

type Props = {
    label: string;
    id: string;
} & HTMLProps<HTMLInputElement>;

export default function Input({ label, id, type, ...props }: Props) {

    return(
        <p className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type={type} {...props}/>
        </p>
    );
}