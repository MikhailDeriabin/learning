import { notFound } from "next/navigation";
import { getNewsItem } from "../../../../../../util/news";
import ModalBackdrop from "../../../../../../components/ModalBackDrop";

//This is an intercepting route, it gets all the paths, which ends with image (inside the [newSlug] path)
type Props = {
    params: {
        newsSlug: string
    }
}
export default async function InterceptedImagePage({params}: Props){
    const {newsSlug} = params;
    const pageNews = await getNewsItem(newsSlug);

    if(!pageNews)
        return notFound();
    
    return (
        <>
            <ModalBackdrop/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${pageNews.image}`} alt={pageNews.title}/>
                </div>
            </dialog>
        </>
    );
} 
