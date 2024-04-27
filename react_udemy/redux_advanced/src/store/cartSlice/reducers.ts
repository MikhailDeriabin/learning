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

    const existingItem = state.addedItems.find(i => i.title === parsedItem.title);
    if(!existingItem){
        const itemToAdd: Item = {...parsedItem, total: parsedItem.price, quantity: 1};
        state.addedItems.push(itemToAdd);
        return;
    }

    existingItem.quantity++;
    existingItem.total += parsedItem.price;
}

export const removeItemReducer: CartReducer = (state, title) => {
    if(!title || typeof title !== 'string')
        return;

    const existingItem = state.addedItems.find(i => i.title === title);
    if(!existingItem)
        return;

    if(existingItem.quantity <= 1){
        state.addedItems = state.addedItems.filter(i => i.title !== title);
        return;
    }

    existingItem.quantity--;
    existingItem.total -= existingItem.price;
}