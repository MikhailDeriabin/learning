import { ButtonHTMLAttributes } from "react";

//Using an existing component as a base and set some of its properties as needed
//Basically it is inheritance, but in functional components
type Props = {
    size?: 'small' | 'large',
    color?: string,
    text: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export default function CompositionButton({ size, color, text, ...props }: Props) {
    return (
        <button 
            style={{
                fontSize: size === 'small' ? '8px' : '32px',
                backgroundColor: color
            }}

            {...props}
        >
            {text}
        </button>
    );
}

type RedButtonProps = {
    text: string
}
export function RedButton({ text }: RedButtonProps) {
    return <CompositionButton color="crimson" text={text}/>
}

type GreenSmallButtonProps = {
    text: string
}
export function GreenSmallButton({ text }: GreenSmallButtonProps) {
    return <CompositionButton color="green" size="small" text={text}/>
}