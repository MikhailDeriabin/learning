import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';
import { APIError } from '../../types/APIError';
import { Event } from '../../types/Event';

export default function NewEventsSection() {
  let content;

  // make a http query, returns an objects with a lot of params
  // Notice that components using this hook must be wrapped with a query provider
  // It does make a query on each page load, but if the data already was fetched before, it will return it first from the cache
  //and then if there were any changes of the data it will update the cached data automatically in UI and in memory
  const { data, isPending, isError, error } = useQuery<Event[], APIError>({
    queryFn: fetchEvents,
    // For determining which query already been sent, for caching data.
    // U can use any identifiers and any datatypes here
    queryKey: ['events'],

    //U can optimize for how long page can be unfocused before reload,
    //For example if u go to the other page for 5s and then go back to this page, the data will not be re-fetched from backend
    //Value is in ms, default is 0
    staleTime: 5000,

    //garbage collector time, for how long data should be cached in ms, default 5 min
    gcTime: 10000
  });

  if(isPending) {
    content = <LoadingIndicator />;
  }

  if(isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message ?? "Failed to fetch events"} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
