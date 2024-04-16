import {Meal} from "../../../types/Meal";
import {HTMLAttributes} from "react";

type Props = {
    meal: Meal;
    onIncrease: (mealId: string) => void;
    onDecrease: (mealId: string) => void;
} & HTMLAttributes<HTMLLIElement>;

export default function Item({ meal, onIncrease, onDecrease, ...props }: Props) {
    function handleIncrease(){
        onIncrease(meal.id);
    }
    function handleDecrease(){
        onDecrease(meal.id);
    }

    return(
        <li {...props}>
            {meal.name} - {meal.count} x ${meal.price}
            <div className="cart-item-actions">
                <button onClick={handleIncrease}>+</button>
                <span>{meal.count}</span>
                <button onClick={handleDecrease}>-</button>
            </div>
        </li>
    );
}