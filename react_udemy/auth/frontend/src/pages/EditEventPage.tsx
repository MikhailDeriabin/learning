import { useRouteLoaderData } from 'react-router-dom';

import EventForm from '../components/EventForm';
import { EventT } from '../types/EventT';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail') as { event: EventT };

  return <EventForm method="PATCH" event={data.event} />;
}

export default EditEventPage;
