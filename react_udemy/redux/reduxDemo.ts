import {createStore} from "redux";

type StoreState = {
    counter: number;
}
const initialState: StoreState = {
    counter: 0
};

type StoreAction = {
    type: string;
}

//Reducer function for mutating the state of the store
//It will always receive the input: old state and action(what need to be done with state)
//It must return updated state, and it must be a pure function (same output on same input all the time, no side effects such as sending HTTP req)
const counterReducer = (state: StoreState = initialState, action: StoreAction): StoreState => {
    return {
        counter: state.counter+1
    };
}

//On creation there will be created an init state
const store = createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch({type: 'INCREMENT'});