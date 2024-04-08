import {createElement, HTMLAttributes, ReactNode} from "react";
import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;

type TabsProps = {
    children: ReactNode;
    buttons: ReactNode;
    ButtonsContainer?: keyof IntrinsicElements;
} & HTMLAttributes<HTMLElement>;

export default function Tabs({children, buttons, ButtonsContainer = "menu", ...props}: TabsProps) {

    const Container = createElement(ButtonsContainer, props, buttons);

    return(
        <>
            {Container}
            {children}
        </>
    );
}