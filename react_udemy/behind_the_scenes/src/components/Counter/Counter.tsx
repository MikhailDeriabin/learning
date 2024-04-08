import {useCallback, useMemo, useState} from 'react';
import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterOutput from './CounterOutput';
import { log } from '../../log';
import CounterHistory from "./CounterHistory";

function isPrime(number : number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

type Props = {
  initialCount: number;
}


//The memo() will check if the props passed (initialCount here) if did change => will re-render the component, else => will not.
//However, it will not check any internal state change of the component itself. So if the counter change component will be re-rendered.
//You can use the memo() here, but since the App structure was changed and the input is wrapped with ConfigureCounter,
// the Counter will not be re-rendered on each keystroke. => no need to use memo.
//So, sometimes u can use composition instead of memo(). It is better to avoid overuse of memo(), because it executes the checker function => add performance cost
const Counter = function ({ initialCount }: Props) {
  log('<Counter /> rendered', 1);

  //Here useMemo() will remember the execution of isPrime() and will only re-execute it when initialCount will change
  //Once again u should not overuse it, because the useMemo also perform a check if the deps did change => performance cost
  //But if u can save a lot of re-calculations and which are expensive (here it re-calculates on every btn click on re-render) u may use it
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

  //const [counter, setCounter] = useState(initialCount);
  const [counterChanges, setCounterChanges] = useState<number[]>([initialCount]);

  const currentCounter = counterChanges.reduce(
      (prevCounter, counterChange) => prevCounter + counterChange,
      0
  );

  //Preventing recreation of that function
  const handleDecrement = useCallback(function handleDecrement() {
    //setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [-1, ...prevCounterChanges]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    //setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [1, ...prevCounterChanges]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges}/>
    </section>
  );
}

export default Counter;
