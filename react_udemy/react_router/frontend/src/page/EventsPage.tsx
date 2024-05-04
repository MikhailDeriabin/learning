import EventsList from "../components/EventsList";
import {useLoaderData} from "react-router-dom";
import {EventT} from "../types/EventT";

export default function EventsPage() {
    //Here we are getting the data coming from loader function
    let events = useLoaderData() as EventT[];
    // if(events.isError)
    //     return <p>Error occurred: {events.message}</p>

    return(
        <>
            <h1>Events Page</h1>
            <EventsList events={events}/>
        </>
    );
}