import { ENV } from "../ENV";
import getUpdatableResource from "./getUpdatableResource";


function UserFormComponent ({ user, onChangeUser, onResetUser, onUpdateReqUser }: any){
  if(!user)
    return (<h1>Loading...</h1>);

  const { name, age, country } = user;
  return (
    <form onSubmit={(e) => {e.preventDefault(); onUpdateReqUser()}}>
      <label>Name: <input type="text" value={name} onChange={(e) => onChangeUser({name: e.target.value})}/></label><br/>
      <label>Age: <input type="number" value={age} onChange={(e) => onChangeUser({age: Number.parseInt(e.target.value)})}/></label><br/>
      <label>Country: <input type="text" value={country} onChange={(e) => onChangeUser({country: e.target.value})}/></label><br/>
      <input type="submit" value="Update"/>
      <button onClick={onResetUser}>Cancel</button>
    </form>
  ); 
};

export const UserFormWithGeneric = getUpdatableResource(UserFormComponent, `${ENV.HOST}/users/3`, `${ENV.HOST}/users/3`, 'user');
