import './App.css'
import { GreenSmallButton, RedButton } from './components/CompositionButton'
import Recursive from './components/Recursive'

const myNestedObject = {
  ke1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2"
    }
  },
  key3: "value3"
}

function App() {

  return (
    <>
      <div>
        <h2>Recursive component example</h2>
        <Recursive data={myNestedObject}/>
        <p>#################################################################</p>
      </div>
      
      <div>
        <h2>Composition example</h2>
        <h2>Red button</h2>
        <RedButton text="cancel"/>
        <p>-----------------------------------------------------------------</p>
        <h2>Green small button</h2>
        <GreenSmallButton text="ok"/>
        <p>-----------------------------------------------------------------</p>
      </div>
    </>
  )
}

export default App
