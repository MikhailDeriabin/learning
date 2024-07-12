import { ComponentType, useEffect, useState } from "react";
import { TUser } from "../types/TUser";
import axios from "axios";

function toCapital(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export type UpdatableUserProps = {
    user: TUser,
    onDataChange: (newData: Partial<TUser>) => TUser,
    makeUpdateReq: () => Promise<any>,
    onResetData: () => void
}
export default function getUpdatableResource(Component: ComponentType<any>, getUrl: string, putUrl: string, resourceName: string){
    return (props: any) => {
        const [initialData, setInitialData] = useState<any | null>(null);
        const [data, setData] = useState<any | null>(null);
        
        useEffect(()=>{
            //First get user data from server
            (async () => {
                const resp = await axios.get(getUrl);
                setInitialData(resp.data);
                setData(resp.data);
            })();
        }, []);

        //Add utility functions to manipulate data
        function onDataChange(dataToUpdate: Partial<TUser>) {
            if(data)
                setData({...data, ...dataToUpdate});
        }
        function onResetData() {
            setData(initialData);
        }

        async function makeUpdateReq() {
            try {
                const resp = await fetch(putUrl, {
                    body: JSON.stringify({[resourceName]: data}),
                    method: 'PUT',
                    headers:{
                        'Content-Type': "application/json"
                    }
                });
                if(resp.ok){
                    const data = await resp.json();
                    setInitialData(data);
                    setData(data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        //Change functions names in order to avoid naming bouncing
        const propsToPass = {
            ...props,
            [resourceName]: data,
            [`onChange${toCapital(resourceName)}`]: onDataChange,
            [`onReset${toCapital(resourceName)}`]: onResetData,
            [`onUpdateReq${toCapital(resourceName)}`]: makeUpdateReq
        }

        return (
            <Component 
                {...propsToPass}
            />
        );
    };
};