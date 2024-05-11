import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { StoreActions } from '../Store/Index';
const Counter = () => {
  const counter = useSelector(state=>state.counter.counter)
  const Toggle = useSelector(state=>state.counter.toggle)

  const Dispatch = useDispatch()
  const toggleCounterHandler = () => {
    Dispatch(StoreActions.toggle())
  };
  const increamenthandle=()=>{
    Dispatch(StoreActions.increament())
  }
  const decrementhandle=()=>{
    Dispatch(StoreActions.decrement())
  }
  const increasehandle=()=>{
    Dispatch(StoreActions.increase(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {!Toggle && <div className={classes.value}> {counter} </div>}
        
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button  className={classes.but} onClick={increamenthandle}>Increament</button>
      <button  className={classes.but} onClick={decrementhandle}>Decrement</button>
      <button  className={classes.but} onClick={increasehandle}>IncrementBy2</button>
    </main>
  );
};

export default Counter;

