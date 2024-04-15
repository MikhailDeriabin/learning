import {Meal} from "../../types/Meal";
import {RequestError} from "../../hooks/requestApi/useGetData/Error";

export type MealsContextState = {
    meals: Meal[] | null;
    areMealsLoading: boolean;
    errorLoadingMeals: RequestError | null;
}

export type MealsContextContent = {
    eraseErrorLoadingMeals: () => void;

    increaseMealCountBy1: (mealId: string) => void;
    decreaseMealCountBy1: (mealId: string) => void;
} & MealsContextState;

export type MealsContextReducerAction = {
    type:
        'ERASE_ERROR_LOADING_MEALS' |
        'INCREASE_MEAL_COUNT' |
        'DECREASE_MEAL_COUNT' |
        'UPDATE_MEALS_STATES_WHEN_LOADED';
    payload: any;
}

export type ContextReducer = (state: MealsContextState, payload: any) => MealsContextState;