import {Question} from "../../types/question";

export type UserAnswer = {
    questionId: string;
    answer: string | null;
}

export type QuizContextState = {
    userAnswers: UserAnswer[];
    currentQuestion: Question | null;
}

export type QuizContextContent = {
    isAnswerRight: (answer: UserAnswer) => boolean;
    getQuestions: () => Question[];
    addUserAnswer: (answer: UserAnswer) => void;
    nextQuestion: () => void;
} & QuizContextState;

export type QuizContextReducerAction = {
    type: 'ADD_USER_ANSWER' | 'NEXT_QUESTION';
    payload: any;
}
export type ContextReducer = (state: QuizContextState, payload: any) => QuizContextState;