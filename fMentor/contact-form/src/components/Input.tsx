import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import InputField from "./InputField";
import { useInputFormContext } from "./InputForm";

type TContextData = {
    id: string,
    value?: string | null,
    validationTrigger: boolean
}
const defaultContextData: TContextData = {
    id: 'id is not specified for Input component',
    value: undefined,
    validationTrigger: false
}

type TContextValue = {
    onBlur: (id: string, value: string | null) => any,
    validate?: (id: string, value: string | null) => string,

    setValue: (value: string | null) => any
} & TContextData;

const DefaultContextValue: TContextValue = {
    ...defaultContextData,
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
    onBlur: (id: string, value: string | null) => any,
    id: string,

    validationFn?: (id: string, value: string | null) => string

    className?: string,
    style?: Properties,
    children?: ReactNode
}
export default function Input({id, onBlur, validationFn, className, style, children}: Props) {
    const [contextData, setContextData] = useState<TContextData>({
        ...defaultContextData,
        id
    });

    function handleSetValue(value: string | null) {
        setContextData({...contextData, value});
    }

    const contextValue: TContextValue = {
        ...contextData,
        onBlur,
        validate: validationFn,
        setValue: handleSetValue
    }

    const formCtx = useInputFormContext();

    useEffect(() => {
        if(!formCtx)
            return;

        const { submitTrigger, validateTrigger, setValue, setError } = formCtx;

        if(validationFn && validateTrigger){
            const currentValue = contextData.value === undefined ? null : contextData.value;
            const error = validationFn(id, currentValue);
            setError(id, error);
        }
        setContextData({...contextData, validationTrigger: validateTrigger});

        if(submitTrigger)
            setValue(id, contextData.value);
        
    }, [formCtx?.validateTrigger, formCtx?.submitTrigger]);

    return(
        <Context.Provider value={contextValue}>
            <div className={`${className}`} style={style}>
                {children}
            </div>
        </Context.Provider>
    );
}

Input.Label = InputLabel;
Input.Field = InputField;
Input.Error = InputError;

function mockFn(): () => any {
    const warnMsg = 'This is a mock function. Please check that u are using it inside the Input context Provider';
    return () => { 
        console.warn(warnMsg);
        return;
    }
}