import {Place} from "../types/Place";

type Props = {
    title: string,
    places: Place[],
    fallbackText: string,
    onSelectPlace: (id: string) => void
}
export default function Places({ title, places, fallbackText, onSelectPlace }: Props) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {places.length === 0 && <p className='fallback-text'>{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place.id)}>
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
