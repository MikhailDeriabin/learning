import logoImg from '../assets/logo.jpg';
import Button from "../UI/Button";

type Props = {

}

export default function Header({}: Props) {

    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="logo" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button>
            </nav>
        </header>
    );
}