import {createStore} from "redux";

//"start": "npx tsc && node ./dist/reduxDemo.js"

type StoreState = {
    counter: number;
}
const initialState: StoreState = {
    counter: 0
};

type StoreAction = {
    type: 'INCREMENT' | 'DECREMENT';
}

//Reducer function for mutating the state of the store
//It will always receive the input: old state and action(what need to be done with state)
//It must return updated state, and it must be a pure function (same output on same input all the time, no side effects such as sending HTTP req)
const counterReducer = (state: StoreState = initialState, action: StoreAction): StoreState => {
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter+1
        }
    }

    if(action.type === 'DECREMENT') {
        return {
            counter: state.counter-1
        }
    }

    //If no changes return state with no changes
    return state;
}

//On creation there will be created an init state
const store = createStore(counterReducer);

//Listener for store changes
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

//Register the listener, function, which will be called on each store change
store.subscribe(counterSubscriber);

//call an action = tell what u need to do. It will call the reducer function
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});