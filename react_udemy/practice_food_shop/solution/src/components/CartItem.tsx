import {Meal} from "../types/Meal";
import {currencyFormatter} from "../util/formatting";

type Props = {
    item: Meal;
    onIncrease: (item: Meal) => void;
    onDecrease: (id: string) => void;
}

export default function CartItem({item, onIncrease, onDecrease}: Props) {
    function handleAdd(){
        onIncrease(item);
    }

    function handleRemove(){
        onDecrease(item.id);
    }

    return(
        <li key={item.id} className="cart-item">
            <p>{item.name} - {item.count} x {currencyFormatter.format(item.price)}</p>
            <p className="cart-item-actions">
                <button onClick={handleRemove}>-</button>
                <span>{item.count}</span>
                <button onClick={handleAdd}>+</button>
            </p>
        </li>
    );
}