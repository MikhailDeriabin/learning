import {EventT} from "../types/EventT";
import {useCallback} from "react";


export async function fetchEvents(): Promise<EventT[]> {
    const resp = await fetch('http://localhost:8080/events/');
    if(!resp.ok)
        throw new Error('Failed to load events');
    const data = await resp.json();
    return data.events as EventT[];
}

export function fetchEvent(id?: string) {
    return useCallback(
        async () => {
            if(!id)
                return null;
            const resp = await fetch(`http://localhost:8080/events/${id}`);
            if(!resp.ok)
                throw new Error('Failed to load events');
            const data = await resp.json();
            return data.event as EventT;
        }, [id]
    );
}