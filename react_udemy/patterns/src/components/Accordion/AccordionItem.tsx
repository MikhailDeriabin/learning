import { ReactNode, createContext, useContext } from "react";

type AccordionItemValue = {
    id: string
}
const defaultAccordionItemContext: AccordionItemValue = {
    id: ''
}

//Here the context is used for passing the id field, because the AccordionItem is a wrapper for title and content components
const AccordionItemContext = createContext<AccordionItemValue>(defaultAccordionItemContext);

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);
    if(!ctx)
        throw new Error('AccordionItemContext is not defined, please check what this component is wrapped with the AccordionItemContext.Provider');

    return ctx;
}

type Props = {
    id: string,
    children?: ReactNode,
    className?: string
}
//This is a compound component, which is meant to be use with other components
//Example of compound components might be select and option HTML tags
export default function AccordionItem({id, children, className}: Props) {
    const value: AccordionItemValue = {
        id
    }
    return(
        <AccordionItemContext.Provider value={value}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
        
    );
}