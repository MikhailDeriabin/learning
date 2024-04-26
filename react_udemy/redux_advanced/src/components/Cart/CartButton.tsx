import classes from './CartButton.module.css';
import {useSelector} from "react-redux";
import {StoreT} from "../../store";

const CartButton = () => {
    const itemsCount = useSelector<StoreT, number>(state => state.cart.addedItems.length);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
