import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode } from 'react';

type TContextData = {
    values: Record<string, string>
}
const defaultContextData: TContextData = {
    values: {} 
}

type TContextValue = {
    onSubmit: (values: Record<string, string>) => any,
    validate?: (values: Record<string, string>) => Record<string, string>,

    setValue: (id: string, value: string | null) => any
} & TContextData;

const defaultContextValue: TContextValue = {
    ...defaultContextData,
    onSubmit: mockFn(),
    validate: mockFn(),

    setValue: mockFn()
}

const Context = createContext<TContextValue>(defaultContextValue);
export function useInputFormContext(){
    const ctx = useContext(Context);
    if(!ctx)
        throw new Error('InputForm context is not defined here. Check that this component is wrapped with the context Provider');

    return ctx;
}

type Props = {
    onSubmit: (values: Record<string, string>) => any,

    validationFn?: (values: Record<string, string>) => Record<string, string>,

    className?: string,
    style?: Properties,
    children?: ReactNode
}
export default function InputForm({onSubmit, validationFn, className, style, children}: Props) {
    const [contextData, setContextData] = useState<TContextData>(defaultContextData);

    function handleSetValue(id: string, value: string | null) {
        setContextData({...contextData, [id]: value});
    }

    const contextValue: TContextValue = {
        ...contextData,
        onSubmit,
        validate: validationFn,
        setValue: handleSetValue
    }

    return(
        <Context.Provider value={contextValue}>
            <form className={`${className}`} style={style}>
                {children}
            </form>
        </Context.Provider>
    );
}


function mockFn(): () => any {
    const warnMsg = 'This is a mock function. Please check that u are using it inside the Input context Provider';
    return () => { 
        console.warn(warnMsg);
        return;
    }
}