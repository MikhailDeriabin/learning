import {PlaceUI} from "../types/Place";

export async function fetchPlaces(): Promise<PlaceUI[] | Error> {
    try{
        const resp = await fetch('http://localhost:3000/places');
        if(!resp.ok)
            throw new Error('Failed to load places');
        const data = await resp.json();
        return data.places;
    } catch(e){
        return new Error('Failed to load places');
    }
}

export async function updateUserPlaces(places: PlaceUI[]): Promise<string> {
    const resp = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {'Content-Type': 'application/json'}
    });
    if(!resp.ok)
        throw new Error('Failed to update places');

    const data = await resp.json();
    return data.message;
}

export async function fetchUserPlaces(): Promise<PlaceUI[] | Error> {
    try{
        const resp = await fetch('http://localhost:3000/user-places');
        if(!resp.ok)
            throw new Error('Failed to load user places');
        const data = await resp.json();
        return data.places;
    } catch(e){
        return new Error('Failed to load places');
    }
}