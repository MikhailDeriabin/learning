import { TUser } from "../types/TUser";

type Props = {
  user: TUser
}
export default function UserInfo({ user }: Props){
  if(!user)
    return (<h1>Loading...</h1>);

  const { name, age, country, books } = user;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ); 
};
