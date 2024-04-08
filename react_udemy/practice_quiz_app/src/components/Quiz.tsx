import QuestionCard from "./Question/QuestionCard";
import ResultCard from "./Result/ResultCard";
import {useContext} from "react";
import {QuizContext} from "../store/QuizContext/quiz-context";

export default function Quiz() {
    const {currentQuestion} = useContext(QuizContext);

    return(
        <>
            {currentQuestion && <QuestionCard/>}
            {!currentQuestion && <ResultCard/>}
        </>
    );
}