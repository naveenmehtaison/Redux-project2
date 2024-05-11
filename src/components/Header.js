import classes from './Header.module.css';
import { StoreActions2 } from '../Store/Index';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import UserProfile from './UserProfile';
const Header = () => {
  const Dispatch = useDispatch()
  const islog =  useSelector((state)=>state.authentication.isauth)
  const hanldelogout=(e)=>{
    e.preventDefault()
    Dispatch(StoreActions2.logout())

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {islog && <nav>
       <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={hanldelogout}>Logout</button>
          </li>
        </ul>
        
      </nav>}
    </header>
  );
};

export default Header;
