import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal';
import EventForm from './EventForm';
import { Event } from '../../types/Event';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http';
import { APIError } from '../../types/APIError';

export default function EditEvent() {
  const navigate = useNavigate();
  const {id} = useParams();

  const {data: event} = useQuery<any, APIError, Event>({
    queryKey: ['events', id],
    queryFn: ({signal}) => { 
      if(id)
        return fetchEvent({id, signal});
      return null;
     }
  });

  //Example of an optimistic update
  const {mutate} = useMutation<any, APIError, {id: string, event: Event}, {previousEvent: Event}>({
    mutationFn: updateEvent,
    //executes when mutate called.
    //Here it is an optimistic update
    onMutate: async (reqData) => {
      //restrict automatic refetching after update
      await queryClient.cancelQueries({queryKey: ['events', id]});
      //In case there will be errors with req, we can rollback the cache to the previous
      const previousEvent = queryClient.getQueryData(['events', id]) as Event;
      //Change cache directly
      queryClient.setQueryData(['events', id], reqData.event);

      //U can get it in the onError via context
      return {previousEvent};
    },

    onError: (error, reqData, context) => {
      //Rolling back the event data on error
      queryClient.setQueryData(['events', id], context?.previousEvent);
    },
    //When mutation is done, no matter was error or not
    //Depending on logic u can use to synchronize frontend and backend states
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['events', id]});
    }
  });

  function handleSubmit(formData: Event) {
    if(id){
      mutate({id, event: formData});
      //Optimistic updating
      handleClose();
    }
  }

  function handleClose() {
    navigate('../');
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={event} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
