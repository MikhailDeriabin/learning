import EventItem from "../components/EventItem";
import useFetch from "../../hooks/useFetch";
import {fetchEvent} from "../util/http";
import {useParams} from "react-router-dom";

export default function EventDetailsPage() {
    const params = useParams();

    const {
        isLoadingState: isLoading,
        dataState: event
    } = useFetch(
        null,
        fetchEvent(params.id),
        null
    );

    if(isLoading)
        return <p>Loading...</p>

    return(
        <>
            <h1>Event Details</h1>
            <EventItem event={event}/>
        </>
    );
}