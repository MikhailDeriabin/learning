'use client';
import NewsList from "@/components/NewsList";
import { useEffect, useState } from "react";
import { News } from "../../../types/News";

export default function NewsPage() {
    const [news, setNews] = useState<News[]>();
    const [error, setError] = useState<any>();

    useEffect((() => {
        async function getData() {
            try {
                const resp = await fetch('http://localhost:8080/news');
                if(!resp.ok){
                    setError({message: 'Failed to load news', statusCode: resp.status});
                    return;
                }

                const data = await resp.json();
                setNews(data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }

        getData();
    }), []);

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