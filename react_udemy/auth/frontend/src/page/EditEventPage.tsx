import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";
import {EventT} from "../types/EventT";

export default function EditEventPage() {
    const event = useRouteLoaderData('event-detail') as EventT;
    return(
        <>
            <h1>Edit event</h1>
            <EventForm method='PATCH' event={event}/>
        </>
    );
}