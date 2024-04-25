import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../store";
import {counterActions} from "../store/counterSlice";
import {uiActions} from "../store/uiSlice";

const Counter = () => {
    //Subscribe to the store count value changes
    const count = useSelector<State>(state => state.counter.count) as number;
    const isCounterDisplayed = useSelector<State>(state => state.ui.isCounterDisplayed) as boolean;

    //Get the dispatch function from the store
    const dispatch = useDispatch();

    function handlePlus(){
        dispatch(counterActions.increment(5));
    }
    function handleMinus(){
        dispatch(counterActions.decrement(null));
    }

  const toggleCounterHandler = () => {
      dispatch(uiActions.changeCounterVisibility(!isCounterDisplayed));
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
