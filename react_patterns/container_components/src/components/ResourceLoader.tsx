import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { ENV } from "../ENV";

//More generic solution, if endpoint specifying is not a big deal
//The resourceName prop is prop name the child component is expecting to get
type Props = {
    children?: ReactNode,
    endpoint: string,
    resourceName: string
}
export const ResourceLoader = ({ children, endpoint, resourceName }: Props) => {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        (async () => {
            const resp = await axios.get(`${ENV.HOST}${endpoint}`);
            if(resp.status >= 300)
                return setData(null);

            setData(resp.data);
        })()
    }, [endpoint, resourceName]);

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