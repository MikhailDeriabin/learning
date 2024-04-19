import {HTMLProps, ReactNode} from "react";

type Props = {
    textOnly?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    children?: ReactNode;
} & HTMLProps<HTMLButtonElement>;

export default function Button({textOnly, className, type, children, ...props}: Props) {
    const cssClasses = textOnly ? 'text-button' : 'button';

    return(
        <button {...props} type={type} className={`${cssClasses} ${className}`}>{children}</button>
    );
}