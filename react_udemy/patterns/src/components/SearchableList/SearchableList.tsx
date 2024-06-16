import { ChangeEvent, ReactNode, useRef, useState } from "react";


type Props = {
    items: any[],
    children: (items: any) => ReactNode,
    itemKeyFn: (item: any, index: number) => string,
    searchDelayMs?: number
}

//This is an example of render props pattern
//Here the SearchableList contains functionality (search logic) and uses later injected children function (=component) to render results
//Since the searching data can be anything numbers, strings, Places etc., it is better to just inject the proper rendering function = component
export default function SearchableList({children, items, itemKeyFn, searchDelayMs=500}: Props) {
    const [searchResult, setSearchResult] = useState<any[]>(items);

    const lastSearchTimerId = useRef<any>(null);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const newValue = e.target.value;

        //adding some delay, so that the search is not executed on each keystroke
        if(lastSearchTimerId.current)
            clearTimeout(lastSearchTimerId.current);

        lastSearchTimerId.current = setTimeout(() => {
            lastSearchTimerId.current = null;          
            setSearchResult(items.filter((i) => JSON.stringify(i).toLowerCase().includes(newValue?.toLowerCase()))); 
        }, searchDelayMs);      
    }

    return(
        <div className="searchable-list">
            <input onChange={handleInput} type="search" placeholder="Search"/>
            <ul>
                {searchResult.map((i, index) => <li key={itemKeyFn(i, index)}>{children(i)}</li>)}
            </ul>
        </div>
    );
}