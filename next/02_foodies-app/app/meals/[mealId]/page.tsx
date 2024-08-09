type Props = {
    params: { mealId: string }
}
export default function functionMealPage({ params }: Props){
    return (
        <>
            <h1>Description for meal {params.mealId}</h1>
        </>
    );
}