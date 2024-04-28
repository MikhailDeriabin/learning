import {createSlice} from "@reduxjs/toolkit";
import {closeCartReducer, openCartReducer, showNotificationReducer} from "./reducers";
import {NotificationT} from "../../type/NotificationT";

export type UIState = {
    isCartOpen: boolean,
    notification: NotificationT | null
}
const initialState: UIState = {
    isCartOpen: false,
    notification: null
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
        },

        showNotification: (state, {payload: notification}) => {
            showNotificationReducer(state, notification);
        }
    }
});

export const ui = slice.actions;
export const uiReducers = slice.reducer;