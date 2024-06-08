import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

/**
 * This are an mistake.
 * @returns 
 */
function MainNavigation() {
  //data from main router in App component
  const authToken: any = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!authToken && <li>
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Log In
            </NavLink>
          </li>}
          {
            authToken && <li>
              <Form action='/logout' method='post'>
                  <button>Logout</button>
              </Form>
            </li>
          }
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
