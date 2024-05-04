import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./page/HomePage";
import EventsPage from "./page/EventsPage";
import NewEventPage from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";
import PageLayout from "./page/PageLayout";
import EventDetailsPage, {eventDetailsAction, eventsDetailsPageLoader} from "./page/EventDetailsPage";
import EventLayout from "./page/EventLayout";
import {fetchEvents} from "./util/http";
import ErrorPage from "./page/ErrorPage";
import {createUpdateEvent} from "./components/EventForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout/>,
        //Show this page if any error will be thrown
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <HomePage/> },
            {
                path: 'events',
                element: <EventLayout/>,
                children: [
                    //u can specify the loader func, which is kinda pre-hook, which executes before the page is rendered
                    //The loader func should return the value u want to receive in the component
                    { index: true, element: <EventsPage/>, loader: fetchEvents },
                    {
                        path: ':id',
                        //Here we have a shared loader. U can get data from it via useRouteLoaderData('event-detail')
                        loader: eventsDetailsPageLoader,
                        id: 'event-detail',
                        children: [
                            { index: true,  element: <EventDetailsPage/>, action: eventDetailsAction },
                            { path: 'edit', element: <EditEventPage/>, action: createUpdateEvent }
                        ]
                    },
                    //Register an action
                    //Actions are called whenever the app sends a non-get submission ("post", "put", "patch", "delete") = form events
                    { path: 'new', element: <NewEventPage/>, action: createUpdateEvent }
                ]
            },
        ]
    }
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
