import {createSlice} from "@reduxjs/toolkit";

export type CounterState = { count: number };
const counterInit: CounterState = { count: 0 };
//Slice - part of global state
const counterSlice = createSlice({
    name: 'count',
    initialState: counterInit,
    reducers: {
        //U can "mutate" the state here, because toolkit make sure that the state is not actually mutated under the hood
        increment(state, {payload}) {
            state.count += payload ?? 1;
        },
        decrement(state, {payload}) {
            state.count -= payload ?? 1;
        }
    }
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;