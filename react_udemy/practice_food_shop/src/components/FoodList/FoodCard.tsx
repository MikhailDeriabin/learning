import {Meal} from "../../types/Meal";
import {useContext} from "react";
import {MealsContext} from "../../store/MealsContext/meals-context";

type Props = {
    meal: Meal;
}

export default function FoodCard({ meal }: Props) {
    const {increaseMealCountBy1} = useContext(MealsContext);

    function handleAdd(){
        increaseMealCountBy1(meal.id);
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
}