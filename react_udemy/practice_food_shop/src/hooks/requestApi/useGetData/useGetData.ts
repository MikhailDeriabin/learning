import {Dispatch, SetStateAction, useEffect, useState} from "react";
import getUrl from "../../getUrl";
import {RequestError} from "./Error";
import {makeRequest} from "../makeRequest";

type HookReturn<TData=any> = {
    isLoadingS: boolean;
    dataS: TData;
    setDataS: Dispatch<SetStateAction<TData>>;
    errorS: RequestError | null;
    setErrorS: Dispatch<SetStateAction<RequestError | null>>;
}
type Options = Omit<RequestInit, 'body' | 'method'>;

export default function useGetData<TData>(initialValue: TData, endpoint: string, options?: Options): HookReturn<TData>{
    const [isLoadingS, setIsLoadingS] = useState<boolean>(false);
    const [dataS, setDataS] = useState<TData>(initialValue);
    const [errorS, setErrorS] = useState<RequestError | null>(null);

    useEffect(() => {
        const getData = async () => {
            const urlToFetch = getUrl(endpoint);
            setIsLoadingS(prevState => true);

            const resp = await makeRequest<TData>(urlToFetch, options);
            if(resp instanceof RequestError)
                setErrorS(resp);
            else
                setDataS(resp);

            setIsLoadingS(prevState => false);
        }

        getData();
    }, []);

    return {
        isLoadingS,
        dataS,
        setDataS,
        errorS,
        setErrorS
    };
}