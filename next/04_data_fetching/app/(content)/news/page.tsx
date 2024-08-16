import NewsList from "@/components/NewsList";
import { getAllNews } from "../../../util/news";

//since we own the DB, we can make all queries directly from DB here, no need for separate backend
export default async function NewsPage() {
    const news = await getAllNews();

    if(!news)
        return <>
            <h1>An error occurred during news loading</h1>
            <p>Could not find any news</p>
        </>

    return(
        <main>
            <h1>News Page</h1>
            <NewsList news={news}/>
        </main>
    );
}