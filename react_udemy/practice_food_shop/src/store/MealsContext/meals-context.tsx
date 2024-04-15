import {createContext, ReactNode, useEffect, useReducer} from "react";
import {MealsContextContent, MealsContextReducerAction, MealsContextState} from "./types";
import {
    decreaseMealCountBy1,
    eraseErrorLoadingMeals,
    increaseMealCountBy1,
    updateMealsStatesWhenLoaded
} from "./reducers";
import useGetData from "../../hooks/requestApi/useGetData/useGetData";
import {Meal} from "../../types/Meal";


const initialState: MealsContextState = {
    meals: [],
    errorLoadingMeals: null,
    areMealsLoading: false
};
const initialContextContent: MealsContextContent = {
    ...initialState,
    eraseErrorLoadingMeals: () => {console.error('MealsContext is not available'); return;},

    increaseMealCountBy1: (mealId: string) => {console.error('MealsContext is not available'); return;},
    decreaseMealCountBy1: (mealId: string) => {console.error('MealsContext is not available'); return;}
};
export const MealsContext = createContext<MealsContextContent>(initialContextContent);

function contextReducer(state: MealsContextState, action: MealsContextReducerAction){
    switch (action.type) {
        case "UPDATE_MEALS_STATES_WHEN_LOADED":
            return updateMealsStatesWhenLoaded(state, action.payload);
        case 'ERASE_ERROR_LOADING_MEALS':
            return eraseErrorLoadingMeals(state, action.payload);
        case 'INCREASE_MEAL_COUNT':
            return increaseMealCountBy1(state, action.payload);
        case 'DECREASE_MEAL_COUNT':
            return decreaseMealCountBy1(state, action.payload);
        default:
            return state;
    }
}
type Props = {
    children: ReactNode
}

export default function MealsProvider ({ children }: Props) {
    const {
        isLoadingS: areMealsLoading,
        dataS: meals,
        errorS: errorLoadingMeals
    } = useGetData<Meal[] | null>(null, '/meals');

    //Update reducer state, because we are getting basically separate state from the useGetData() hook.
    //And reducer can not see any changes
    useEffect(() => {
        updateMealsStatesWhenLoaded();
    }, [areMealsLoading]);

    const [state, reducer] = useReducer(contextReducer, {...initialState, meals});

    function updateMealsStatesWhenLoaded(){
        reducer({type: 'UPDATE_MEALS_STATES_WHEN_LOADED', payload: {meals, errorLoadingMeals, areMealsLoading}});
    }

    function eraseErrorLoadingMeals(){
        reducer({type: 'ERASE_ERROR_LOADING_MEALS', payload: null});
    }

    function increaseMealCountBy1(mealId: string){
        reducer({type: 'INCREASE_MEAL_COUNT', payload: mealId});
    }

    function decreaseMealCountBy1(mealId: string){
        reducer({type: 'DECREASE_MEAL_COUNT', payload: mealId});
    }

    const contextValue: MealsContextContent = {
        ...state,
        eraseErrorLoadingMeals,
        increaseMealCountBy1,
        decreaseMealCountBy1
    }
    return(
        <MealsContext.Provider value={contextValue}>
            {children}
        </MealsContext.Provider>
    );
}