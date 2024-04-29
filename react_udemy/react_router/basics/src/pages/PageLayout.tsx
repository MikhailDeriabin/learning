import PageNavigation from "../components/PageNavigation";
import {Outlet} from "react-router-dom";
import s from './PageLayout.module.css';

export default function PageLayout() {
    return (
        <>
            {/*Page navigation element*/}
            <PageNavigation />
            <main className={s.content}>
                {/*The children elements = all pages*/}
                <Outlet/>
            </main>
        </>
    );
}