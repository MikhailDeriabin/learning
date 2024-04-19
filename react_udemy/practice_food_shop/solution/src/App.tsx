import Header from "./components/Header";
import Meals from "./components/Meals";
import MealsProvider from "./store/MealsContext/meals-context";
import Cart from "./components/Cart";
import UserProgressProvider from "./store/UserProgressContext/user-progress-context";
import Checkout from "./components/Checkout";

export default function App() {

    return(
        <>
            <MealsProvider>
                <UserProgressProvider>
                    <Header />
                    <Meals />
                    <Cart />
                    <Checkout />
                </UserProgressProvider>
            </MealsProvider>
        </>
    );
}
