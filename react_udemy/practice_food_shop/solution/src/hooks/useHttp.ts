import {useCallback, useEffect, useState} from "react";

async function sendHttpRequest(url: string, config?: RequestInit) {
    const resp = await fetch(url, config);

    const data = await resp.json();

    if(!resp.ok)
        throw new Error(data.message || 'Something went wrong');

    return data;
}

export function useHttp<TData>(initialData: TData, url: string, config?: RequestInit){
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<TData>(initialData);
    const [error, setError] = useState<string>('');

    const sendRequest = useCallback(async function (dataToSend?: any) {
        setIsLoading(true);
        try {
            if(config)
                config.body = JSON.stringify(dataToSend);
            const data = await sendHttpRequest(url, config);
            setData(data);
        } catch (e){
            // @ts-ignore
            setError(e.message || 'Something went wrong');
        }
        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if(!config || !config.method || config.method === 'GET')
            sendRequest();
    }, [sendRequest]);

    return {
        isLoading,
        data,
        error,
        sendRequest
    };
}