import {useCallback, useState} from "react";
import {questions} from "../util/questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionCard from "./Question";

type Props = {

}

export type AnswerState = 'IN_PROGRESS' | 'ANSWERED' | 'CORRECT' | 'INCORRECT';

export default function Quiz({}: Props) {
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

    //We are deriving the state here instead of holding additional one
    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === questions.length;

    const handleSelectAnswer = useCallback(function (answer: string | null) {
        setUserAnswers(prevState => [...prevState, answer]);
    }, [setUserAnswers])

    const skipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    return (
        <div id="question">
            {!quizIsCompleted &&
                <QuestionCard
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={skipAnswer}
                    questions={questions}
                />
            }
            {quizIsCompleted && <div id="summary">
                <img src={quizCompleteImg} alt="Quiz Complete" />
                <h2>Quiz is completed</h2>
            </div>}
        </div>
    );
}