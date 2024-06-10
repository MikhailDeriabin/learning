import { Link, Outlet } from 'react-router-dom';

import Header from '../Header';
import EventsIntroSection from './EventsIntroSection';
import FindEventSection from './FindEventSection';
import NewEventsSection from './NewEventsSection';

export default function Events() {
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events/new" className="button">
          New Event
        </Link>
      </Header>
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
}
