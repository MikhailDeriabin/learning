import {HTMLAttributes, ReactNode} from "react";

type Props = {
    textOnly?: boolean;
    className?: string;
    children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({textOnly, className, children, ...props}: Props) {
    const cssClasses = textOnly ? 'text-button' : 'button';

    return(
        <button {...props} className={`${cssClasses} ${className}`}>{children}</button>
    );
}