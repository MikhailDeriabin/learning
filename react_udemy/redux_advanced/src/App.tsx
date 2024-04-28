import CartCard from './components/Cart/CartCard';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "./store";
import {Item} from "./type/Item";
import {useEffect} from "react";
import {NotificationT} from "./type/NotificationT";
import Notification from "./components/UI/Notification";
import {getItemsData, sendItemsData} from "./store/thunks/cart";
import {cart} from "./store/cartSlice/cartSlice";

let isInitial = true;

function App() {
    const items = useSelector<AppState, Item[]>(state => state.cart.addedItems);
    const notification = useSelector<AppState, NotificationT | null>(state => state.ui.notification);
    const dispatch = useDispatch<AppDispatch>();

    //Here we are sending the changed data to the server, when it is changed = dispatch() was called
    useEffect(() => {
        async function sendItems(){
            if(isInitial){
                isInitial = false;
                return;
            }

            //Call thunk function
            dispatch(sendItemsData(items));
        }

        sendItems();
    }, [items]);

    useEffect(() => {
        async function getItems(){
            //Call thunk function
            const data = await dispatch(getItemsData());
            dispatch(cart.replaceCartItems(data));
        }

        getItems();
    }, []);

  return (
      <>
          {notification && <Notification notification={notification}/>}
          <Layout>
              <CartCard />
              <Products />
          </Layout>
      </>

  );
}

export default App;
