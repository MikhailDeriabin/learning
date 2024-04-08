import {Item} from "../../types/Cart";
import {DUMMY_PRODUCTS} from "../../dummy-products";
import {ReducerState} from "./types";

export function handleAddItemToCart(state: ReducerState, id: string): ReducerState {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
        const updatedItem: Item = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
    } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        if(product){
            updatedItems.push({
                id: id,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }
    }

    return { ...state, items: updatedItems };
}

export function handleUpdateCartItemQuantity(state: ReducerState, {productId, amount}: {productId: string, amount: number} ): ReducerState {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
    );

    const updatedItem = {
        ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += amount;

    if (updatedItem.quantity <= 0)
        updatedItems.splice(updatedItemIndex, 1);
    else
        updatedItems[updatedItemIndex] = updatedItem;


    return {
        ...state,
        items: updatedItems,
    };
}