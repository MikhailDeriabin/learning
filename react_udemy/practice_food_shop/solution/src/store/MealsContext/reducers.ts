import {ContextReducer} from "./types";

export const addItem: ContextReducer = (state, payload) => {
    const itemIndex = state.items.findIndex(item => item.id === payload.id);
    const items = [...state.items];

    if (itemIndex === -1){
        items.push({...payload, count: 1});
        return {...state, items};
    }

    const oldItem = state.items[itemIndex];
    items[itemIndex] = {...oldItem, count: oldItem.count++};

    return {...state, items};
}

export const removeItem: ContextReducer = (state, payload) => {
    const itemIndex = state.items.findIndex(item => item.id === payload);
    const item = state.items[itemIndex];

    const items = [...state.items];
    if (item.count === 1) {
        items.splice(itemIndex, 1);
        return {...state, items};
    }

    items[itemIndex] = {...item, count: item.count-1};

    return {...state, items};
}