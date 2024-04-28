import classes from './CartItem.module.css';
import {Item} from "../../type/Item";
import {useDispatch} from "react-redux";
import {cart} from "../../store/cartSlice/cartSlice";
import {AppDispatch} from "../../store";

type Props = {
    item: Item
}

const CartItem = ({item}: Props) => {
  const { title, quantity, total, price } = item;

  const dispatch = useDispatch<AppDispatch>();

    function handleAdd(){
        dispatch(cart.addItem(item));
    }
  function handleRemove(){
      dispatch(cart.removeItem(item.id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
