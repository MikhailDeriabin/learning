import { GlobalStyles } from "./common/GlobalStyles";
import { IconButton, PrimaryButton } from "./components/Button";
import profile from './assets/profile.svg'
import { ColorType } from "./common";
import NavBarLink from "./components/NavBarLink";

export default function App() {

    return (
        <>
            <NavBarLink>Overview</NavBarLink>
            <GlobalStyles/>
        </>
    )
}