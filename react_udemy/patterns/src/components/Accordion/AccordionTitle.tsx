import { ReactNode } from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

type Props = {
    className?: string,
    children?: ReactNode,
}
//This is a compound component, which is meant to be use with other components
//Example of compound components might be select and option HTML tags
export default function AccordionTitle({className, children}: Props) {
    const {openItemId, openItem, closeItem} = useAccordionContext();
    const { id } = useAccordionItemContext();

    const isOpen = id === openItemId;

    function handleClick() {
        if(isOpen)
            closeItem();
        else
            openItem(id);
    }

    return(
        <div onClick={handleClick} className={isOpen ? `${className ?? ''} open` : `${className ?? ''}`}>{children}</div>
    );
}