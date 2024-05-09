import EventsList from "../components/EventsList";
import {Await, defer, useLoaderData} from "react-router-dom";
import {EventT} from "../types/EventT";
import {fetchEvents} from "../util/http";
import {Suspense} from "react";

export default function EventsPage() {
    //Here we are getting the data coming from loader function
    // @ts-ignore
    let {events} = useLoaderData();
    // if(events.isError)
    //     return <p>Error occurred: {events.message}</p>

    return(
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            {/*Resolving problem added by router loader function, slow page loading. Another reason not to use any additional shit from router lib*/}
            <Await resolve={events}>
                {(loadedEvents: EventT[]) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    );
}

export function loadEvents(){
    return defer({
        events: fetchEvents()
    });
}