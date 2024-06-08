import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/ErrorPage';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetailPage';
import EventsPage, { loader as eventsLoader } from './pages/EventsPage';
import EventsRootLayout from './pages/EventsRootLayout';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/RootLayout';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/NewsletterPage';
import AuthenticationPage, { AuthenticationPageAction } from "./pages/AuthenticationPage";
import logout from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import { loader } from './pages/EventDetailPage';

const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      // Updates the state of the token automatically
      loader: tokenLoader,
      //For getting data from that loader function in children, works kinda like context API
      id: 'root',
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ':eventId',
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                {
                  path: 'edit',
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                  loader: checkAuthLoader
                },
              ],
            },
            {
              path: 'new',
              element: <NewEventPage />,
              action: manipulateEventAction,
              loader: checkAuthLoader
            },
          ],
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
        {
          path: 'auth',
          element: <AuthenticationPage />,
          action: AuthenticationPageAction
        },
        {
          path: 'logout',
          action: logout
        }
      ],
    },
  ]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
