import { TBook } from "../../../data/books";

type Props = {
    book: TBook
}
export default function SmallBookListItem({ book }: Props) {
    const { name, price } = book;
    return(
        <h2>{name} / {price} €</h2>
    );
}