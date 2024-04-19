import {createContext, ReactNode, useReducer} from "react";
import {defaultReducer, generateInitStateAndContent} from "./util";
import {UserProgressContextContent, UserProgressContextReducerAction, UserProgressContextState} from "./types";
import {hideCart, hideCheckout, showCart, showCheckout} from "./reducers";

const [initState, initContent] = generateInitStateAndContent<UserProgressContextState, UserProgressContextContent>(
    'UserProgress',
    {
        progress: 'NOT_SHOWN'
    },
    {
        showCart: null,
        hideCart: null,
        showCheckout: null,
        hideCheckout: null
    }
);

export const UserProgressContext = createContext<UserProgressContextContent>(initContent);

function contextReducer(state: UserProgressContextState, action: UserProgressContextReducerAction){
    switch (action.type) {
        case "SHOW_CART":
            return showCart(state, action.payload);
        case "HIDE_CART":
            return hideCart(state, action.payload);
        case "SHOW_CHECKOUT":
            return showCheckout(state, action.payload);
        case "HIDE_CHECKOUT":
            return hideCheckout(state, action.payload);
        default:
            return defaultReducer(state, action.type);
    }
}
type Props = {
    children: ReactNode
}

export default function UserProgressProvider ({ children }: Props) {
    const [state, reducer] = useReducer(contextReducer, {...initState});

    function showCart(){
        reducer({type: 'SHOW_CART', payload: null});
    }
    function hideCart(){
        reducer({type: 'HIDE_CART', payload: null});
    }
    function showCheckout(){
        reducer({type: 'SHOW_CHECKOUT', payload: null});
    }
    function hideCheckout(){
        reducer({type: 'HIDE_CHECKOUT', payload: null});
    }

    const contextValue: UserProgressContextContent = {
        ...state,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return(
        <UserProgressContext.Provider value={contextValue}>
            {children}
        </UserProgressContext.Provider>
    );
}