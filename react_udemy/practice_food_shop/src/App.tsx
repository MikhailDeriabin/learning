import FoodList from "./components/FoodList/FoodList";
import Header from "./components/Header";
import MealsProvider from "./store/MealsContext/meals-context";
import CartMenu, {CartMenuRef} from "./components/CartMenu/CartMenu";
import {useRef} from "react";

export default function App() {
    const cartMenuRef = useRef<CartMenuRef>(null);

    function handleOpenCartMenu() {
        cartMenuRef.current?.open();
    }

    return(
        <>
            <Header onCartClick={handleOpenCartMenu}/>
            <MealsProvider>
                <main>
                    <FoodList />
                </main>
                <CartMenu ref={cartMenuRef}/>
            </MealsProvider>
        </>
    );
}
