import FoodList from "./components/FoodList/FoodList";
import Header from "./components/Header";
import MealsProvider from "./store/MealsContext/meals-context";

export default function App() {
    return(
        <>
            <Header onCartClick={()=> {}}/>
            <MealsProvider>
                <main>
                    <FoodList />
                </main>
            </MealsProvider>
        </>
    );
}
