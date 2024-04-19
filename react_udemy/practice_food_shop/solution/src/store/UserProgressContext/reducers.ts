import {ContextReducer} from "./types";

export const showCart: ContextReducer = (state, payload) => {
    return {...state, progress: 'CART'};
}
export const hideCart: ContextReducer = (state, payload) => {
    return {...state, progress: 'NOT_SHOWN'};
}
export const showCheckout: ContextReducer = (state, payload) => {
    return {...state, progress: 'CHECKOUT'};
}
export const hideCheckout: ContextReducer = (state, payload) => {
    return {...state, progress: 'NOT_SHOWN'};
}