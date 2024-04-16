import {HTMLAttributes, useContext} from "react";
import {MealsContext} from "../../../store/MealsContext/meals-context";
import {Meal} from "../../../types/Meal";
import Item from "./Item";

type Props = {
    meals: Meal[] | undefined;
    totalPrice: number;
    onGoToCheckout: () => void;
    onCloseModal: () => void;
} & HTMLAttributes<HTMLDivElement>;

export default function CartItemsMenu({meals, totalPrice, onGoToCheckout, onCloseModal, ...props }: Props) {
    const {increaseMealCountBy1, decreaseMealCountBy1} = useContext(MealsContext);

    function handleIncreaseMealCount(mealId: string){
        increaseMealCountBy1(mealId);
    }
    function handleDecreaseMealCount(mealId: string){
        decreaseMealCountBy1(mealId);
    }

    const areMealsFound = meals && meals.length !== 0;

    return(
        <div {...props}>
            <h2>Your Cart</h2>
            <ul>
                {
                    areMealsFound ?
                        meals.map((meal: Meal) => (
                            <Item
                                key={meal.id}
                                className="cart-item"
                                meal={meal}
                                onIncrease={handleIncreaseMealCount}
                                onDecrease={handleDecreaseMealCount}
                            />
                        ))
                        :
                        <p>No meals added yet</p>
                }
            </ul>
            {totalPrice !== 0 ? <p>${totalPrice}</p> : ''}
            <div className="modal-actions">
                <button className="text-button" onClick={onCloseModal}>Close</button>
                <button className="button" onClick={onGoToCheckout} disabled={!areMealsFound}>Go to Checkout</button>
            </div>

        </div>
    );
}