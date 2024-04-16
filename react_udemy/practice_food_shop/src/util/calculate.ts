import {Meal} from "../types/Meal";

export function getTotalOrdersSum(meals: Meal[]){
    let totalPrice = 0;
    for(let i=0, l=meals.length; i<l; i++){
        const meal = meals[i];
        totalPrice += meal.price*meal.count;
    }

    return totalPrice;
}