import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode } from 'react';

type TContextData = {
    value?: string
}
const DefaultContextData: TContextData = {}

type TContextValue = {
    onBlur: (value: string) => any,
    validate?: (value: string) => string,

    setValue: (value: string) => any
} & TContextData;

const DefaultContextValue: TContextValue = {
    ...DefaultContextData,
    onBlur: mockFn(),
    validate: mockFn(),

    setValue: mockFn()
}

const Context = createContext<TContextValue>(DefaultContextValue);
export function useInputContext(){
    const ctx = useContext(Context);
    if(!ctx)
        throw new Error('Input context is not defined here. Check that this component is wrapped with the context Provider');

    return ctx;
}

type Props = {
    onBlur: (value: string) => any,

    validationFn?: (value: string) => string

    className?: string,
    styles?: Properties,
    children?: ReactNode
}
export default function Input({onBlur, validationFn, className, styles, children}: Props) {
    const [contextData, setContextData] = useState<TContextData>(DefaultContextData);

    function handleSetValue(value: string) {
        setContextData({...contextData, value});
    }

    const contextValue: TContextValue = {
        ...contextData,
        onBlur,
        validate: validationFn,
        setValue: handleSetValue
    }

    return(
        <Context.Provider value={contextValue}>
            <div className={`${className}`}>
                {children}
            </div>
        </Context.Provider>
    );
}

function mockFn(): (...params: any) => any {
    const warnMsg = 'This is a mock function. Please check that u are using it inside the Input context Provider';
    return () => { 
        console.warn(warnMsg);
        return;
    }
}