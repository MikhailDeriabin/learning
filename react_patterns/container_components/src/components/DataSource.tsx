import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useEffect, useState } from "react";

//Ultra mega super generic solution, I guess only for some edge cases
type Props = {
    children?: ReactNode,
    getData: () => any,
    resourceName: string
}
export const DataSource = ({ children, getData, resourceName }: Props) => {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getData();
            setData(data);
        })()
    }, [getData, resourceName]);

    return (
        <>
            {Children.map(children, child => {
                if(!isValidElement(child))
                    return child;

                return cloneElement(child as ReactElement<any>, { [resourceName]: data });
            })}
        </>
    );
};