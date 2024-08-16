import { News } from "@/types/News"
import Link from "next/link";

type Props = Readonly<{
    news: News[]
}>;
export default function NewsList({news}: Props) {

    return (<ul className="news-list">
        {news.map(newsItem => {
            return <li key={newsItem.id}>
                <Link href={`/news/${newsItem.slug}`}>
                    <img src={`/images/news/${newsItem.image}`} alt="news"/>
                    {newsItem.title}
                </Link>
            </li>
        })}
    </ul>);
}