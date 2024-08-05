import MainMenu from "./MainMenu";
import MainPageContent from "./MainPageContent";
import { Split } from "./Split";

export default function MainPage() {
    return (
        <Split fraction="1/4" space={5}>
            <MainMenu/>
            <MainPageContent/>
        </Split>
    );   
}