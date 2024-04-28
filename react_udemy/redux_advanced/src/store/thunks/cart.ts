import {Item} from "../../type/Item";
import {AppThunkAsync} from "../index";
import {ui} from "../uiSlice/uiSlice";
import {makeServerReq} from "./makeServerReq";

//Here is another trick. U can create so-called thunk and move logic from component to some another place
//The redux is returning such functions for u, when u call slice.actions.
//So, u may create such functions
export const sendItemsData = (items: Item[]): AppThunkAsync => {
    return async (dispatch) => {
        dispatch(ui.showNotification({status: 'pending', title: 'Sending...', message: 'Sending cart data'}));

        try{
            const data = await makeServerReq('/cart.json', 'put', items);
            dispatch(ui.showNotification({status: 'success', title: 'Sent', message: 'Successfully sent cart data!'}));
        } catch(e){
            dispatch(ui.showNotification({status: 'error', title: 'Error', message: 'Sending cart data failed!'}));
        }
        dispatch(ui.showNotification(null));
    }
}

export const getItemsData = (): AppThunkAsync<Item[] | null> => {
    return async (dispatch) => {
        dispatch(ui.showNotification({status: 'pending', title: 'Loading...', message: 'Loading items'}));

        try{
            const data = await makeServerReq('/cart.json');
            dispatch(ui.showNotification({status: 'success', title: 'Loaded', message: 'Successfully loaded items!'}));
            dispatch(ui.showNotification(null));
            return data as Item[];
        } catch(e){
            dispatch(ui.showNotification({status: 'error', title: 'Error', message: 'getting items data failed!'}));
        }
        dispatch(ui.showNotification(null));
        return null;
    }
}