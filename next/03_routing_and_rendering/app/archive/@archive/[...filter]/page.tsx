import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/util/news";

type Props = {
    params: { filter: string[] }
}
export default function YearPage({ params }: Props) {
    const { filter } = params
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    if(selectedYear && selectedMonth)
        return <p>yaer month</p>
    
    if(selectedYear)
        news = getNewsForYear(Number.parseInt(selectedYear));

    if(news && news.length !== 0)
        return <NewsList news={news}/>

    return(
        <p>Could not find any news</p>
    );
}