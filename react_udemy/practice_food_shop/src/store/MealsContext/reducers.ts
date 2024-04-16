import {ContextReducer} from "./types";

export const updateMealsStatesWhenLoaded: ContextReducer = (state, payload) => {
    return {...state, ...payload};
}

export const eraseErrorLoadingMeals: ContextReducer = (state, payload) => {
    if(!state.errorLoadingMeals)
        return state;

    return {...state, errorLoadingMeals: null};
}

export const increaseMealCountBy1: ContextReducer = (state, payload) => {
    if(!state.meals || typeof payload !== 'string')
        return state;

    const newMeals = [...state.meals];
    for(let i=0, l=newMeals.length; i<l; i++) {
        const meal = newMeals[i];
        if(meal.id === payload){
            newMeals[i] = {...meal, count: meal.count++};
            break;
        }
    }

    return {...state, meals: newMeals};
}

export const decreaseMealCountBy1: ContextReducer = (state, payload) => {
    if(!state.meals || typeof payload !== 'string')
        return state;

    let didChange = false;
    const newMeals = [...state.meals];

    for(let i=0, l=newMeals.length; i<l; i++) {
        const meal = newMeals[i];
        let count = meal.count;
        if(meal.id === payload && count > 0){
            newMeals[i] = {...meal, count: --count};
            didChange = true;
            break;
        }
        if(meal.id === payload && count <= 0)
            break;
    }

    return didChange ? {...state, meals: newMeals} : state;
}