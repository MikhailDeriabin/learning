import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode, FormEvent, useEffect } from 'react';

type Id = string;
type Value = string | null | undefined;
type Error = string | null;
type TContextData = {
    values: Record<Id, Value>,
    submitTrigger: boolean,

    errors: Record<Id, Error>,
    validateTrigger: boolean
}
const defaultContextData: TContextData = {
    values: {},
    submitTrigger: false,

    errors: {},
    validateTrigger: false
}

type TContextValue = {
    onSubmit: () => any,
    setValue: (id: Id, value: Value) => any,
    setError: (id: Id, error: Error) => any
} & TContextData;

const defaultContextValue: TContextValue = {
    ...defaultContextData,
    onSubmit: mockFn(),

    setValue: mockFn(),
    setError: mockFn()
}

const Context = createContext<TContextValue>(defaultContextValue);
export function useInputFormContext(): TContextValue | null{
    const ctx = useContext(Context);
    if(!ctx)
        return null;
    
    return ctx;
}

type Props = {
    onSubmit: (areErrors: boolean, values: Record<Id, Value>) => any,

    className?: string,
    style?: Properties,
    children: ReactNode
}
export default function InputForm({onSubmit, className, style, children}: Props) {
    const [contextData, setContextData] = useState<TContextData>(defaultContextData);

    function handleSetValue(id: Id, value: Value) {
        setContextData({
            ...contextData, 
            values: {
                ...contextData.values,
                [id]: value
            }     
        });
    }

    function handleSetError(id: Id, error: Error) {
        setContextData({
            ...contextData, 
            errors: {
                ...contextData.errors,
                [id]: error
            }
        });
    }

    function handleSubmit() {
        setContextData((prevState) => {
            return {
                ...prevState,
                validateTrigger: true,
                submitTrigger: true
            }  
        });   
    }

    useEffect(() => {
        if(contextData.submitTrigger){
            const areErrors = Object.values(contextData.errors).some(v => v !== null);
            onSubmit(areErrors, areErrors ? contextData.errors : contextData.values);
    
            setContextData((prevState) => {
                return {
                    ...prevState,
                    validateTrigger: false,
                    submitTrigger: false
                }  
            });
        }
    }, [contextData.submitTrigger]);

    function preventFormSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    const contextValue: TContextValue = {
        ...contextData,
        onSubmit: handleSubmit,
        setValue: handleSetValue,
        setError: handleSetError
    }

    return(
        <Context.Provider value={contextValue}>
            <form onSubmit={preventFormSubmit} className={`${className}`} style={style}>
                {children}
            </form>
        </Context.Provider>
    );
}


function mockFn(): () => any {
    const warnMsg = 'This is a mock function. Please check that u are using it inside the InputForm context Provider or that it is properly defined';
    return () => { 
        console.error(warnMsg);
        return;
    }
}