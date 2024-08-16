import NewsList from "@/components/NewsList";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/util/news";
import Link from "next/link";
import { Suspense } from "react";

//We later can wrap with component with React suspend and show some loading text while fetching the data
type FilteredNewsProps = Readonly<{
  year?: any,
  month?: any
}>;
async function FilteredNews({year, month}: FilteredNewsProps) {
    let news;
    if (year && !month) {
      news = await getNewsForYear(year);
    } else if(year && month){
      news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news && news.length > 0) {
      newsContent = <NewsList news={news} />;
    }

    return newsContent;
}

type FilterHeaderProps = Readonly<{
  year?: any,
  month?: any
}>;
async function FilterHeader({year, month}: FilterHeaderProps){
  const availableYears = await getAvailableNewsYears();
  const availableMonths = await getAvailableNewsMonths(year);

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error('Invalid filter.');
  }

  let links = availableYears;
  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return <header id="archive-header">
    <nav>
      <ul>
        {links.map((link) => {
          const href = year
            ? `/archive/${year}/${link}`
            : `/archive/${link}`;

          return (
            <li key={link}>
              <Link href={href}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
}

type Props = {
    params: { filter: string[] }
}
export default async function YearPage({ params }: Props) {
    const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter header...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth}/>
      </Suspense>
      <Suspense fallback={<p>Loading news data...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth}/>
      </Suspense>
    </>
  );
}