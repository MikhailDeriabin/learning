import {useRef, useState, useCallback} from 'react';

import Places from './components/Places';
import Modal from './components/Modal';
import DeleteConfirmation from './components/DeleteConfirmation';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces';
import {PlaceUI} from "./types/Place";
import {fetchUserPlaces, updateUserPlaces} from "./util/http";
import ErrorCard from "./components/ErrorCard";
import useFetch from "./hooks/useFetch";

function App() {
  const selectedPlace = useRef<PlaceUI>(null);

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState<any>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const {
    dataState: userPlaces,
    setDataState: setUserPlaces,
    errorState: errorReadingPlaces,
    setErrorState: setErrorReadingPlaces
  } = useFetch<PlaceUI[], Error | null>([], fetchUserPlaces, null);

  function handleStartRemovePlace(place: PlaceUI) {
    setModalIsOpen(true);
    // @ts-ignore
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace: PlaceUI) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });


    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (e: any){
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: e.message || 'Failed to update places'});
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current?.id)
    );

    try {
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current?.id));
    } catch (e: any){
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: e.message || 'Failed to delete place'});
    }

    setModalIsOpen(false);
  }, [userPlaces, setUserPlaces]);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
            fallbackText="Select the places you would like to visit below."
            isLoading={false}
            loadingText="Loading"
            places={userPlaces ?? []}
            onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>

      {errorUpdatingPlaces && <Modal open={errorUpdatingPlaces} onClose={() => {}}>
        <ErrorCard title="Error on update" message={errorUpdatingPlaces.message} onConfirm={() => setErrorUpdatingPlaces(null)}/>
      </Modal>}
      {errorReadingPlaces && <Modal open={errorReadingPlaces !== null} onClose={() => {}}>
        <ErrorCard title="Error on loading places" message={errorReadingPlaces.message} onConfirm={() => setErrorReadingPlaces(null)}/>
      </Modal>}
    </>
  );
}

export default App;
