import classes from './Counter.module.css';
import {CounterA, State, UIA} from "../store";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    //Subscribe to the store count value changes
    const count = useSelector<State>(state => state.count);
    const isCounterDisplayed = useSelector<State>(state => state.isCounterDisplayed);

    //Get the dispatch function from the store
    const dispatch = useDispatch();

    function handlePlus(){
        dispatch({type: CounterA.INCREMENT, payload: 5});
    }
    function handleMinus(){
        dispatch({type: CounterA.DECREMENT, payload: null});
    }

  const toggleCounterHandler = () => {
      dispatch({type: UIA.CHANGE_COUNTER_VISIBILITY, payload: !isCounterDisplayed});
  }

  return (
      <main className={classes.counter}>
          <h1>Redux Counter</h1>

          {isCounterDisplayed && <div className={classes.value}>-- {count} --</div>}

          <div>
              <button onClick={handleMinus}>-</button>
              <button onClick={handlePlus}>+</button>
          </div>

          <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};

export default Counter;
