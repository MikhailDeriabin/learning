import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {State} from "../store";
import {authActions} from "../store/authSlice";

const Header = () => {
  const isAuth = useSelector<State>(state => state.auth.isAuthenticated) as boolean;
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth &&
            <ul>
              <li><a href='/'>My Products</a></li>
              <li><a href='/'>My Sales</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        }
        {!isAuth &&
            <ul>
              <li><button>Login</button></li>
            </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
