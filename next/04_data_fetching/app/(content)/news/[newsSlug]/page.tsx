import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "../../../../util/news";

type Props = {
    params: {
        newsSlug: string
    }
}

export default async function NewsDetailsPage({params}:Props) {
    const pageNews = await getNewsItem(params.newsSlug);

    if(!pageNews)
        return notFound();

    return(
        <article className="news-article">
            <header>
                <Link href={`/news/${pageNews.slug}/image`}>
                    <img src={`/images/news/${pageNews.image}`} alt={pageNews.title}/>
                </Link>
                
                <h1>{pageNews.title}</h1>
                <time>{pageNews.date}</time>
            </header>

            <p>{pageNews.content}</p>
        </article>
    );
}