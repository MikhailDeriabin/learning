import Places from './Places';
import {PlaceUI} from "../types/Place";
import ErrorCard from "./ErrorCard";
import {sortPlacesByDistance} from "../util/loc";
import {fetchPlaces} from "../util/http";
import useFetch from "../hooks/useFetch";

async function fetchAndSortPlaces(): Promise<PlaceUI[]> {
  const places = await fetchPlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
      resolve(sortedPlaces);
    });
  })
}

type Props = {
  onSelectPlace: (place: PlaceUI) => void;
}
export default function AvailablePlaces({ onSelectPlace }: Props) {

  const {
    isLoadingState: isLoading,
    dataState: places,
    errorState: error,
    setErrorState: setError
  } = useFetch<PlaceUI[], Error | null>([], fetchAndSortPlaces, null);

  function handleRetry() {
    setError(null);
  }

  return (
      <>
        {!error && <Places
            title="Available Places"
            places={places}
            fallbackText="No places available."
            isLoading={isLoading}
            loadingText="Loading..."
            onSelectPlace={onSelectPlace}
        />}
        {error && <ErrorCard title='Error on loading places' message={error.message} onConfirm={handleRetry}/>}
      </>

  );
}
