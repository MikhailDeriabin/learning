export type UserProgressContextState = {
    progress: 'NOT_SHOWN' | 'CART' | 'CHECKOUT'
}

export type UserProgressContextContent = {
    showCart: () => void;
    hideCart: () => void;
    showCheckout: () => void;
    hideCheckout: () => void;
} & UserProgressContextState;

export type UserProgressContextReducerAction = {
    type: 'SHOW_CART' | 'HIDE_CART' | 'SHOW_CHECKOUT' | 'HIDE_CHECKOUT';
    payload: any;
}

export type ContextReducer = (state: UserProgressContextState, payload: any) => UserProgressContextState;