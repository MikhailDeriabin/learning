import {useEffect, useState} from "react";
import {Meal} from "../types/Meal";
import MealItem from "./MealItem";

type Props = {

}

export default function Meals({}: Props) {
    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        async function fetchMeals(){
            try {
                const resp = await fetch('http://localhost:3000/meals');
                if(!resp.ok)
                    throw new Error('Meals could not be loaded');

                const meals = await resp.json();
                setMeals(meals);
            } catch (e){
                console.error(e);
            }
        }

        fetchMeals();
    }, []);



    return(
        <ul id="meals">
            {meals.map((meal: Meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}