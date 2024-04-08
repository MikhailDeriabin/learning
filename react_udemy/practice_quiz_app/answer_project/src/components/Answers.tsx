import {AnswerState} from "./Quiz";
import {useRef} from "react";

type Props = {
    answers: string[];
    selectedAnswer: string | null;
    answerState: AnswerState;
    onSelect: (answer: string) => void;
}

export default function Answers({answers, selectedAnswer, answerState, onSelect}: Props) {
    //We are saving this value, because otherwise if we change the answerState state (which happens on answer selection),
    //they will be also recalculated => the order will change and answers will "jump"
    const shuffledAnswersRef = useRef<string[]>(null);

    //Add randomness to questions (in questions array every first element is the right answer)
    if(!shuffledAnswersRef.current){
        // @ts-ignore
        shuffledAnswersRef.current = [...answers];
        shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
    }

    return(
        <>
            <ul id="answers">
                {answers.map((answer) => {
                        const isSelected = answer === selectedAnswer;
                        let classToUse = '';
                        if (isSelected) {
                            if (answerState === 'ANSWERED')
                                classToUse = 'selected';
                            if (answerState === 'CORRECT')
                                classToUse = 'correct';
                            else (answerState === 'INCORRECT')
                            classToUse = 'wrong'
                        }

                        return <li className="answer" key={answer}>
                            <button onClick={() => onSelect(answer)} className={classToUse} disabled={answerState !== 'IN_PROGRESS'}>{answer}</button>
                        </li>
                    }
                )}
            </ul>
        </>
    );
}