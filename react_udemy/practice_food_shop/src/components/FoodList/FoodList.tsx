import {Meal} from "../../types/Meal";
import FoodCard from "./FoodCard";
import getUrl from "../../hooks/getUrl";
import {useContext} from "react";
import {MealsContext} from "../../store/MealsContext/meals-context";


export default function FoodList() {
    const {meals, areMealsLoading: isLoading, errorLoadingMeals: error} = useContext(MealsContext);

    if(error)
        return (<p>Error occurred during loading: {error.message}. Please, try again later</p>);

    if(!meals || isLoading)
        return (<p>Loading meals...</p>);

    if(meals.length === 0)
        return (<p>No meals found</p>);

    return (
        <div id="meals">
            {
                meals.map((meal: Meal) => ((
                    <FoodCard key={meal.id} meal={{...meal, image: getUrl(meal.image)}}/>
                )))
            }
        </div>
    );
}