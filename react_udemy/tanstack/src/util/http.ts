import { QueryClient } from "@tanstack/react-query";
import { APIError } from "../types/APIError";
import { Event } from '../types/Event';

//Query client for tanstack provider, can be used in multiple places not only in provider
export const queryClient = new QueryClient();

type Params = {
  //Abort API request, comes from Tanstack
  signal?: AbortSignal, 
  search?: string
}

//Tanstack is passing some additional data to the query functions
export async function fetchEvents({signal, search}: Params) {
    let url = 'http://localhost:3000/events';
    if(search)
      url += `?search=${search}`

    const response = await fetch(url, {signal});

    if (!response.ok) {
      const error: APIError = {
        code: response.status,
        info: await response.json(),
        message: 'An error occurred while fetching the events'
      }

      throw error;
    }

    const { events } = await response.json();
    return events;
  }

  export async function createNewEvent(eventData: {event: Event}) {
    const response = await fetch(`http://localhost:3000/events`, {
      method: 'POST',
      body: JSON.stringify(eventData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) 
      throw {
        message: 'An error occurred while creating the event',
        code: response.status,
        info: await response.json()
      };
    
  
    const { event } = await response.json();
  
    return event;
  }

  export async function fetchImages({signal}: Params) {
    let url = 'http://localhost:3000/events/images';

    const response = await fetch(url, {signal});

    if (!response.ok) {
      const error: APIError = {
        code: response.status,
        info: await response.json(),
        message: 'An error occurred while fetching images'
      }

      throw error;
    }

    const { images } = await response.json();
    return images;
  }
  
  export async function fetchEvent({ id, signal }: {id?: string, signal: AbortSignal}) {
    if(!id)
      throw {
        code: 400,
        info: {message: 'The id can not be undefined'},
      }

    const response = await fetch(`http://localhost:3000/events/${id}`, { signal });
  
    if (!response.ok) {
      const error: APIError = {
        code: response.status,
        info: await response.json(),
        message: 'An error occurred while fetching the event'
      }
      throw error;
    }
  
    const { event } = await response.json();
  
    return event;
  }
  
  export async function deleteEvent({ id }: {id?: string}) {
    if(!id)
      throw {
        code: 400,
        info: {message: 'The id can not be undefined'},
      }

    const response = await fetch(`http://localhost:3000/events/${id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok)
      throw {
        code: response.status,
        info: await response.json(),
        message: 'An error occurred while deleting the event'
      }
  
    return response.json();
  }