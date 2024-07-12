import { ComponentType, useEffect, useState } from "react";
import { TUser } from "../types/TUser";
import axios from "axios";
import { ENV } from "../ENV";

export type UpdatableUserProps = {
    user: TUser,
    onUserChange: (newData: Partial<TUser>) => TUser,
    makeUpdateReq: () => Promise<any>,
    onResetUser: () => void
}

export default function getUpdatableUser(Component: ComponentType<any>, userId: string){
    return (props: any) => {
        const [initialUser, setInitialUser] = useState<TUser | null>(null);
        const [user, setUser] = useState<TUser | null>(null);
        
        useEffect(()=>{
            //First get user data from server
            (async () => {
                const resp = await axios.get(`${ENV.HOST}/users/${userId}`);
                setInitialUser(resp.data);
                setUser(resp.data);
            })();
        }, []);

        //Add utility functions to manipulate data
        function onUserChange(dataToUpdate: Partial<TUser>) {
            if(user)
                setUser({...user, ...dataToUpdate});
        }
        function onResetUser() {
            setUser(initialUser);
        }

        async function makeUpdateReq() {
            try {
                const resp = await fetch(`${ENV.HOST}/users/${userId}`, {
                    body: JSON.stringify({user}),
                    method: 'PUT',
                    headers:{
                        'Content-Type': "application/json"
                    }
                });
                if(resp.ok){
                    const data = await resp.json();
                    setInitialUser(data);
                    setUser(data);
                }
            } catch (error) {
                console.log(error);
            }
            
        }

        return (
            <Component 
                {...props} 
                user={user} 
                onUserChange={onUserChange} 
                makeUpdateReq={makeUpdateReq} 
                onResetUser={onResetUser}
            />
        );
    };
};