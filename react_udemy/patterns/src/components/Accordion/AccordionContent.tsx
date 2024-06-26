import { ReactNode } from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

type Props = {
    children?: ReactNode,
    className?: string
}
//This is a compound component, which is meant to be use with other components
//Example of compound components might be select and option HTML tags
export default function AccordionContent({children, className}: Props) {
    const {openItemId} = useAccordionContext();
    const { id } = useAccordionItemContext();

    const isOpen = id === openItemId;

    return(
        <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>
            {children}
        </div>
    );
}