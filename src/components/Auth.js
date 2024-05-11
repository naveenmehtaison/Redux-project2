import classes from './Auth.module.css';
import { StoreActions2 } from '../Store/Index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
const Auth = () => {
  const Dispatch = useDispatch()
  const islog =  useSelector((state)=>state.authentication.isauth)
  const hanldelogin=(e)=>{
    e.preventDefault()
    Dispatch(StoreActions2.login())

  }
  console.log(islog)
  return (
    <>
      { !islog &&  <main className={classes.auth}>
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />
            </div>
            <div className={classes.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <button onClick={hanldelogin}>Login</button>
          </form>
          
        </section>
      </main>
      } 
      {islog && <UserProfile/>}
    </>
  );
};

export default Auth;
