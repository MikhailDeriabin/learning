import { TBook } from "../types/TBook";

type Props = {
  book?: TBook
}
export const BookInfo = ({ book }: Props) => {
  if(!book)
    return <h1>Loading...</h1>;

  const { name, price, title, pages } = book;

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  );
};
