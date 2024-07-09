import { ComponentType } from "react";

//Here we can display any components as a list, as long as the provided ItemComponent has a property (sourceName), to which we can pass the data (items)

type Props = {
    items: any[],
    sourceName: string,
    ItemComponent: ComponentType<any>
}
export default function RegularList({ items, sourceName, ItemComponent }: Props) {
    return(
        <>
            {items.map((item, index) => (
                <ItemComponent key={index} {...{[sourceName]: item}} />
            ))}
        </>
    );
}