import { TAuthor } from "../../../data/authors";

//Here u have only your layout without any styling, because styling is what the parents components will add
type Props = {
    author: TAuthor
}
export default function SmallAuthorListItem({ author }: Props) {
    const { name, age } = author;
    return(
        <p>Name: {name}, Age: {age}</p>
    );
}