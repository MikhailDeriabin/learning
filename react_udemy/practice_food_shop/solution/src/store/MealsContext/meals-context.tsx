import {createContext, ReactNode, useReducer} from "react";
import {MealsContextContent, MealsContextReducerAction, MealsContextState} from "./types";

import {defaultReducer, generateInitStateAndContent} from "./util";
import {Meal} from "../../types/Meal";
import {addItem, removeItem} from "./reducers";

const [initState, initContent] = generateInitStateAndContent<MealsContextState, MealsContextContent>(
    'MealsContext',
    {
        items: [],
    },
    {
        addItem: null,
        removeItem: null,
    }
);

export const MealsContext = createContext<MealsContextContent>(initContent);

function contextReducer(state: MealsContextState, action: MealsContextReducerAction){
    switch (action.type) {
        case "ADD_ITEM":
            return addItem(state, action.payload);
        case "REMOVE_ITEM":
            return removeItem(state, action.payload);
        default:
            return defaultReducer(state, action.type);
    }
}
type Props = {
    children: ReactNode
}

export default function MealsProvider ({ children }: Props) {
    const [state, reducer] = useReducer(contextReducer, {...initState});

    function addItem(meal: Meal){
        reducer({ type: 'ADD_ITEM', payload: meal });
    }
    function removeItem(id: string){
        reducer({ type: 'REMOVE_ITEM', payload: id });
    }

    const contextValue: MealsContextContent = {
        ...state,
        addItem,
        removeItem
    }

    return(
        <MealsContext.Provider value={contextValue}>
            {children}
        </MealsContext.Provider>
    );
}