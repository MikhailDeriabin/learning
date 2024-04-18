import Header from "./components/Header";
import Meals from "./components/Meals";
import MealsProvider from "./store/MealsContext/meals-context";

export default function App() {

    return(
        <>
            <MealsProvider>
                <Header />
                <Meals/>
            </MealsProvider>
        </>
    );
}
