import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import {AnswerState} from "./Quiz";
import {useState} from "react";
import {Question} from "../types/question";

type Props = {
    onSelectAnswer: (answer: string | null) => void;
    onSkipAnswer: () => void;
    questions: Question[];
    index: number;
}

type Answer = {
    selectedAnswer: string;
    isCorrect: null | boolean;
}
export default function QuestionCard({index, onSelectAnswer, onSkipAnswer, questions}: Props) {
    const [answer, setAnswer] = useState<Answer>({ selectedAnswer: '', isCorrect: null });

    let timer = 10000;
    if(answer.selectedAnswer) {
        timer = 1000;
    }
    if(answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer: string){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[index].answers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState: AnswerState = 'IN_PROGRESS';
    if(answer.selectedAnswer && answer.isCorrect !== null)
        answerState = answer.isCorrect ? 'CORRECT' : 'INCORRECT';
    else if(answer.selectedAnswer)
        answerState = 'ANSWERED';

    return (
        <div id="question">
            {/*Here we are adding the key prop, in order to re-render the QuizTimer when question is changed
                Otherwise it is saved because its props did not change
                */}
            <QuestionTimer
                key={timer}
                timeoutMs={timer}
                onTimout={answer.selectedAnswer === '' ? onSkipAnswer : () => {}}
            />
            <h2>{questions[index].text}</h2>
            <Answers
                answers={questions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}