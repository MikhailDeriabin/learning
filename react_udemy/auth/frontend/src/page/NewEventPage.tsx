import EventForm from "../components/EventForm";

export default function NewEventPage() {
    return(
        <>
            <h1>New Event</h1>
            <EventForm method='POST' event={null}/>
        </>
    );
}