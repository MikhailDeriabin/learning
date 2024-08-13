import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/util/news";

type Props = Readonly<{
    
}>;
export default function LatestPage({}: Props) {
    const latestNews = getLatestNews();
    return(
        <main>
            <h2>Latest News</h2>
            <NewsList news={latestNews}/>
        </main>
    );
} 