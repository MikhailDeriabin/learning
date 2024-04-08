import {createContext, ReactNode, useReducer} from "react";
import {ReducerAction, ReducerState, ShoppingCartContextContent} from "./types";
import {handleAddItemToCart, handleUpdateCartItemQuantity} from "./reducers";


const initialContextValue: ShoppingCartContextContent = {
    items: [],
    addItemToCart: (id: string) => {return;},
    updateCartItemQuantity: (productId: string, amount: number) => {return;}
}

//Create context and save it to var
//It is basically a React component, which has the state, we are providing here
export const ShoppingCartContext = createContext<ShoppingCartContextContent>(initialContextValue);


const initialState: ReducerState = { items: [] };

function contextReducer(state: ReducerState, action: ReducerAction): ReducerState {
    switch (action.type) {
        case "ADD_ITEM":
            return handleAddItemToCart(state, action.payload);
        case "UPDATE_QUANTITY":
            return handleUpdateCartItemQuantity(state, action.payload);
        default:
            return state;
    }
}

type Props = {
    children: ReactNode
}
export default function ShoppingCartContextProvider({children}: Props) {
    const [state, dispatch] = useReducer(contextReducer, initialState);

    function handleAddItemToCart(id: string) {
        dispatch({
            type: 'ADD_ITEM',
            payload: id
        });
    }

    function handleUpdateCartItemQuantity(productId: string, amount: number) {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {productId, amount}
        });
    }

    //Here we are setting the context to pass, including state and the functions for manipulating it
    const cartContextValue: ShoppingCartContextContent = {
        items: state.items,
        addItemToCart: handleAddItemToCart,
        updateCartItemQuantity: handleUpdateCartItemQuantity
    }

    return(
        <ShoppingCartContext.Provider value={cartContextValue}>
            {children}
        </ShoppingCartContext.Provider>
    );
}