import EventItem from "../components/EventItem";
import {ActionFunction, redirect, useRouteLoaderData} from "react-router-dom";
import {EventT} from "../types/EventT";

export default function EventDetailsPage() {
    //get loader data from the higher level (by id property specified in the route config)
    const event = useRouteLoaderData('event-detail') as EventT;

    return(
        <>
            <h1>Event Details</h1>
            <EventItem event={event}/>
        </>
    );
}

//Loader func for this page
export const eventsDetailsPageLoader: ActionFunction = async function ({request, params}) {
    const {id} = params;
    if(!id)
        return null;
    const resp = await fetch(`http://localhost:8080/events/${id}`);
    if(!resp.ok)
        throw new Error('Failed to load events');
    const data = await resp.json();
    return data.event;
}

export const eventDetailsAction: ActionFunction = async ({request, params}) => {
    const {id} = params;
    if(!id)
        return null;
    const resp = await fetch(`http://localhost:8080/events/${id}`, {
        method: 'DELETE',
    });
    if(!resp.ok)
        throw new Error('Failed to delete the event');
    return redirect('/events');
}