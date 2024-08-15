import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../dummy-news";

//Notice that we have an access to the slug from the upper route
type Props = {
    params: {
        newsSlug: string
    }
}
export default function ImagePage({params}: Props){
    const {newsSlug} = params;
    const pageNews = getNewsBySlug(newsSlug);

    if(!pageNews)
        return notFound();
    
    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${pageNews.image}`} alt={pageNews.title}/>
        </div>
    );
} 

function getNewsBySlug(slug: string) {
    return DUMMY_NEWS.find(news => news.slug === slug);
}