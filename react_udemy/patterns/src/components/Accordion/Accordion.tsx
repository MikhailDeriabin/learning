import { ReactNode, createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

type ContextData = {
    openItemId: string | null,
}
type ContextValue = {
    openItem: (id: string) => any,
    closeItem: () => any

} & ContextData;

const defaultContextData: ContextData = {
    openItemId: null
}
const defaultContextValue: ContextValue = {
    openItem: getMockFn(''),
    closeItem: getMockFn(),
    ...defaultContextData
}

//Managing the state of Accordion and its children
const AccordionContext = createContext<ContextValue>(defaultContextValue);

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);
    if(!ctx)
        throw new Error('AccordionContext is undefined. Check that u are using useAccordionContext() in the component, which is inside of Accordion component');

    return ctx;
}

type Props = {
    children?: ReactNode,
    className?: string
}
//This is a compound component, which is meant to be use with other components
//Example of compound components might be select and option HTML tags
export default function Accordion({children, className}: Props) {
    const [contextData, setContextData] = useState<ContextData>(defaultContextData);


    function handleOpen(itemId: string) {
        setContextData({...contextData, openItemId: itemId});
    }
    function handleClose() {
        setContextData({...contextData, openItemId: null});
    }

    const contextValue: ContextValue = {
        openItem: handleOpen,
        closeItem: handleClose,
        ...contextData
    }

    return(
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    );
}

//Add a new property to the function object, so now the Item components can be accessed via Accordion.Item
Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

function getMockFn<TParams=any[]>(params?: TParams) {
    const errorMessage = 'This is call of a mock function. Please check that u define it in the context wrapper component';
    return params ? (...params) => {console.error(errorMessage);} : () => {console.error(errorMessage);}
}