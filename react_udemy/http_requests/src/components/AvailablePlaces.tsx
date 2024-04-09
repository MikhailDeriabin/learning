import Places from './Places';
import {PlaceUI} from "../types/Place";
import {useEffect, useState} from "react";
import ErrorCard from "./ErrorCard";
import {sortPlacesByDistance} from "../util/loc";
import {fetchPlaces} from "../util/http";

type Props = {
  onSelectPlace: (place: PlaceUI) => void;
}

export default function AvailablePlaces({ onSelectPlace }: Props) {
  const [places, setPlaces] = useState<PlaceUI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [isRetry, setIsRetry] = useState<boolean>(false);

  useEffect(() => {
    const getPlaces = async () => {
      setIsLoading(true);

      const resp = await fetchPlaces();
      if(resp instanceof Error) {
        setError(resp);
        setIsLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(resp, position.coords.latitude, position.coords.longitude);
        setPlaces(sortedPlaces);
        setIsLoading(false);
      });
    }

    getPlaces();
  }, [isRetry]);

  function handleRetry() {
    setError(null);
    setIsRetry((prevState) => !prevState);
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
