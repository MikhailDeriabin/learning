import {HTMLAttributes, ReactNode} from "react";

type TabButtonProps = {
    children: ReactNode;
    onClick: () => void;
} & HTMLAttributes<HTMLButtonElement>

export default function TabButton ({children, ...props}: TabButtonProps) {
    return (
        <li>
            <button {...props}>{children}</button>
        </li>
    );
}