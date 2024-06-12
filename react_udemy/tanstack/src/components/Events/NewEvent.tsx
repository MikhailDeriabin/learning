import { Link, useNavigate } from 'react-router-dom';
import Modal from '../UI/Modal';
import EventForm from './EventForm';
import { Event } from '../../types/Event';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent, queryClient } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import { APIError } from '../../types/APIError';

export default function NewEvent() {
  const navigate = useNavigate();

  const {
    //function for making request
    mutate,
    isPending, isError, error
  } = useMutation<Event, APIError, {event: Event}>({
    mutationFn: createNewEvent,
    //What should happen if request went fine
    onSuccess: () => {
      //Re-fetch all queries, which has the 'events' identifier in the array
      //Basically just get created event
      queryClient.invalidateQueries({
        queryKey: ['events']
      });
      navigate('/events');
    }
  });

  function handleSubmit(formData: Event) {
    mutate({event: formData});
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit} inputData={null}>
        {isPending && <LoadingIndicator/>}
        {!isPending && <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>}
      </EventForm>
      {isError && <ErrorBlock title="An error occurred" message={error.info?.message ?? "Failed to create event"} />}
    </Modal>
  );
}
