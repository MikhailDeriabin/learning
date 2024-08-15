import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
    params: {
        newsSlug: string
    }
}

export default function NewsDetailsPage({params}:Props) {
    function getNewsBySlug(slug: string) {
        return DUMMY_NEWS.find(news => news.slug === slug);
    }

    const pageNews = getNewsBySlug(params.newsSlug);

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