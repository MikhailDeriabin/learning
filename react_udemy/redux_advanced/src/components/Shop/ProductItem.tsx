import Card from '../UI/Card.js';
import classes from './ProductItem.module.css';
import {ProductItemT} from "../../type/Item";
import {cart, CartState} from "../../store/cartSlice/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "../../store";

type Props = {
  item: ProductItemT
}

const ProductItem = ({item}: Props) => {
  const { id, title, price, description } = item;

  const dispatch = useDispatch<AppDispatch>();

  const cartState = useSelector<AppState, CartState>(state => state.cart);

  function handleAdd(){
    //Here we are changing the app state and then for example in the App component we are using useEffect()
    //for changes in the state and sending the http request to the server.
    //With that we can easily just make state changes like that in another components
    //and the App component will handle the server logic
    dispatch(cart.addItem(item));

    //One of the approaches to send http request and update the state:
    //write updating logic in the async function in the component, make changes to the app state, send data with fetch
    //
    // const newTotalQuantity = cartState.totalQuantity + 1;
    //
    // const updatedItems = cartState.addedItems.slice();
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updatedItem = { ...existingItem };
    //   updatedItem.quantity++;
    //   updatedItem.total = updatedItem.total + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //       (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id,
    //     price,
    //     quantity: 1,
    //     total: price,
    //     title,
    //   });
    // }
    //
    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   addedItems: updatedItems,
    // };
    //
    // dispatch(cart.replaceCart(newCart));
    // fetch('some url', { method: 'POST', body: JSON.stringify(newCart) });
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
