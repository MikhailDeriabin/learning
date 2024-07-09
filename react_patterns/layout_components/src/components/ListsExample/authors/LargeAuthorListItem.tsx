import { TAuthor } from "../../../data/authors";

//These components does not care about there they will be used: in cards, lists etc. It is a parent job to decide
type Props = {
    author: TAuthor
}
export default function LargeAuthorListItem({ author }: Props) {
    const {name, age, country, books} = author;
    return(
        <>
            <h2>{name}</h2>
            <p>Age: {age}</p> 
            <p>Country: {country}</p> 
            <h2>Books</h2>
            <ul>
                {books.map(b => <li key={b+name}>{b}</li>)}
            </ul>
        </>
    );
}