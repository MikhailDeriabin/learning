import {Meal} from "../types/Meal";
import MealItem from "./MealItem";
import {useHttp} from "../hooks/useHttp";
import ErrorCard from "../UI/ErrorCard";

type Props = {

}

export default function Meals({}: Props) {
    const {
        data: meals,
        isLoading,
        error
    } = useHttp<Meal[]>([],'http://localhost:3000/meals');

    if(isLoading)
        return <p className="center">Fetching meals...</p>

    if(error)
        return <ErrorCard message={error} title="Ups"/>

    return(
        <ul id="meals">
            {meals.map((meal: Meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}