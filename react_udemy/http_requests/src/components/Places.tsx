import {PlaceUI} from "../types/Place";

type Props = {
    title: string;
    places: PlaceUI[];
    fallbackText: string;
    isLoading: boolean;
    loadingText: string;

    onSelectPlace: (place: PlaceUI) => void;
}

export default function Places({ title, places, fallbackText, isLoading, loadingText, onSelectPlace }: Props) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
        {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
