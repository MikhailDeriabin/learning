import {createStore} from "redux";



export type State = {
    count: number;
    isCounterDisplayed: boolean;
}
type Action = {
    type: CounterA | UIA;
    payload: any;
}
export enum CounterA{
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
}
export enum UIA{
    CHANGE_COUNTER_VISIBILITY = 'CHANGE_COUNTER_VISIBILITY',
}

const initState: State = {
    count: 0,
    isCounterDisplayed: true
}


function storeReducer(state: State=initState, action: Action){
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count+(action.payload??1)};
        case 'DECREMENT':
            return {...state, count: state.count-(action.payload??1)};
        case 'CHANGE_COUNTER_VISIBILITY':
            return {...state, isCounterDisplayed: action.payload};
        default:
            return state;
    }
}

const store = createStore(storeReducer);
export default store;