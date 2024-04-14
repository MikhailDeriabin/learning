import {Error, ErrorType, RequestError} from "./useGetData/Error";

type DetermineError = (resp: Response) => Error | null;

const determineDefaultError: DetermineError = function determineError(resp){
    if(resp.ok)
        return null;

    if(resp.status === 400)
        return new RequestError(ErrorType.BAD_REQUEST, `The request to ${resp.url} is in wrong form`, {});

    if(resp.status === 401)
        return new RequestError(ErrorType.NOT_AUTHENTICATED, `Client must be authenticated for ${resp.url} requests`, {});

    if(resp.status === 403)
        return new RequestError(ErrorType.NOT_AUTHORIZED, `Client has no permission for ${resp.url} resource`, {});

    if(resp.status === 404)
        return new RequestError(ErrorType.NOT_FOUND, `Could not find any data from ${resp.url}`, {});

    return new RequestError(ErrorType.NO_RESPONSE, `Unexpected error occurred ${resp.url}`, {});
}

export async function makeRequest<TData>(
    url: string, options?: RequestInit,
    determineError: DetermineError=determineDefaultError
): Promise<TData | RequestError> {
    try{
        const resp = await fetch(url, options);
        const reqError = determineError(resp);
        if(reqError)
            return reqError;

        return await resp.json() as TData;
    } catch(e){
        return new RequestError(ErrorType.UNEXPECTED, `Unexpected error occurred during request (${url})`, e);
    }
}