import { ReactNode } from "react";

type Props = {
    children?: ReactNode,
    className?: string
}
//This is a compound component, which is meant to be use with other components
//Example of compound components might be select and option HTML tags
export default function AccordionItem({children, className}: Props) {
    return(
        <li className={className}>
            {children}
        </li>
    );
}