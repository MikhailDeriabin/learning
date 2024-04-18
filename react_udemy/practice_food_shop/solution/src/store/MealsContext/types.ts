import {Meal} from "../../types/Meal";

export type MealsContextState = {
    items: Meal[];
}

export type MealsContextContent = {
    addItem: (item: Meal) => void;
    removeItem: (id: string) => void;
} & MealsContextState;

export type MealsContextReducerAction = {
    type: 'ADD_ITEM' | 'REMOVE_ITEM';
    payload: any;
}

export type ContextReducer = (state: MealsContextState, payload: any) => MealsContextState;