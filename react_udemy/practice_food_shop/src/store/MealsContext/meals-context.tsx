import {createContext, ReactNode, useCallback, useEffect, useReducer} from "react";
import {MealsContextContent, MealsContextReducerAction, MealsContextState} from "./types";
import {
    decreaseMealCountBy1,
    eraseErrorLoadingMeals,
    increaseMealCountBy1,
    updateMealsStatesWhenLoaded
} from "./reducers";
import useGetData from "../../hooks/requestApi/useGetData/useGetData";
import {Meal} from "../../types/Meal";
import {defaultReducer, generateInitStateAndContent} from "./util";
import getUrl from "../../hooks/requestApi/getUrl";

const [initState, initContent] = generateInitStateAndContent<MealsContextState, MealsContextContent>(
    'MealsContext',
    {
        meals: [],
        errorLoadingMeals: null,
        areMealsLoading: false
    },
    {
        eraseErrorLoadingMeals: null,
        increaseMealCountBy1: null,
        decreaseMealCountBy1: null
    }
);

export const MealsContext = createContext<MealsContextContent>(initContent);

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
            return defaultReducer(state, action.type);
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

    const [state, reducer] = useReducer(contextReducer, {...initState, meals});

    function updateMealsStatesWhenLoaded(){
        const mealsWithCount = meals?.map(m => {
            return {...m, count: 0, image: getUrl(m.image)};
        });
        reducer({type: 'UPDATE_MEALS_STATES_WHEN_LOADED', payload: {meals: mealsWithCount, errorLoadingMeals, areMealsLoading}});
    }

    const eraseErrorLoadingMeals = useCallback(function (){
        reducer({type: 'ERASE_ERROR_LOADING_MEALS', payload: null});
    }, [])

    const increaseMealCountBy1 = useCallback(function (mealId: string){
        reducer({type: 'INCREASE_MEAL_COUNT', payload: mealId});
    }, []);

    const decreaseMealCountBy1 = useCallback(function (mealId: string){
        reducer({type: 'DECREASE_MEAL_COUNT', payload: mealId});
    }, []);

    const contextValue: MealsContextContent = {
        ...state,
        eraseErrorLoadingMeals,
        increaseMealCountBy1,
        decreaseMealCountBy1,
    }
    return(
        <MealsContext.Provider value={contextValue}>
            {children}
        </MealsContext.Provider>
    );
}