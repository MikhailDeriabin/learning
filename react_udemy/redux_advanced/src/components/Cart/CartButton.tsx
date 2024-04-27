import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {StoreT} from "../../store";
import {uiActions} from "../../store/uiSlice/uiSlice";

const CartButton = () => {
    const itemsCount = useSelector<StoreT, number>(state => state.cart.addedItems.length);

    const isCartOpen = useSelector<StoreT, boolean>(state => state.ui.isCartOpen);
    const dispatch = useDispatch();

    function handleToggleCart(){
        isCartOpen ? dispatch(uiActions.closeCart()) : dispatch(uiActions.openCart());
    }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
