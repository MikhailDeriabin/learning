import {ActionFunction, Form, redirect, useActionData, useNavigate, useNavigation} from 'react-router-dom';

import classes from './EventForm.module.css';
import {EventT} from "../types/EventT";

type Props = {
    method: 'POST' | 'PATCH';
    event: EventT | null;
}

function EventForm({ method, event }: Props) {
  const navigate = useNavigate();
  const {state} = useNavigation();

  //getting error data returned in case of 422 error (validation)
  const actionData = useActionData() as {errors: Record<string, string>};

  function cancelHandler() {
    navigate('..');
  }

  const isSubmitting = state === 'submitting'
  if(isSubmitting)
      return <p>Saving event</p>


    return (
    //In order to be able to call the formData() and get all this form data object, where key is the name attr
    <Form className={classes.form} method={method}>
        {actionData && actionData.errors && <ul>
            {
                Object.keys(actionData.errors).map((key) =>
                    <li key={key}>{actionData.errors[key]}</li>
                )
            }
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event?.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={5} required defaultValue={event?.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>Save</button>
      </div>
    </Form>
  );
}
export default EventForm;

export const createUpdateEvent: ActionFunction = async function ({request, params}) {
    const {method} = request;
    const {id} = params;

    console.log(method, id);

    //Get data from form component (react router built-in)
    const formData = await request.formData();

    const formFields = ['title', 'description', 'image', 'date'];
    const data: Record<string, FormDataEntryValue | null> = {};
    for(let i=0, l=formFields.length; i<l; i++)
        data[formFields[i]] = formData.get(formFields[i]);

    let url = (method === 'PATCH' && id) ? `http://localhost:8080/events/${id}` : `http://localhost:8080/events`;

    const resp = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    //on validation error, after u can get that resp via useActionData()
    if(resp.status === 422)
        return resp;

    if(!resp.ok)
        throw new Error('Failed to create new event');

    //Go to /events page
    return redirect('/events');
}