import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/util/news";

type Props = {
    params: { year: string }
}
export default function YearPage({ params }: Props) {
    const year = Number.parseInt(params.year);

    const newsForYear = getNewsForYear(year);

    return(
        <div>
            <h2>News of the year {params.year}</h2>
            <NewsList news={newsForYear} />
        </div>
        
    );
}