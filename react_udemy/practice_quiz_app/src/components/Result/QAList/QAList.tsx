import {useContext} from "react";
import {QuizContext} from "../../../store/QuizContext/quiz-context";
import {Question} from "../../../types/question";
import QAItem from "./QAItem";

type Props = {

}
export default function QAList({}: Props) {
    const { getQuestions, userAnswers, isAnswerRight } = useContext(QuizContext);

    function getQuestionAnswerIsRight(question: Question) {
        const userAnswer = userAnswers.find(a => a.questionId === question.id);

        if(!userAnswer || userAnswer.answer === null)
            return {question: question.text, answer: null, isRight: false};

        return {question: question.text, answer: userAnswer.answer, isRight: isAnswerRight(userAnswer)};
    }

    return(
        <ul>
            {getQuestions().map((question: Question, index) => {
               return <QAItem key={question.id} index={index+1} {...getQuestionAnswerIsRight(question)} />
            })}
        </ul>
    );
}