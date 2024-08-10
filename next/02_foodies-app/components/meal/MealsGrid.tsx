import { Meal } from "@/types/Meal";
import classes from './MealsGrid.module.css';
import MealItem from "./MealItem";

type Props = {
    meals: Meal[]
}
export default function MealsGrid({ meals }: Props) {
    return(
        <ul className={classes.meals}>
            {meals.map((meal) => <li key={meal.id}><MealItem {...meal} /></li>)}
        </ul>
    );
}