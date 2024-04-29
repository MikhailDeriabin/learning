import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import PageLayout from "./pages/PageLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

//Creating the router
const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout/>,
        //If something goes wrong on this path show this page, u can also add own error elements to children
        errorElement: <ErrorPage/>,
        //All children can be accessed via <Outlet/> component (built-in)
        //So, here we can define the overall layout (nav, footer etc.) of the page and then add other pages via children
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/products', element: <ProductsPage /> },
            // Here we are adding dynamic routing
            { path: '/products/:id', element: <ProductDetailsPage /> }
        ]
    }
    //U can also define another routes here
]);

function App() {
    return(
        <RouterProvider router={router}/>
    );
}

export default App;
