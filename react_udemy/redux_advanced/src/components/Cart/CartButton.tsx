import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {ui} from "../../store/uiSlice/uiSlice";
import {AppState} from "../../store";

const CartButton = () => {
    const itemsCount = useSelector<AppState, number>(state => state.cart.addedItems?.length);

    const isCartOpen = useSelector<AppState, boolean>(state => state.ui.isCartOpen);
    const dispatch = useDispatch();

    function handleToggleCart(){
        isCartOpen ? dispatch(ui.closeCart()) : dispatch(ui.openCart());
    }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default CartButton;
