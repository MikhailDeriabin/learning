import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
    //Error thrown
    const error = useRouteError() as any;

    return(
        <>
            <MainNavigation />
            <PageContent title='Error'>
                <p>{error?.message || 'Something went wrong'}</p>
            </PageContent>
        </>
    );
}