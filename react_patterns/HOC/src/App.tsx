import './App.css';
import loadUser from './components/loadUser';
import logProps from './components/LogProps';
import { UserForm } from './components/UserForm';
import { UserFormWithGeneric } from './components/UserFormWithGeneric';
import UserInfo from './components/UserInfo';

const UserInfoWrapper = logProps(UserInfo);

const LoadedUser = loadUser(UserInfo, '1');

function App() {

  return (
    <>
      <h2>UserInfoWrapper</h2>
      <UserInfoWrapper lol="kek"/>
      <p>###########################################################</p>
      <h2>LoadedUser</h2>
      <LoadedUser/>
      <p>###########################################################</p>
      <h2>UserForm</h2>
      <UserForm />
      <p>###########################################################</p>
      <h2>UserFormWithGeneric</h2>
      <UserFormWithGeneric />
    </>
  )
}

export default App
