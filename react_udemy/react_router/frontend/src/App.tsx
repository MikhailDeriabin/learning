// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./page/HomePage";
import EventsPage from "./page/EventsPage";
import NewEventPage from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";
import PageLayout from "./page/PageLayout";
import EventDetailsPage from "./page/EventDetailsPage";
import EventLayout from "./page/EventLayout";
import {fetchEvents} from "./util/http";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout/>,
        children: [
            { path: '/', element: <HomePage/> },
            {
                path: 'events',
                element: <EventLayout/>,
                children: [
                    //u can specify the loader func, which is kinda pre-hook, which executes before the page is rendered
                    //The loader func should return the value u wanna receive in the component
                    { path: '', element: <EventsPage/>, loader: fetchEvents },
                    { path: ':id', element: <EventDetailsPage/> },
                    { path: 'new', element: <NewEventPage/> },
                    { path: ':id/edit', element: <EditEventPage/> }
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
