import {EventT} from "../types/EventT";

export type FetchError = { isError: boolean, message: string }

export async function fetchEvents(): Promise<EventT[] | FetchError> {
    const resp = await fetch('http://localhost:8080/events');
    if(!resp.ok)
        //U can return an error object or throw it. If u throw it, the errorElement specified in the router config will be shown
        throw new Error(`Could not fetch events`);
        //return { isError: true, message: `Could not fetch events` }
    const data = await resp.json();
    return data.events as EventT[];
}