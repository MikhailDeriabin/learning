import {Item} from "../../type/Item";
import {createSlice} from "@reduxjs/toolkit";
import {addItemReducer, removeItemReducer} from "./reducers";

export type CartState = {
    addedItems: Item[]
}

const initialState: CartState = {
    addedItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, {payload}) => {
            addItemReducer(state, payload);
        },
        removeItem: (state, {payload}) => {
            removeItemReducer(state, payload);
        }
    }
});

export const cart = cartSlice.actions;
export const cartReducer = cartSlice.reducer;