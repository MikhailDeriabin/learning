import {Meal} from "../types/Meal";
import {currencyFormatter} from "../util/formatting";
import Button from "../UI/Button";
import {useContext} from "react";
import {MealsContext} from "../store/MealsContext/meals-context";

type Props = {
    meal: Meal;
}

export default function MealItem({meal}: Props) {

    const {addItem} = useContext(MealsContext);

    function handleAddMeal(){
        addItem(meal);
    }

    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMeal}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}