import {Meal} from "../../types/Meal";
import FoodCard from "./FoodCard";
import getUrl from "../../hooks/getUrl";
import useGetData from "../../hooks/requestApi/useGetData/useGetData";

type Props = {
}

export default function FoodList({ }: Props) {
    const {
        isLoadingS: isLoading,
        dataS: meals,
        setDataS: setMeals,
        errorS: error,
        setErrorS: setError
    } = useGetData<Meal[] | null>(null, '/meals');

    if(error)
        return (<p>Error occurred during loading: {error.message}. Please, try again later</p>);

    if(isLoading)
        return (<p>Loading meals...</p>);

    if(!meals || meals.length === 0)
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