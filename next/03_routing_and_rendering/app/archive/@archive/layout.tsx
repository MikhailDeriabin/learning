import { getAvailableNewsYears } from "@/util/news";
import Link from "next/link";
import { ReactNode } from "react";

type Props = Readonly<{
    children?: ReactNode
}>;
export default function ArchivePage1({children}: Props) {
    const years = getAvailableNewsYears();

    return(
        <>
            <header id="archive-header">
                <h1>News Archive</h1>
                <nav>
                    <ul>
                        {years.map(year => <li key={year}>
                            <Link href={`/archive/${year}`}>{year}</Link>
                        </li>
                        )}
                    </ul>
                </nav>
            </header>
            {children}
        </>
    );
} 