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

    for (let i = 0, l=state.addedItems.length; i<l; i++) {
        const curItem = state.addedItems[i];
        if(curItem.title === parsedItem.title){
            curItem.quantity++;
            curItem.total += parsedItem.price;
            break;
        }
    }
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

    for (let i = 0, l=state.addedItems.length; i<l; i++) {
        const curItem = state.addedItems[i];
        if(curItem.title === title){
            curItem.quantity--;
            curItem.total -= curItem.price;
            break;
        }
    }
}