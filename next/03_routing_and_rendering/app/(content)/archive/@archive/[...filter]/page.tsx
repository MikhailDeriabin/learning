import NewsList from "@/components/NewsList";
import { getAvailableNewsMonths, getNewsForYear } from "@/util/news";
import { link } from "fs";
import Link from "next/link";

type Props = {
    params: { filter: string[] }
}
export default function YearPage({ params }: Props) {
    const { filter } = params
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let monthLinks: number[] = [];
    if(selectedYear && selectedMonth)
        return <p>yaer month</p>
    
    if(selectedYear){
        const parsedYear = Number.parseInt(selectedYear);
        news = getNewsForYear(parsedYear);
        monthLinks = getAvailableNewsMonths(parsedYear) || [];
    }
        
    if(news && news.length !== 0){
        return (
            <>
                <nav style={{padding: '20px'}}>
                    <ul style={{display: 'flex', gap: '20px'}}>
                        {monthLinks.map(month => {
                            const href = selectedYear ? `/active/${selectedYear}/${month}` : '/active';

                            return <li><Link href={href}>{month}</Link></li>;
                        })}
                    </ul>
                </nav>
                <NewsList news={news}/>
            </>
            
        )
    }

    return(
        <p>Could not find any news</p>
    );
}