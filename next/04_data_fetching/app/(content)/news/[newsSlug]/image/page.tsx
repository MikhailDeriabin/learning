import { notFound } from "next/navigation";
import { getNewsItem } from "../../../../../util/news";

//Notice that we have an access to the slug from the upper route
type Props = {
    params: {
        newsSlug: string
    }
}
export default async function ImagePage({params}: Props){
    const {newsSlug} = params;
    const pageNews = await getNewsItem(newsSlug);

    if(!pageNews)
        return notFound();
    
    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${pageNews.image}`} alt={pageNews.title}/>
        </div>
    );
} 