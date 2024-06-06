import { Form, Link, useActionData, useNavigation, useSearchParams, useSubmit } from 'react-router-dom';
import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData() as {errors?: Record<string, string>, message?: string};
  const navigation = useNavigation();

  //use query from url
  const [params, setParams] = useSearchParams();
  const isLogin = params.get('mode') === 'login';
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <ul>
          {data && data.errors && Object.values(data.errors).map(e => <li key={e}>{e}</li>)}
        </ul>
        {data && data.message && <p>{data.message}</p>}
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
          {isLogin && <button disabled={isSubmitting}>{isSubmitting ? 'Logging In...' : 'Login'}</button>}
          {!isLogin && <button disabled={isSubmitting}>{isSubmitting ? 'Creating...' : 'Create'}</button>}
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
