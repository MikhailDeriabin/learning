import mitt from 'mitt'
import './App.css'
import Parent from './components/Parent'

//Here we are using popular library mitt for the observer pattern, no need to implement it from scratch
//The children, which share the state, should be children of some parent component
//but the parent will not handle any logic with passing the props etc.
export const emitter = mitt();

function App() {

  return (
    <>
      <Parent/>
    </>
  )
}

export default App
