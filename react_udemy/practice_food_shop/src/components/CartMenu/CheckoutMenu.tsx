import {Order} from "../../types/Order";
import {FormEvent, useRef, useState} from "react";
import Input, {InputRef} from "../shared/Input/Input";
import {isEmail, isNotEmpty} from "../../util/validation";
import {Meal} from "../../types/Meal";

function validateEmail(email: string) {
    return !isEmail(email) ? 'Invalid email address' : '';
}
function validateNotEmpty(email: string) {
    return !isNotEmpty(email) ? 'Field is required' : '';
}

async function sendOrderData(order: Order) {
    try {
        const resp = await fetch('http://localhost:3000/orders', {
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({order})
        });

        return resp.ok;
    } catch (e){
        console.error(e);
        return false;
    }
}

type Props = {
    meals: Meal[] | undefined;
    totalPrice: number;
    onGoToItems: () => void;
    onCloseModal: () => void;
}

const Field: Record<keyof Order, string> = {
    email: 'email',
    name: 'name',
    street: 'street',
    ['postal-code']: 'postal-code',
    city: 'city',
    items: 'items'
};

export default function CheckoutMenu({ meals, totalPrice, onGoToItems, onCloseModal }: Props) {
    const nameRef = useRef<InputRef>(null);
    const emailRef = useRef<InputRef>(null);
    const streetRef = useRef<InputRef>(null);
    const codeRef = useRef<InputRef>(null);
    const cityRef = useRef<InputRef>(null);

    const [formError, setFormError] = useState<string>('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormError('');
        const inputs = [nameRef, emailRef, streetRef, codeRef, cityRef];
        const formData: Record<string, string> = {};
        const errorsFound: Record<string, string> = {};
        for(let i=0, len = inputs.length; i < len; i++){
            const input = inputs[i].current;
            if(!input)
                continue;
            const error = input.validate();
            if(error)
                errorsFound[input.id] = error;
            else
                formData[input.id] = input.value;
        }

        if(Object.keys(errorsFound).length > 0){
            setFormError('Please check provided data');
            return;
        }

        const orderItems = meals?.map(meal => meal.id);
        if(!orderItems || orderItems.length === 0){
            setFormError('There are no meals added to this order');
            return;
        }

        const order: Order = {...formData, items: orderItems} as Order;
        const isSuccess = await sendOrderData(order);
        isSuccess ? onCloseModal() : setFormError('Could not send your order');
    }

    return(
        <div>
            <h2>Checkout</h2>
            <p>Total Amount: ${totalPrice}</p>
            <form className="" onSubmit={handleSubmit}>
                <Input ref={nameRef} className="control" id={Field.name} label={Field.name} placeholder="John"
                       validator={validateNotEmpty}/>
                <Input ref={emailRef} className="control" id={Field.email} label={Field.email}
                       placeholder="john@mail.com" validator={validateEmail}/>
                <Input ref={streetRef} className="control" id={Field.street} label={Field.street}
                       placeholder="Johnstreet 23" validator={validateNotEmpty}/>
                <div className="control-row">
                    <Input ref={codeRef} className="control" id={Field["postal-code"]} label={Field["postal-code"]}
                           placeholder="00000" validator={validateNotEmpty}/>
                    <Input ref={cityRef} className="control" id={Field.city} label={Field.city} placeholder="Helsinki"
                           validator={validateNotEmpty}/>
                </div>

                <div className="modal-actions">
                    <button className="text-button" onClick={onCloseModal}>Close</button>
                    <button className="text-button" onClick={onGoToItems}>Back</button>
                    <button type="submit" className="button">Submit Order</button>
                </div>
            </form>
            {formError && <p>{formError}</p>}
        </div>
    );
}