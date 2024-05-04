import classes from './EventItem.module.css';
import {EventT} from "../types/EventT";
import {Link, useSubmit} from "react-router-dom";

type Props = {
    event: EventT | null;
}

function EventItem({ event }: Props) {
    //U can trigger some HTML event with that function
    const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure you want to delete this event?');

    if (proceed)
        submit(null, { method: 'DELETE' });
  }

  if(!event)
      return <></>;

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
export default EventItem;
