import EventsList from "../components/EventsList";
import {useLoaderData} from "react-router-dom";
import {EventT} from "../types/EventT";

export default function EventsPage() {
    //Here we are getting the data coming from loader function
    const events = useLoaderData() as EventT[];

    return(
        <>
            <h1>Events Page</h1>
            <EventsList events={events}/>
        </>
    );
}