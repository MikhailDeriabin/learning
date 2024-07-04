import { Children, ReactElement, ReactNode, cloneElement, isValidElement, useRef } from "react";
import InputToggle, { TInputToggleRef } from "./InputToggle";
import { TInputValue, TInputId, useInputContext } from './Input';

type Props = {
    readonly children?: ReactNode,
    readonly maxSelected: number
}
export default function ToggleGroup({ children, maxSelected }: Props) {
    const {handleChange} = useInputContext();

    const toggleButtons = useRef<Record<TInputId, TInputToggleRef>>({});
    const selectedCount = useRef<number>(0);

    function increaseSelectedCount() {
        if(selectedCount.current >= maxSelected)
            return false;

        selectedCount.current++;
        return true;
    }

    function decreaseSelectedCount() {
        if(selectedCount.current < 1)
            return false;

        selectedCount.current--;
        return true;
    }

    function handleToggle(id: TInputId, value: TInputValue) {
        //If toggle is de-selected no need for actions
        if(!value)
            return decreaseSelectedCount();
            
        //If max can be chosen is one act as a radio button group (change current value to the selected one)
        if(maxSelected === 1){
            for(const buttonId in toggleButtons.current){
                const button = toggleButtons.current[buttonId];
    
                if(button.getId() === id)
                    continue;
                
                if(button.getValue())
                    button.toggle();
            }

            return handleChange(value);
        }

        const canIncreaseSelectedCount = increaseSelectedCount();
        //If max amount is already set, restrict from updating
        if(!canIncreaseSelectedCount)
            return toggleButtons.current[id].toggle();

        handleChange(value);
    }

    const clonedElems = Children.map(children, child => {
        if(!isValidElement(child) || child.type !== InputToggle)
            return child;
        
        return cloneElement(child as ReactElement<any>, {
            ref: (elem: TInputToggleRef) => {
                if(!elem)
                    return;
                const id = elem.getId();
                elem.setHandleChange((value) => handleToggle(id, value));
                toggleButtons.current[id] = elem;
            }
        });
    });

    return(
        <fieldset>
            {clonedElems}
        </fieldset>
    );
}