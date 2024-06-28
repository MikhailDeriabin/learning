import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import InputField from "./InputField";
import { useInputFormContext } from "./InputForm";

type Id = string;
type Value = string | undefined;
type Error = string | undefined;
type TContextData = {
    id: Id,
    value: Value,
    error: Error
}
const defaultContextData: TContextData = {
    id: 'Id field is not defined. Please define an id for the Input component',
    value: undefined,
    error: undefined
}

type TContextValue = {
    validate: (id: Id, value: Value) => string,

    handleBlur: () => any,
    handleChange: (value: Value) => any
} & TContextData;

const DefaultContextValue: TContextValue = {
    ...defaultContextData,
    validate: mockFn(),

    handleBlur: mockFn(),
    handleChange: mockFn()
}

const Context = createContext<TContextValue>(DefaultContextValue);
export function useInputContext(){
    const ctx = useContext(Context);
    if(!ctx)
        throw new Error('Input context is not defined here. Check that this component is wrapped with the context Provider');

    return ctx;
}

type Props = {
    onBlur: (isError: boolean, id: Id, value: string) => any,
    id: Id,

    validationFn: (id: Id, value: Value) => string

    className?: string,
    style?: Properties,
    children?: ReactNode
}
export default function Input({id, onBlur, validationFn, className, style, children}: Props) {
    const [contextData, setContextData] = useState<TContextData>({
        ...defaultContextData,
        id
    });

    function handleBlur() {
        if(contextData.error)
            onBlur(true, id, contextData.error);

        onBlur(false, id, contextData.value ?? '');
    }

    function handleChange(value: Value) {
        const error = validationFn(id, value);
        if(error)
            return setContextData(() => { return {value, error, id}});

        setContextData({value, error: undefined, id});
    }

    const contextValue: TContextValue = {
        ...contextData,
        validate: validationFn,

        handleBlur,
        handleChange
    }
    

    const formCtx = useInputFormContext();

    useEffect(() => {
        if(!formCtx || !formCtx.submitTrigger)
            return;

        const { handleSubmit } = formCtx;

        const error = validationFn(id, contextData.value);
        handleSubmit(id, contextData.value, error);

        if(error)
            setContextData({...contextData, error});
    }, [formCtx?.submitTrigger]);

    return(
        <Context.Provider value={contextValue}>
            <div className={`${className}`} style={style} data-input-wrapper-id={`${id}`}>
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