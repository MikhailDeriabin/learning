import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http';
import { APIError } from '../../types/APIError';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/LoadingIndicator';
import { Event } from '../../types/Event';

export default function EventDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: event, isPending: isFetchPending, isError: isFetchError, error: fetchError } = useQuery<Event, APIError>({
    queryFn: ({signal}) => fetchEvent({id, signal}),
    queryKey: ['event', id]
  });

  const {mutate, isPending, isError, error} = useMutation<any, APIError, {id: string}>({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate('/events');
    }
  });

  function handleDeleteEvent() {
    if(!id)
      return;
    mutate({id});
  }

  return (
    <>
      <Outlet />
      {isFetchError && <ErrorBlock title="An error occurred" message={fetchError.info?.message ?? "Failed to load event"} />}
      {isFetchPending && <LoadingIndicator/>}
      {!isFetchPending && !isError && <>
        <Header>
          <Link to="/events" className="nav-item">
            View all Events
          </Link>
        </Header>
        <article id="event-details">
          <header>
            <h1>{event?.title}</h1>
            <nav>
              <button onClick={handleDeleteEvent}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${event?.image}`} alt={event?.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{event?.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>{event?.date} {event?.time}</time>
              </div>
              <p id="event-details-description">{event?.description}</p>
            </div>
          </div>
        </article>
      </>}
      {isError && <ErrorBlock title="An error occurred" message={error.info?.message ?? "Failed to delete event"} />}
      {isPending && <LoadingIndicator/>}
    </>
  );
}
