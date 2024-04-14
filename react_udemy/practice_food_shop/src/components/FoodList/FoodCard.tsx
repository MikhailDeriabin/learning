import {Meal} from "../../types/Meal";

type Props = {
    meal: Meal;
}

export default function FoodCard({ meal }: Props) {
    return(
        <div className="meal-item">
            <img alt="food" src={meal.image}/>
            <article>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">${meal.price}</p>
                <p className="meal-item-description">{meal.description}</p>
                <div className="meal-item-actions">
                    <button>Add to Cart</button>
                </div>
            </article>
        </div>
    );
}