import logoImg from '../assets/logo.jpg';
import Button from "../UI/Button";
import {useContext} from "react";
import {MealsContext} from "../store/MealsContext/meals-context";
import {UserProgressContext} from "../store/UserProgressContext/user-progress-context";

type Props = {

}

export default function Header({}: Props) {
    const {items} = useContext(MealsContext);
    const {showCart} = useContext(UserProgressContext);

    function handleShowCart() {
        showCart();
    }

    const itemsCount = items.reduce((total, item) => {
        return total + item.count;
    }, 0);

    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="logo" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({itemsCount})</Button>
            </nav>
        </header>
    );
}