import { TBook } from "../../../data/books";

type Props = {
    book: TBook
}
export default function LargeBookListItem({ book }: Props) {
    const {name, pages, title, price} = book;

    return(
        <>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <h2>Title:</h2>
            <p>{title}</p> 
            <p>Pages: {pages}</p> 
        </>
    );
}