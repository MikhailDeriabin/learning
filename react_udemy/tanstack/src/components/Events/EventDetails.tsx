import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http';
import { APIError } from '../../types/APIError';
import ErrorBlock from '../UI/ErrorBlock';
import LoadingIndicator from '../UI/LoadingIndicator';
import { Event } from '../../types/Event';
import { useState } from 'react';
import Modal from '../UI/Modal';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const { data: event, isPending: isFetchPending, isError: isFetchError, error: fetchError } = useQuery<Event, APIError>({
    queryFn: ({signal}) => fetchEvent({id, signal}),
    queryKey: ['events', id]
  });

  const {mutate, isPending, isError, error} = useMutation<any, APIError, {id: string}>({
    mutationFn: deleteEvent,
    onSuccess: () => {
      //Refetch type means when make a re-fetch, none means on the next time data is required = after redirect
      //refetchType is added because tanstack tries to refetch event for this page after deletion (it has also 'events' query key)
      queryClient.invalidateQueries({ queryKey: ['events'], refetchType: 'none' });
      navigate('/events');
    }
  });

  function handleDeleteEvent() {
    if(!id)
      return;
    mutate({id});
  }

  function handleStartDelete() {
    setIsDeleting(true);
  }
  function handleStopDelete() {
    setIsDeleting(false);
  }

  return (
    <>
      {isDeleting && <Modal onClose={handleStopDelete}>
        <h2>Are u sure?</h2>
        <h2>Delete the event?</h2>
        <div className='form-actions'>
          <button onClick={handleStopDelete} className='button-text'>Cancel</button>
          <button onClick={handleDeleteEvent} className='button'>Delete</button>     
          {isPending && <LoadingIndicator/>}
        </div>
        {isError && <ErrorBlock title="An error occurred" message={error.info?.message ?? "Failed to delete event"} />}
      </Modal>}
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
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${event?.image}`} alt={event?.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{event?.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {new Date(event?.date ?? '').toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})} @ {event?.time}
                </time>
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
