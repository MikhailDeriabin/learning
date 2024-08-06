import { color } from "../common";
import { H1 } from "./headers";
import NavBar from "./NavBar";
import { Pad } from "./Pad";

export default function PageHeader() {
    return (
        <header style={{backgroundColor: color.primary[100], minHeight: '300px'}}>
            <NavBar/>
            <Pad padding={[5, 4]}> 
                <H1 theme='dark'>Account Settings</H1>
            </Pad>
        </header>
    );
}