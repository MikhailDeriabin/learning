import {createSlice} from "@reduxjs/toolkit";

export type UIState = { isCounterDisplayed: boolean };
const uiStateInit: UIState = { isCounterDisplayed: true };
const uiSlice = createSlice({
    name: 'ui',
    initialState: uiStateInit,
    reducers: {
        changeCounterVisibility(state, {payload}) {
            state.isCounterDisplayed = payload
        }
    }
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;