import {Properties} from "csstype";
import { createContext, useContext, useState, ReactNode, FormEvent, useEffect } from 'react';

type Id = string;
type Value = string | undefined | null;
type Error = string | undefined;
type TContextData = {
    values: Record<Id, Value>,
    submitTrigger: boolean,

    errors: Record<Id, Error>
}
const defaultContextData: TContextData = {
    values: {},
    submitTrigger: false,

    errors: {}
}

type TContextValue = {
    handleSubmit: (id: Id, value: Value, error: Error) => any,
    onSubmitButtonClick: () => void
} & TContextData;

const defaultContextValue: TContextValue = {
    ...defaultContextData,
    handleSubmit: mockFn(),
    onSubmitButtonClick: mockFn()
}

const Context = createContext<TContextValue>(defaultContextValue);
export function useInputFormContext(): TContextValue | null {
    const ctx = useContext(Context);
    if(!ctx)
        return null;
    
    return ctx;
}

type Props = {
    onSubmit: (areErrors: boolean, values: Record<Id, Value | Error>) => any,

    className?: string,
    style?: Properties,
    children: ReactNode
}
export default function InputForm({onSubmit, className, style, children}: Props) {
    const [contextData, setContextData] = useState<TContextData>(defaultContextData);

    useEffect(() => {
        const inputElems = document.querySelectorAll('div[data-input-wrapper-id]');
        const inputIds: string[] = [];
        for(let i=0; i<inputElems.length; i++)
            inputIds.push(inputElems[i]['dataset']['inputWrapperId']);

        const inputsInitValues = {};
        for(let i=0; i<inputIds.length; i++)
            inputsInitValues[inputIds[i]] = null;

        setContextData({...contextData, values: inputsInitValues});
    }, []);

    function handleSubmit(id: Id, value: Value, error: Error) {
        setContextData((prevState) => {
            return {
                values: {
                    ...prevState.values,
                    [id]: value
                },
                errors: {
                    ...prevState.errors,
                    [id]: error
                },
                submitTrigger: prevState.submitTrigger
            }  
        });   
    }

    function onSubmitButtonClick() {
        //Reset values if form is sent more than one time
        const values = resetValues(contextData.values);
        setContextData({...contextData, values, errors: {}, submitTrigger: true});
    }

    useEffect(() => {
        if(!contextData.submitTrigger)
            return;
        
            
        if(!areAllValuesSet(contextData.values))
            return;

        const areErrors = Object.values(contextData.errors).some(v => v !== '');
        onSubmit(areErrors, areErrors ? contextData.errors : contextData.values);

        setContextData((prevState) => {
            return {
                ...prevState,
                submitTrigger: false
            }  
        });
    }, [contextData.submitTrigger, contextData.values]);

    function preventFormSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    const contextValue: TContextValue = {
        ...contextData,
        handleSubmit,
        onSubmitButtonClick
    }

    return(
        <Context.Provider value={contextValue}>
            <form onSubmit={preventFormSubmit} className={`${className}`} style={style}>
                {children}
            </form>
        </Context.Provider>
    );
}

function areAllValuesSet(values: Record<string, string | null | undefined>) {
    return Object.values(values).some(v => v !== null);
}

function resetValues(values: Record<string, string | null | undefined>) {
    const resetValues: Record<string, null> = {};
    for(let id in values)
        values[id] = null;
    
    return resetValues;
}


function mockFn(): () => any {
    const warnMsg = 'This is a mock function. Please check that u are using it inside the InputForm context Provider or that it is properly defined';
    return () => { 
        console.error(warnMsg);
        return;
    }
}