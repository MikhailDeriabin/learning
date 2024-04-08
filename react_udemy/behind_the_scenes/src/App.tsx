import {useState} from 'react';

import Counter from './components/Counter/Counter';
import Header from './components/Header';
import { log } from './log';
import ConfigureCounter from "./components/Counter/ConfigureCounter";

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(number: number) {
    setChosenCount(number);
  }

  //Here we're using the key in order to force React to re-create the Counter element each time it is set to new value.
  //because we want that the Counter value changes when we set it in the input. Without the key it does not change,
  // because any prop of the Counter did not change => the value stays the same.
  //Another solution is to use the useEffect(), but it will be more expensive
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCounter={handleSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
