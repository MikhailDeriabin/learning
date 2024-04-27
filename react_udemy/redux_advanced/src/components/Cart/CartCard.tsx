import Card from '../UI/Card.js';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {Item} from "../../type/Item";
import {StoreT} from "../../store";


const CartCard = () => {
    const items = useSelector<StoreT, Item[]>(state => state.cart.addedItems);
    const isCartOpen = useSelector<StoreT, boolean>(state => state.ui.isCartOpen);

    if(!isCartOpen)
        return <></>;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
        {(items && items.length > 0) &&
            <ul>
                {items.map(i => (
                    <CartItem
                        key={i.title}
                        item={i}
                    />
                ))}
            </ul>
        }

        {(!items || items.length === 0) && <p>No items added yet</p>}
    </Card>
  );
};

export default CartCard;
