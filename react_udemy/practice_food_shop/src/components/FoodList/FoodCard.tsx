import {Meal} from "../../types/Meal";
import {memo} from "react";

type Props = {
    meal: Meal;
    onAddMeal: (mealId: string) => void;
}

const FoodCard =memo(function ({ meal, onAddMeal }: Props) {
    function handleAdd(){
        onAddMeal(meal.id);
    }

    return(
        <div className="meal-item">
            <img alt="food" src={meal.image}/>
            <article>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">${meal.price}</p>
                <p className="meal-item-description">{meal.description}</p>
                <div className="meal-item-actions">
                    <button onClick={handleAdd}>Add to Cart</button>
                </div>
            </article>
        </div>
    );
});

export default FoodCard;