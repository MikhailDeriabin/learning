import {createSlice} from "@reduxjs/toolkit";
import {closeCartReducer, openCartReducer} from "./reducers";

export type UIState = {
    isCartOpen: boolean
}
const initialState: UIState = {
    isCartOpen: false
}

const slice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openCart: (state) => {
            openCartReducer(state);
        },

        closeCart: (state) => {
            closeCartReducer(state);
        }
    }
});

export const uiActions = slice.actions;
export const uiReducers = slice.reducer;