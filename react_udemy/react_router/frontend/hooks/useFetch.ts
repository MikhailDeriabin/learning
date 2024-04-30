import {Dispatch, SetStateAction, useEffect, useState} from "react";


export default function useFetch<DataT=any,ErrorT=any>(
    initialDataValue: DataT,
    fetchFunction: () => Promise<DataT>,
    initialErrorValue: ErrorT,
    parseFetchError?: (e: unknown) => ErrorT
): {isLoadingState: boolean; dataState: DataT; setDataState: Dispatch<SetStateAction<DataT>>; errorState: ErrorT; setErrorState: Dispatch<SetStateAction<ErrorT>>} {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<DataT>(initialDataValue);
    const [error, setError] = useState<ErrorT>(initialErrorValue);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            try {
                const resp = await fetchFunction();
                setData(resp);
            } catch (e){
                if(parseFetchError)
                    setError(parseFetchError(e));
                else
                    setError(e as ErrorT);
            }

            setIsLoading(false);
        }

        getData();
    }, [fetchFunction, parseFetchError]);

    //It can be any return statement
    return {
        isLoadingState: isLoading,
        dataState: data,
        setDataState: setData,
        errorState: error,
        setErrorState: setError
    };
}