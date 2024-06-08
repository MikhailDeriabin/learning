import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

import classes from './EventItem.module.css';
import { EventT } from '../types/EventT';

type Props = {
  event: EventT | null;
}

function EventItem({ event }: Props) {
   //data from main router in App component
   const authToken: any = useRouteLoaderData('root');
   
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event?.image} alt={event?.title} />
      <h1>{event?.title}</h1>
      <time>{event?.date}</time>
      <p>{event?.description}</p>
      {authToken && <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>}
    </article>
  );
}

export default EventItem;
