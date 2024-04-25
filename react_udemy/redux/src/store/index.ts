import {configureStore} from "@reduxjs/toolkit";
import {counterReducer, CounterState} from "./counterSlice";
import {uiReducer, UIState} from "./uiSlice";
import {authReducer, AuthState} from "./authSlice";


export type State = { counter: CounterState; ui: UIState; auth: AuthState };
const store = configureStore<State>({
    reducer: {
        counter: counterReducer,
        ui: uiReducer,
        auth: authReducer
    }
});

export default store;