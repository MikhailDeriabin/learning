import {Reducer} from "../index";
import {UIState} from "./uiSlice";

type UIReducer = Reducer<UIState>;

export const openCartReducer: UIReducer = (state) => {
    state.isCartOpen = true;
}

export const closeCartReducer: UIReducer = (state) => {
    state.isCartOpen = false;
}