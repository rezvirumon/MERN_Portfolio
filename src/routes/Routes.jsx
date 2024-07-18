
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Error from "../pages/Error/Error";
import Setting from "../pages/Dashboard/Setting";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/setting',
                element: <Setting></Setting>
            },
        ]
    },
]);

export default router;
