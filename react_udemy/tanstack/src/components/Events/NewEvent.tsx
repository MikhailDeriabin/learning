import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal';
import EventForm from './EventForm';
import { Event } from '../../types/Event';

export default function NewEvent() {
  const navigate = useNavigate();

  function handleSubmit(formData: Event) {}

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit} inputData={null}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
      </EventForm>
    </Modal>
  );
}
