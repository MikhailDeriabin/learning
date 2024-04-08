import QuizContextProvider from "./store/QuizContext/quiz-context";
import Quiz from "./components/Quiz";
import Header from "./components/Header";

function App() {
    return(
        <>
            <Header title="REACTQUIZ" />
            <QuizContextProvider>
                <Quiz />
            </QuizContextProvider>
        </>
    );
}

export default App;
