import { TUser } from "../types/TUser";
import getUpdatableUser, { UpdatableUserProps } from './getUpdatableUser';


function UserFormComponent ({ user, onUserChange, onResetUser, makeUpdateReq }: UpdatableUserProps){
  if(!user)
    return (<h1>Loading...</h1>);

  const { name, age, country } = user;
  return (
    <form onSubmit={(e) => {e.preventDefault(); makeUpdateReq()}}>
      <label>Name: <input type="text" value={name} onChange={(e) => onUserChange({name: e.target.value})}/></label><br/>
      <label>Age: <input type="number" value={age} onChange={(e) => onUserChange({age: Number.parseInt(e.target.value)})}/></label><br/>
      <label>Country: <input type="text" value={country} onChange={(e) => onUserChange({country: e.target.value})}/></label><br/>
      <input type="submit" value="Update"/>
      <button onClick={onResetUser}>Cancel</button>
    </form>
  ); 
};

export const UserForm = getUpdatableUser(UserFormComponent, '1');
