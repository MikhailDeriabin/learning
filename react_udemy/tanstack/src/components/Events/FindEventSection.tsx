import { useQuery } from '@tanstack/react-query';
import { FormEvent, useRef, useState } from 'react';
import { fetchEvents } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import { Event } from '../../types/Event';
import { APIError } from '../../types/APIError';
import EventItem from './EventItem';

export default function FindEventSection() {
  const searchElement = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string | undefined>(undefined);

  const isSearchedOnce = search !== undefined;

  const { data, isLoading, isError, error } = useQuery<Event[], APIError>({
    //Here the key is a dynamic value, so it can cache same query results
    // if use just ref value, it will not cause re-rendering => this hook will not be called again
    queryKey: ['events', {search}],
    queryFn: ({signal}) => fetchEvents({search, signal}),
    //Controls whenever there is a need to make a request, true by default
    enabled: isSearchedOnce
  }); 

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch(searchElement.current?.value);
  }

  let content = <p>Please enter a search word</p>

  if(isLoading)
    content = <LoadingIndicator />

  if(isError)
    content = <ErrorBlock title="An error occurred" message={error.info?.message ?? "Failed to fetch events"} />

  if(data)
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
