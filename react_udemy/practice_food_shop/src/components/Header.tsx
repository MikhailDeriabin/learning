import logoImg from "../assets/logo.jpg";

type Props = {
    onCartClick: () => void;
}

export default function Header({ onCartClick }: Props) {
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="plate"/>
                <h1>REACTFOOD</h1>
            </div>
            <button className="cartButton" onClick={onCartClick}>Cart</button>
        </header>
    );
}