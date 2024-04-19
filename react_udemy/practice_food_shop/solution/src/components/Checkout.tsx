import Modal from "../UI/Modal";
import {FormEvent, useContext} from "react";
import {MealsContext} from "../store/MealsContext/meals-context";
import {currencyFormatter} from "../util/formatting";
import Button from "../UI/Button";
import {UserProgressContext} from "../store/UserProgressContext/user-progress-context";
import Input from "../UI/Input";
import {useHttp} from "../hooks/useHttp";
import ErrorCard from "../UI/ErrorCard";

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

export default function Checkout() {
    const {items} = useContext(MealsContext);
    const {progress, hideCheckout} = useContext(UserProgressContext);

    const {isLoading, error, sendRequest} = useHttp<null>(null, 'http://localhost:3000/orders', config);

    async function handleCheckout(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const customerData: Record<string, string | string[] | object> = {};
        for (let [key, value] of fd.entries())
            customerData[key] = value;

        await sendRequest({order: {items, ...customerData}});
    }

    const totalPrice = items.reduce((total, item) => total+item.price*item.count, 0);

    return(
        <Modal className="cart" open={progress === 'CHECKOUT'} onClose={progress === 'CHECKOUT' ? hideCheckout : undefined}>
            <form onSubmit={handleCheckout}>
                <h2>Checkout</h2>
                <p className="cart-total">Total price: {currencyFormatter.format(totalPrice)}</p>

                <Input label="Full Name" id="name" type="text" required/>
                <Input label="E-Mail Address" id="email" type="email" required/>
                <Input label="Street" id="street" type="text" required/>

                <div className="control-row">
                    <Input label="Postal Code" id="postal-code" type="text" required/>
                    <Input label="City" id="city" type="text" required/>
                </div>

                {error && <ErrorCard title="Can not make an order" message={error}/>}
                {!isLoading && <p className="modal-actions">
                    <Button type="button" textOnly onClick={hideCheckout}>Close</Button>
                    <Button>Submit Order</Button>
                </p>}
                {isLoading && <p>Sending data...</p>}
            </form>
        </Modal>
    );
}