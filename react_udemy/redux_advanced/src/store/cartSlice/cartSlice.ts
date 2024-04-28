import {Item} from "../../type/Item";
import {createSlice} from "@reduxjs/toolkit";
import {addItemReducer, removeItemReducer, replaceCartItemsReducer} from "./reducers";

export type CartState = {
    addedItems: Item[],
    totalQuantity: number
}

const initialState: CartState = {
    addedItems: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, {payload: item}) => {
            addItemReducer(state, item);
        },
        removeItem: (state, {payload: id}) => {
            removeItemReducer(state, id);
        },
        replaceCartItems: (state, {payload: items}) => {
            replaceCartItemsReducer(state, items);
        }
    }
});

export const cart = cartSlice.actions;
export const cartReducer = cartSlice.reducer;