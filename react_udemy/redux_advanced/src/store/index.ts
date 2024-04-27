import {configureStore} from "@reduxjs/toolkit";
import {cartReducer, CartState} from "./cartSlice/cartSlice";
import {uiReducers, UIState} from "./uiSlice/uiSlice";

export type StoreT = {
    cart: CartState,
    ui: UIState
};

export type Reducer<TState> = (state: TState, payload?: any) => void;

export const store = configureStore<StoreT>({
   reducer: {
       cart: cartReducer,
       ui: uiReducers
   }
});