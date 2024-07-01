import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode, useEffect, forwardRef } from 'react';
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import InputField from "./InputField";

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
    validate?: (id: Id, value: Value) => string,

    handleBlur: () => any,
    handleChange: (value: Value) => any
} & TContextData;

const DefaultContextValue: TContextValue = {
    ...defaultContextData,
    validate: undefined,

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
    onBlur?: (isError: boolean, id: Id, value: string) => any,
    id: Id,

    validationFn?: (id: Id, value: Value) => string

    className?: string,
    style?: Properties,
    children?: ReactNode
}
const InputRef = forwardRef<HTMLInputElement, Props>(
    ({id, onBlur, validationFn, className, style, children}, ref) => {

    const [contextData, setContextData] = useState<TContextData>({
        ...defaultContextData,
        id
    });

    function handleBlur() {
        if(!onBlur)
            return;

        if(contextData.error)
            onBlur(true, id, contextData.error);

        onBlur(false, id, contextData.value ?? '');
    }

    function handleChange(value: Value) {
        if(!validationFn)
            return setContextData({value, error: undefined, id});

        const error = validationFn(id, value);
        setContextData(() => { return {value, error, id}});
    }

    const contextValue: TContextValue = {
        ...contextData,
        validate: validationFn,

        handleBlur,
        handleChange
    }

    return(
        <Context.Provider value={contextValue}>
            <div className={`${className}`} style={style} data-input-type="Input">
                {children}
            </div>
        </Context.Provider>
    );
});

type InputCompound = typeof InputRef & {
    Label: typeof InputLabel;
    Field: typeof InputField;
    Error: typeof InputError;
};
const Input = InputRef as InputCompound;

Input.Label = InputLabel;
Input.Field = InputField;
Input.Error = InputError;
  
export default Input;

function mockFn(): () => any {
    const warnMsg = 'This is a mock function. Please check that u are using it inside the Input context Provider';
    return () => { 
        console.warn(warnMsg);
        return;
    }
}