import { ReactNode } from "react";

//This is a parallel routes
//Here we have two folders starting with @. Next can then extract these pages and pass to the layout props
//With that we could separate the logic into different page files, 
//where one page could be just a static page and another have some dynamic functionality.
//Or you can conditionally show some specific page based on some factors
type Props = Readonly<{
    archive: ReactNode,
    latest: ReactNode
}>;
export default function ArchiveLayout({ archive, latest }: Props) {
    return(
        <div>
            <section id="archive-filter">
                {archive}
            </section>
            <section id="archive-latest">
                {latest}
            </section>
        </div>
    );
}  