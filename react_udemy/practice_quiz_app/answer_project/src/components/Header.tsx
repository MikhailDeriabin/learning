import logo from '../assets/quiz-logo.png';

type Props = {

}

export default function Header({}: Props) {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <h1>ReactQuiz</h1>
        </header>
    );
}