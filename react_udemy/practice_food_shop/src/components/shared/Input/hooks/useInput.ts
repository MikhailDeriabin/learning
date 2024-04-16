import {ChangeEvent, useState} from "react";

type Validator = (value: string) => string;
export function useInput(validator?: Validator, initialValue?: string) {
    const [valueS, setValueS] = useState<string>(initialValue ?? '');
    const [errorS, setErrorS] = useState<string>('');

    function handleChange (e: ChangeEvent<HTMLInputElement>){
        setValueS(prevState => e.target.value);
    }

    function handleBlur(){
        if(validator){
            const errorText = validator(valueS);
            if(errorText)
                setErrorS(errorText);
        }
    }

    function handleFocus(){
        setErrorS('');
    }

    return{
        valueS,
        handleChange,
        errorS,
        handleBlur,
        handleFocus
    };
}