import { color } from "./common";
import { GlobalStyles } from "./common/GlobalStyles";
import { Center } from "./components/Center";
import MainMenu from "./components/MainMenu";
import MainPage from "./components/MainPage";
import MainPageContent from "./components/MainPageContent";
import { Pad } from "./components/Pad";
import PageHeader from "./components/PageHeader";

export default function App() {

    return (
        <div style={{backgroundColor: color.neutral[100]}}>
            <PageHeader/>
            <Center centerHorizontal style={{position: 'relative'}}>
                <MainPage style={{maxWidth: '90%', position: 'absolute', top: '-50px'}}/>
            </Center>
            
            <GlobalStyles/>
        </div>
    )
}