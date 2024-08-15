'use client';
import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from '@/dummy-news';

//This is an intercepting route, it gets all the paths, which ends with image (inside the [newSlug] path)
type Props = {
    params: {
        newsSlug: string
    }
}
export default function InterceptedImagePage({params}: Props){
    const router = useRouter();
    const {newsSlug} = params;
    const pageNews = getNewsBySlug(newsSlug);

    if(!pageNews)
        return notFound();
    
    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${pageNews.image}`} alt={pageNews.title}/>
                </div>
            </dialog>
        </>
    );
} 

function getNewsBySlug(slug: string) {
    return DUMMY_NEWS.find(news => news.slug === slug);
}