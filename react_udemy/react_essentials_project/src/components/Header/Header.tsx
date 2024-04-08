import {HTMLAttributes, memo} from "react";
import "./styles.css";

type HeaderProps = {
    hText: string;
    imageSrc: string;

    HType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLElement>

export default memo(function Header({HType = 'h1', hText, imageSrc, ...props}: HeaderProps) {

    const H = HType as keyof JSX.IntrinsicElements;

    return(
        <header {...props} id="header">
            <img src={imageSrc} alt="site logo" id="image"/>
            <H id="h">{hText}</H>
        </header>
    );
})