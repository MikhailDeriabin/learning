import {Question} from "../types/question";

export const questions: Question[] = [
    {
        id: 'q1',
        text: '1. Which of the following definitions best describes React.js?',
        answers: [
            'A library to build user interfaces with help of declarative code.',
            'A library for managing state in web applications.',
            'A framework to build user interfaces with help of imperative code.',
            'A library used for building mobile applications only.',
        ],
        rightAnswerIndex: 0
    },
    {
        id: 'q2',
        text: '2. What purpose do React hooks serve?',
        answers: [
            'Enabling the use of state and other React features in functional components.',
            'Creating responsive layouts in React applications.',
            'Handling errors within the application.',
            'Part of the Redux library for managing global state.',
        ],
        rightAnswerIndex: 0
    },
    {
        id: 'q3',
        text: '3. Can you identify what JSX is?',
        answers: [
            'A JavaScript extension that adds HTML-like syntax to JavaScript.',
            'A JavaScript library for building dynamic user interfaces.',
            'A specific HTML version that was explicitly created for React.',
            'A tool for making HTTP requests in a React application.',
        ],
        rightAnswerIndex: 0
    },
    {
        id: 'q4',
        text: '4. What is the most common way to create a component in React?',
        answers: [
            'By defining a JavaScript function that returns a renderable value.',
            'By defining a custom HTML tag in JavaScript.',
            'By creating a file with a .jsx extension.',
            'By using the "new" keyword followed by the component name.',
        ],
        rightAnswerIndex: 0
    },
    {
        id: 'q5',
        text: '5. What does the term "React state" imply?',
        answers: [
            'An object in a component that holds values and may cause the component to render on change.',
            'The lifecycle phase a React component is in.',
            'The overall status of a React application, including all props and components.',
            'A library for managing global state in React applications.',
        ],
        rightAnswerIndex: 0
    },
    {
        id: 'q6',
        text: '6. How do you typically render list content in React apps?',
        answers: [
            'By using the map() method to iterate over an array of data and returning JSX.',
            'By using the for() loop to iterate over an array of data and returning JSX.',
            'By using the forEach() method to iterate over an array of data and returning JSX.',
            'By using the loop() method to iterate over an array of data and returning JSX.',
        ],
        rightAnswerIndex: 0
    },
    {
        id: 'q7',
        text: '7. Which approach can NOT be used to render content conditionally?',
        answers: [
            'Using a the #if template syntax.',
            'Using a ternary operator.',
            'Using the && operator.',
            'Using an if-else statement.',
        ],
        rightAnswerIndex: 0
    },
];

export function isQuestionAnswerRight(id: string, answer: string) {
    const question = questions.find(question => question.id === id);
    if(!question)
        return false;
    return answer === question.answers[question.rightAnswerIndex];
}