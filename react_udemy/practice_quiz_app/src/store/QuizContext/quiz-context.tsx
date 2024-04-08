import {createContext, ReactNode, useReducer} from "react";
import {QuizContextContent, QuizContextReducerAction, QuizContextState, UserAnswer} from "./types";
import {isQuestionAnswerRight, questions} from "../../util/questions";
import {addUserAnswer, nextQuestion} from "./reducers";

const initialState: QuizContextState = { userAnswers: [], currentQuestion: questions[0] };
const initialContextValue: QuizContextContent = {
    ...initialState,
    isAnswerRight: (answer) => {console.error('QuizContext is not available'); return false;},
    getQuestions: () => {console.error('QuizContext is not available'); return [];},

    addUserAnswer: (answer) => {console.error('QuizContext is not available'); return;},
    nextQuestion: () => {console.error('QuizContext is not available'); return;}
};

export const QuizContext = createContext<QuizContextContent>(initialContextValue);

function contextReducer(state: QuizContextState, action: QuizContextReducerAction): QuizContextState {
    switch (action.type) {
        case "ADD_USER_ANSWER":
            return addUserAnswer(state, action.payload);
        case "NEXT_QUESTION":
            return nextQuestion(state, action.payload);
        default:
            return state;
    }
}

type Props = {
    children: ReactNode;
}
export default function QuizContextProvider({children}: Props){
    const [state, reducer] = useReducer(contextReducer, initialState);

    function isAnswerRight(answer: UserAnswer) {
        if(!answer.answer)
            return false;

        return isQuestionAnswerRight(answer.questionId, answer.answer);
    }

    function getQuestions() {
        return questions;
    }

    function addUserAnswer(answer: UserAnswer) {
        reducer({type: 'ADD_USER_ANSWER', payload: answer});
    }

    function nextQuestion() {
        reducer({type: 'NEXT_QUESTION', payload: questions});
    }

    const contextValue: QuizContextContent = {
        ...state,
        isAnswerRight,
        getQuestions,
        addUserAnswer,
        nextQuestion
    }

    return(
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
}
