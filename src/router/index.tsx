import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";
import App from "../App";
import PlanetsFactsSite from "../pages/planets-facts-site";
import SpaceTourism from "../pages/space-tourism";
import Designo from "../pages/designo-multi-page";
import DesignoService from "../pages/designo-multi-page/service";
import DesignoAbout from "../pages/designo-multi-page/about";
import DesignoLocations from "../pages/designo-multi-page/locations";
import Contact from "../pages/designo-multi-page/contact";

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
    {
        path: "/space-tourism",
        element: <SpaceTourism />
    },
    {
        path: 'designo-multi-page',
        element: <Designo />
    },
    {
        path: 'designo-multi-page/service/:serviceId',
        element: <DesignoService />
    },
    {
        path: 'designo-multi-page/about',
        element: <DesignoAbout />
    },
    {
        path: 'designo-multi-page/locations',
        element: <DesignoLocations />
    },
    {
        path: 'designo-multi-page/contact',
        element: <Contact />
    },
]);