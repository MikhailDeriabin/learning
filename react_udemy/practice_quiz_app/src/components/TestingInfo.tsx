import {useContext} from "react";
import {QuizContext} from "../store/QuizContext/quiz-context";

type Props = {
}
export default function TestingInfo({}:Props) {
    const {userAnswers} = useContext(QuizContext);

    return(
        <div>
            <p>User answers: {JSON.stringify(userAnswers)}</p>
        </div>
    );
}