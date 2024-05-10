import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const Dispatch = useDispatch()
  const toggleCounterHandler = () => {};
  const increamenthandle=()=>{
    Dispatch({type:'increament'})

  }
  const decrementhandle=()=>{
    Dispatch({type:'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        <div className={classes.value}> {counter} </div>
        
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button  className={classes.but} onClick={increamenthandle}>Increament</button>
      <button  className={classes.but} onClick={decrementhandle}>Decrement</button>
    </main>
  );
};

export default Counter;

