import { Form, Link, useSearchParams } from 'react-router-dom';
import classes from './AuthForm.module.css';

function AuthForm() {
  //use query from url
  const [params, setParams] = useSearchParams();
  const isLogin = params.get('mode') === 'login';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>{isLogin ? 'Login' : 'Create'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
