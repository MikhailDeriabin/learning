import {useCallback, useEffect, useRef, useState} from 'react';
import Places from './components/Places';
import { AVAILABLE_PLACES } from './data';
import Modal, {ModalRef} from './components/Modal';
import DeleteConfirmation from './components/DeleteConfirmation';
import logoImg from './assets/logo.png';
import {Place} from "./types/Place";
import {sortPlacesByDistance} from "./loc";

//Here instead of retrieving the saved places from the local storage with useEffect, we are making it here,
//because the code is synchronous and can be executed pretty fast and will be executed before the end of the component function
//U should avoid using the useEffect when it is possible
const savedPlaceIds: string[] = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]') || [];
const savedPlaces: any[] = savedPlaceIds.map(id => AVAILABLE_PLACES.find(place => place.id === id)) || [];

function App() {
  const selectedPlace = useRef<string>('');
  const [pickedPlaces, setPickedPlaces] = useState<Place[]>(savedPlaces);
  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  //Side Effect, it does not relate directly to render process
  //Here if u will not wrap the effect with use effect hook, but will execute it strait in the component body, it will cause re-renders
  //This code inside useEffect will be executed after the component is rendered (= the JSX code is returned)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        const sortedByUserLocationPlaces = sortPlacesByDistance(
            AVAILABLE_PLACES,
            position.coords.latitude,
            position.coords.longitude
        );

        setAvailablePlaces(sortedByUserLocationPlaces);
      });
    }, []);


  function handleStartRemovePlace(id: string) {
    setIsModalOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false);
  }

  function handleSelectPlace(id: string) {
    setPickedPlaces((prevPickedPlaces ) => {
      if (prevPickedPlaces.some((place) => place.id === id))
        return prevPickedPlaces;

      const place = AVAILABLE_PLACES.find((place) => place.id === id)!;
      return [place, ...prevPickedPlaces];
    });

    //Save data to local storage for adding another side effect, but which does not need the useEffect()
    const savedPlaces: string[] = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]') || [];
    if(savedPlaces.indexOf(id) === -1)
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...savedPlaces]));
  }

  //Now that function will not be recreated on each re-render => we can pass it safely to useEffect() deps in DeleteConfirmation component
  const handleRemovePlace = useCallback(function () {
    setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setIsModalOpen(false);

    const savedPlaces: string[] = JSON.parse(localStorage.getItem('selectedPlaces') ?? '[]') || [];
    localStorage.setItem('selectedPlaces', JSON.stringify(savedPlaces.filter(id => id !== selectedPlace.current)));
  }, []);

  return (
    <>
      <Modal open={isModalOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
          fallbackText='Sorting places by distance ...'
        />
      </main>
    </>
  );
}

export default App;
