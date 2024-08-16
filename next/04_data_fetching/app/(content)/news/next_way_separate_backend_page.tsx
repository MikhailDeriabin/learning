import NewsList from "@/components/NewsList";

//since it is a server side component, we can fetch data directly in the function
export default async function NewsPage() {
    let news, error;
    try {
        const resp = await fetch('http://localhost:8080/news');
        if(!resp.ok){
            error = `Failed to load news, status code: ${resp.status}`;
            return;
        }

        news = await resp.json();
    } catch (e: any) {
        console.log(e);
        error = e?.message;
    }

    if(error)
        return <>
            <h1>An error occurred during news loading</h1>
            <p>{error}</p>
        </>

    return(
        <main>
            <h1>News Page</h1>
            {news ? <NewsList news={news}/> : <p>Could not load any news</p>}
        </main>
    );
}