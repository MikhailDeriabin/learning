import {configureStore} from "@reduxjs/toolkit";
import {cartReducer, CartState} from "./cartSlice/cartSlice";

export type StoreT = {
    cart: CartState
};

export type Reducer<TState> = (state: TState, payload: any) => void;

export const store = configureStore<StoreT>({
   reducer: {
       cart: cartReducer
   }
});