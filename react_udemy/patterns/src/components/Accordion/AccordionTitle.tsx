import { ReactNode } from "react";
import { useAccordionContext } from "./Accordion";

type Props = {
    id: string,
    className?: string,
    children?: ReactNode,
}
//This is a compound component, which is meant to be use with other components
//Example of compound components might be select and option HTML tags
export default function AccordionTitle({id, className, children}: Props) {
    const {openItemId, openItem, closeItem} = useAccordionContext();

    const isOpen = id === openItemId;

    function handleClick() {
        if(isOpen)
            closeItem();
        else
            openItem(id);
    }

    return(
        <h3 onClick={handleClick} className={isOpen ? `${className ?? ''} open` : `${className ?? ''}`}>{children}</h3>
    );
}