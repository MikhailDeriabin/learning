import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode, forwardRef, useImperativeHandle } from 'react';
import InputLabel from "./InputLabel";
import InputError from "./InputError";
import InputField from "./InputField";
import InputTextarea from "./InputTextarea";
import InputToggle from './InputToggle';

export type TInputId = string;
export type TInputValue = string | undefined;
export type TInputError = string | undefined;
export type TContextData = {
    id: TInputId,
    value: TInputValue,
    error: TInputError
}
const defaultContextData: TContextData = {
    id: 'Id field is not defined. Please define an id for the Input component',
    value: undefined,
    error: undefined
}

type TContextValue = {
    validate?: (id: TInputId, value: TInputValue) => string,

    handleBlur: () => any,
    handleChange: (value: TInputValue) => any
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

type ValidationFn = (id: TInputId, value: TInputValue) => string;
export type InputRefMethods = {
    getIdAndValue: () => [TInputId, TInputValue],
    resetValue: () => void,
    validate: () => string | undefined
}
type Props = {
    onBlur?: (isError: boolean, id: TInputId, value: string) => any,
    id: TInputId,

    validationFn?: ValidationFn

    className?: string,
    style?: Properties,
    children?: ReactNode
}
const InputRef = forwardRef<InputRefMethods, Props>(
    ({id, onBlur, validationFn, className, style, children}, ref) => {

    const [contextData, setContextData] = useState<TContextData>({
        ...defaultContextData,
        id
    });

    useImperativeHandle(ref, () => {
        return {
            getIdAndValue: () => [id, contextData.value],
            resetValue: () => setContextData({...contextData, value: undefined}),
            validate: () => {
                //Special value for error when validation fn is not defined
                if(!validationFn)
                    return undefined;

                //If error already defined, do not call validation fn again
                if(contextData.error)
                    return contextData.error;

                const error = validationFn(id, contextData.value);
                if(!error)
                    return '';

                setContextData({...contextData, error})
                return error;
            }
        }   
    });

    function handleBlur() {
        if(!onBlur)
            return;

        if(contextData.error)
            onBlur(true, id, contextData.error);

        onBlur(false, id, contextData.value ?? '');
    }

    function handleChange(value: TInputValue) {
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
            <div className={`${className}`} style={style}>
                {children}
            </div>
        </Context.Provider>
    );
});

type InputCompound = typeof InputRef & {
    Label: typeof InputLabel;
    Field: typeof InputField;
    Error: typeof InputError;
    Textarea: typeof InputTextarea,
    InputToggle: typeof InputToggle
};
const Input = InputRef as InputCompound;

Input.Label = InputLabel;
Input.Field = InputField;
Input.Error = InputError;
Input.Textarea = InputTextarea;
Input.InputToggle = InputToggle;
  
export default Input;

function mockFn(): () => any {
    const warnMsg = 'This is a mock function. Please check that u are using it inside the Input context Provider';
    return () => { 
        console.warn(warnMsg);
        return;
    }
}