import {Order} from "../../types/Order";
import {FormEvent, useRef} from "react";
import Input from "../shared/Input/Input";
import {isEmail, isNotEmpty} from "../../util/validation";
import {Meal} from "../../types/Meal";

function validateEmail(email: string) {
    return !isEmail(email) ? 'Invalid email address' : '';
}
function validateNotEmpty(email: string) {
    return !isNotEmpty(email) ? 'Field is required' : '';
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
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const codeRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const name = nameRef.current?.value;

        const orderItems = meals?.map(meal => meal.id);
    }

    return(
        <div>
            <h2>Checkout</h2>
            <p>Total Amount: ${totalPrice}</p>
            <form className="" onSubmit={handleSubmit}>
                <Input ref={nameRef} className="control" id={Field.name} label={Field.name} placeholder="John" validator={validateNotEmpty}/>
                <Input ref={emailRef} className="control" id={Field.email} label={Field.email} placeholder="john@mail.com" validator={validateEmail}/>
                <Input ref={streetRef} className="control" id={Field.street} label={Field.street} placeholder="Johnstreet 23" validator={validateNotEmpty}/>
                <div className="control-row">
                    <Input ref={codeRef} className="control" id={Field["postal-code"]} label={Field["postal-code"]} placeholder="00000" validator={validateNotEmpty}/>
                    <Input ref={cityRef} className="control" id={Field.city} label={Field.city} placeholder="Helsinki" validator={validateNotEmpty}/>
                </div>
            </form>

            <div className="modal-actions">
                <button className="text-button" onClick={onCloseModal}>Close</button>
                <button className="text-button" onClick={onGoToItems}>Back</button>
                <button className="button" onClick={onGoToItems}>Submit Order</button>
            </div>
        </div>
    );
}