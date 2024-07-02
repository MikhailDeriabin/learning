import {Properties} from "csstype";
import { ReactNode, FormEvent, useRef, isValidElement, Children, cloneElement, ReactElement } from 'react';
import Input, { InputRefMethods, TInputError, TInputId, TInputValue } from "./Input";


type Props = {
    onSubmit: (areErrors: boolean, values: Record<TInputId, TInputValue | TInputError>) => any,

    className?: string,
    style?: Properties,
    children: ReactNode
}
export default function InputForm({onSubmit, className, style, children}: Props) {
    const inputRefs = useRef<Record<TInputId, InputRefMethods>>({});

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const values: Record<TInputId, TInputValue> = {};
        const errors: Record<TInputId, TInputError> = {};
        for(let inputId in inputRefs.current){
            const input = inputRefs.current[inputId];
            const [id, value] = input.getIdAndValue();
            values[id] = value;

            const error = input.validate();
            if(error)
                errors[id] = error;
        }

        if(Object.keys(errors).length !== 0)
            return onSubmit(true, errors);

        onSubmit(false, values);

        for(let inputId in inputRefs.current)
            inputRefs.current[inputId].resetValue();
    }

    const clonedChildren = Children.map(children, (child) => {
        if(!isValidElement(child) || child.type !== Input)
            return child;

        return cloneElement(child as ReactElement<any>, {
            ref: (elem: InputRefMethods) => {
                if(elem){
                    const [id] = elem.getIdAndValue();
                    inputRefs.current[id] = elem;
                }
            }
        });
    });

    return(
        <form onSubmit={handleSubmit} className={`${className}`} style={style}>
            {clonedChildren}
        </form>
    );
}
