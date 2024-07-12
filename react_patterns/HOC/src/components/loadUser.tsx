import { ComponentType, useEffect, useState } from "react";
import { TUser } from "../types/TUser";
import axios from "axios";
import { ENV } from "../ENV";

//Load user info
export default function loadUser (Component: ComponentType<any>, userId: string) {
    return (props: any) => {
        const [user, setUser] = useState<TUser | null>(null);
        
        useEffect(()=>{
            (async () => {
                const resp = await axios.get(`${ENV.HOST}/users/${userId}`);
                if(resp.status >= 300)
                    return setUser(null);
                setUser(resp.data);
            })();
        }, []);

        return <Component {...props} user={user} />;
    };
};