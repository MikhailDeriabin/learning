import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useEffect, useState } from "react";
import { TUser } from "../types/TUser";
import axios from "axios";
import { ENV } from "../ENV";

//The container will load data to from the API and pass it to all Children
//Notice that the "user" prop is the communication channel for the container and its children
type Props = {
    children?: ReactNode,
    userId: string
}
export const UserLoader = ({ children, userId }: Props) => {
    const [user, setUser] = useState<TUser | null>(null);

    useEffect(() => {
        (async () => {
            const resp = await axios.get(`${ENV.HOST}/users/${userId}`);
            if(resp.status >= 300)
                return setUser(null);

            setUser(resp.data);
        })()
    }, [userId]);

    return (
        <>
            {Children.map(children, child => {
                if(!isValidElement(child))
                    return child;

                return cloneElement(child as ReactElement<any>, { user });
            })}
        </>
    );
};