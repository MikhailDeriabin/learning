// @ts-ignore
import componentsImg from './assets/components.png';
// @ts-ignore
import propsImg from './assets/config.png';
// @ts-ignore
import jsxImg from './assets/jsx-ui.png';
// @ts-ignore
import stateImg from './assets/state-mgmt.png';

export type Concept = {
    image: string;
    alt: string;
    description: string;
    title: string;
}

export const CORE_CONCEPTS: Concept[] = [
    {
        image: componentsImg,
        alt: "concept 1",
        title: 'Components',
        description:
            'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
        image: jsxImg,
        alt: "concept 2",
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
        image: propsImg,
        alt: "concept 3",
        title: 'Props',
        description:
            'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
        image: stateImg,
        alt: "concept 4",
        title: 'State',
        description:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
];

export type Example = {
    title: string;
    description: string;
    code: string;
}
export enum MenuButton {
    Component,
    JSX,
    Props,
    State
}
export const EXAMPLES: Record<MenuButton, Example> = {
    [MenuButton.Component]: {
        title: 'Components',
        description:
            'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
        code: `
        function Welcome() {
            return <h1>Hello, World!</h1>;
        }`,
    },

    [MenuButton.JSX]: {
        title: 'JSX',
        description:
            'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
        code: `
            <div>
            <h1>Welcome {userName}</h1>
            <p>Time to learn React!</p>
            </div>`,
    },

    [MenuButton.Props]: {
        title: 'Props',
        description:
            'Components accept arbitrary inputs called props. They are like function arguments.',
        code: `
            function Welcome(props) {
                return <h1>Hello, {props.name}</h1>;
           }`,
    },

    [MenuButton.State]: {
        title: 'State',
        description:
            'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
        code: `
            function Counter() {
                const [isVisible, setIsVisible] = useState(false);
                
                function handleClick() {
                setIsVisible(true);
                }
                
                return (
                <div>
                  <button onClick={handleClick}>Show Details</button>
                  {isVisible && <p>Amazing details!</p>}
                </div>
                );
        }`,
    }
};