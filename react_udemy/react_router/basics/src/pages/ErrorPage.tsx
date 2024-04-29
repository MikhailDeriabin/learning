import PageNavigation from "../components/PageNavigation";

export default function ErrorPage() {
    return (
        <>
            <PageNavigation />
            <main style={{margin: '2rem auto', textAlign: 'center'}}>
                <h1>Error</h1>
                <p>Could not find this page :(</p>
            </main>
        </>
    );
}