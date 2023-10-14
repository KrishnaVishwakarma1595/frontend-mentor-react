import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";
import App from "../App";
import PlanetsFactsSite from "../pages/planets-facts-site";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/root",
        element: <Root />
    },
    {
        path: "/planets-fact-site",
        element: <PlanetsFactsSite />
    },
]);