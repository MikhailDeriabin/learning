import {ContextReducer, UserAnswer} from "./types";
import {questions} from "../../util/questions";
import {Question} from "../../types/question";

export const addUserAnswer: ContextReducer = function (state, payload: UserAnswer) {
    const existingAnswer = state.userAnswers.find(answer => answer.questionId === payload.questionId);
    if(!existingAnswer)
        return {...state, userAnswers: [...state.userAnswers, payload]};

    //Nothing changed
    if(existingAnswer.answer === payload.answer)
        return state;

    const newAnswers = state.userAnswers.filter(answer => answer.questionId !== payload.questionId);
    newAnswers.push(payload);
    return {...state, userAnswers: newAnswers};
}

export const nextQuestion: ContextReducer = function (state, payload: Question[]) {
    //Nothing changed
    if(!state.currentQuestion)
        return state;

    if(!payload || !Array.isArray(payload))
        return {...state, currentQuestion: null}

    let currentQuestionIndex = null;
    for(let i=0; i<payload.length; i++){
        if(payload[i].id === state.currentQuestion.id){
            currentQuestionIndex = i;
            break;
        }
    }

    if(currentQuestionIndex === null || !payload[currentQuestionIndex+1])
        return {...state, currentQuestion: null}

    return {...state, currentQuestion: payload[currentQuestionIndex+1]};
}