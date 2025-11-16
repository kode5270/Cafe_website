import type { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home/index";
const routes : RouteObject[] = [
    {
        path: "/",
        element: < Home/>
    },


];
export default routes;