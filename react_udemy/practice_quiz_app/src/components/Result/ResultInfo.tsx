import {useContext} from "react";
import {QuizContext} from "../../store/QuizContext/quiz-context";

type Props = {

}
export default function ResultInfo({}: Props) {
    const {isAnswerRight, userAnswers, getQuestions} = useContext(QuizContext);
    
    function getRightWrongSkipped() {
        const result: Record<string, number> = { right: 0, wrong: 0, skipped: 0 }
        userAnswers.forEach((userAnswer) => {
            if(isAnswerRight(userAnswer))
                return result.right += 1;

            result.wrong += 1;
        });
        const questionsLength = getQuestions().length;
        result.skipped = questionsLength - result.right - result.wrong;
        for(const key in result)
            result[key] = Math.round(result[key]/questionsLength*100);

        return result;
    }

    const { right, wrong, skipped } = getRightWrongSkipped();
    
    return(
        <>
            <p>{skipped}% skipped</p>
            <p>{right}% answered correctly</p>
            <p>{wrong}% answered incorrectly</p>
        </>
    );
}