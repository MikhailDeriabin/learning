import classes from './Auth.module.css';
import {useDispatch, useSelector} from "react-redux";
import UserProfile from "./UserProfile";
import {State} from "../store";
import {authActions} from "../store/authSlice";

const Auth = () => {
  const isAuth = useSelector<State>(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(authActions.login());
  }

  return (
      <>
        { !isAuth && <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'/>
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password'/>
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
          </section>
        </main>
        }
        { isAuth && <UserProfile/> }
      </>
  );
};

export default Auth;
