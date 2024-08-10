//Component to render, when error occurs

'use client';

type Props = {
    error: any
}
export default function ErrorPage({error}: Props) {
    return (
        <main className="error">
            <h1>Ups... Error</h1>
        </main>
        
    );
}