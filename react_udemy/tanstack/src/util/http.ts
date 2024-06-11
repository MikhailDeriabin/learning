import { APIError } from "../types/APIError";

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