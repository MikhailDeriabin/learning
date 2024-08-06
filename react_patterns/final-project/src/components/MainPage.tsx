import { CSSProperties } from "react";
import { border, color } from "../common";
import MainMenu from "./MainMenu";
import MainPageContent from "./MainPageContent";
import { Pad } from "./Pad";
import { Split } from "./Split";

type Props = {
    style?: CSSProperties
}
export default function MainPage({style}: Props) {
    return (
        <Split as={Pad} padding={[7, 5, 7, 'none']} fraction="1/4" space={5} style={{...style, backgroundColor: color.neutral[0], borderRadius: border.radius.normal}}>
            <MainMenu/>
            <MainPageContent/>
        </Split>
    );   
}