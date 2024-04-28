import {Reducer} from "../index";
import {CartState} from "./cartSlice";
import {Item, ProductItemT} from "../../type/Item";

type CartReducer = Reducer<CartState>;

export const addItemReducer: CartReducer = (state, item) => {
    if(!item)
        return;

    const parsedItem = item as ProductItemT;
    if(!parsedItem)
        return;

    state.totalQuantity++;

    const existingItem = state.addedItems.find(i => i.id === parsedItem.id);
    if(!existingItem){
        const itemToAdd: Item = {...parsedItem, total: parsedItem.price, quantity: 1};
        state.addedItems.push(itemToAdd);
        return;
    }

    existingItem.quantity++;
    existingItem.total += parsedItem.price;
}

export const removeItemReducer: CartReducer = (state, id) => {
    if(!id || typeof id !== 'string')
        return;

    const existingItem = state.addedItems.find(i => i.id === id);
    if(!existingItem)
        return;

    state.totalQuantity--;

    if(existingItem.quantity <= 1){
        state.addedItems = state.addedItems.filter(i => i.id !== id);
        return;
    }

    existingItem.quantity--;
    existingItem.total -= existingItem.price;
}

export const replaceCartItemsReducer: CartReducer = (state, items) => {
    if(!items)
        return;

    const newItems = items as Item[];
    if(!newItems || !Array.isArray(newItems))
        return;

    state.addedItems = newItems;
}