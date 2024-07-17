import './App.css'
import Button from './components/button'
import { Avatar, Loading } from './components/icons';

function App() {

  return (
    <>
      {/* Here we want to get default props */}
     <Button size='large' icon={<Loading />}/>

     {/* Here we want to overwrite some default props */}
     <Button icon={<Avatar size='9px' />}/>
    </>
  )
}

export default App
