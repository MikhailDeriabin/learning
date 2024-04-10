import {Place, PlaceUI} from "../types/Place";

function toRad(value: number) {
  return (value * Math.PI) / 180;
}

function calculateDistance(place1: Place, place2: PlaceUI) {
  const R = 6371;
  const dLat = toRad(place2.lat - place1.lat);
  const dLon = toRad(place2.lon - place1.lon);
  const l1 = toRad(place1.lat);
  const l2 = toRad(place2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

export function sortPlacesByDistance(places: PlaceUI[], lat: number, lon: number) {
  const sortedPlaces = [...places];
  sortedPlaces.sort((a, b) => {
    const distanceA = calculateDistance({lat, lon}, a);
    const distanceB = calculateDistance({lat, lon}, b);
    return distanceA - distanceB;
  });
  return sortedPlaces;
}
