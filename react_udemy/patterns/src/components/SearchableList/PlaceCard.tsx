import { Place } from "../../types/Place";

type Props = {
    item: Place
}
export default function PlaceCard({ item }: Props) {
    return (
      <article className="place">
        <img src={item.image} alt={item.title} />
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </article>
    );
  }