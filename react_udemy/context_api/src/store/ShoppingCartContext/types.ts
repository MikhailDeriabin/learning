import {Item} from "../../types/Cart";

export type ShoppingCartContextContent = {
    items: Item[];
    addItemToCart: (id: string) => void;
    updateCartItemQuantity: (productId: string, amount: number) => void;
}

export type ReducerAction = {
    type: 'ADD_ITEM' | 'UPDATE_QUANTITY';
    payload: any;
};
export type ReducerState = {
    items: Item[]
}