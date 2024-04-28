import {configureStore, ThunkAction, UnknownAction} from "@reduxjs/toolkit";
import {cartReducer, CartState} from "./cartSlice/cartSlice";
import {uiReducers, UIState} from "./uiSlice/uiSlice";

export const store = configureStore({
   reducer: {
       cart: cartReducer,
       ui: uiReducers
   }
});



export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    UnknownAction
>
export type AppThunkAsync<ReturnType=void> = AppThunk<Promise<ReturnType>>
export type Reducer<TState> = (state: TState, payload?: any) => void;