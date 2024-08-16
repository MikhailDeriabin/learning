import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/util/news";

type Props = Readonly<{
    
}>;
export default async function LatestPage({}: Props) {
    const latestNews = await getLatestNews();
    return(
        <main>
            <h2>Latest News</h2>
            <NewsList news={latestNews}/>
        </main>
    );
} 