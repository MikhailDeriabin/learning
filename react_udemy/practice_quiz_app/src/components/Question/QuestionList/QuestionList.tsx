import {useContext, useState} from "react";
import {QuizContext} from "../../../store/QuizContext/quiz-context";
import QuestionItem from "./QuestionItem";
import ProgressBar from "../../shared/ProgressBar";
import {UserAnswer} from "../../../store/QuizContext/types";

type Props = {

}
export default function QuestionList({}:Props) {
    const [userAnswer, setUserAnswer] = useState<UserAnswer | null>(null);

    const {currentQuestion, addUserAnswer, nextQuestion, isAnswerRight} = useContext(QuizContext);

    function handleAnswerClick(answer: string) {
        if(currentQuestion){
            const givenAnswer: UserAnswer = {questionId: currentQuestion.id, answer};
            setUserAnswer(givenAnswer);
            addUserAnswer(givenAnswer);
        }

        nextQuestion();
    }

    function determineBg(answer: string): boolean | null{
        if(!userAnswer || userAnswer.answer !== answer)
            return null;

        return  isAnswerRight(userAnswer);
    }

    return(
        <div>
            {currentQuestion && <ProgressBar key={currentQuestion.id} maxMs={2000} onEnd={nextQuestion}/>}
            <p>{currentQuestion ? currentQuestion.text : "Unable to find the question"}</p>
            <ul>
                {currentQuestion?.answers.map((answer) => {
                    return (
                        <QuestionItem
                            isRight={determineBg(answer)}
                            key={answer}
                            answer={answer}
                            onClick={handleAnswerClick}
                        />
                    );
                })}
            </ul>
        </div>
    );
}