import MainNavigation from "../components/MainNavigation";
import {Outlet, useNavigation} from "react-router-dom";

export default function PageLayout() {
    //State of the navigation (react navigator). With that u can check is page loading or not.
    //In case u have to load some data from an API before going to the page (using loader func),
    // u might want to show some text etc. of that the page is being loaded
    const { state: navigationState } = useNavigation();

    return(
        <>
            <MainNavigation />
            <main>
                {navigationState === 'loading' && <p>Loading...</p>}
                {navigationState !== 'loading' && <Outlet/>}
            </main>
        </>
    );
}