import logo from '../assets/quiz-logo.png';

type Props = {
    title: string;
}
export default function Header({title}:Props) {
    return(
        <header>
            <img src={logo} alt="logo"/>
            <h1>{title}</h1>
        </header>
    );
}