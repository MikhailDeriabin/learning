import Modal from "../UI/Modal";
import {useContext} from "react";
import {MealsContext} from "../store/MealsContext/meals-context";
import {currencyFormatter} from "../util/formatting";
import Button from "../UI/Button";
import {UserProgressContext} from "../store/UserProgressContext/user-progress-context";
import CartItem from "./CartItem";


export default function Cart() {
    const {items, addItem, removeItem} = useContext(MealsContext);
    const {progress, showCheckout, hideCart} = useContext(UserProgressContext);

    const totalPrice = items.reduce((total, item) => total+item.price*item.count, 0);

    return(
        <Modal className="cart" open={progress === 'CART'} onClose={progress === 'CART' ? hideCart : undefined}>
            <h2>Your Cart</h2>
            <ul>
                {
                    items.map((item, index) => (
                        <CartItem key={item.id} item={item} onIncrease={addItem} onDecrease={removeItem} />)
                    )
                }
            </ul>
            <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={hideCart}>Close</Button>
                {items.length > 0 && <Button onClick={showCheckout}>Go to Checkout</Button>}
            </p>
        </Modal>
    );
}