import type { RouteObject } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import ProtectedRoutes from "./ProtecteedRoutes";
import ListOrder from "../components/pages/ListOrder";
import DetailOrders from "../components/pages/DetailOrders";
import CreateOrder from "../components/pages/CreateOrders";

const routes : RouteObject[] = [
    {
        path: "/",
        element: < Home/>
    },
    {
        path:'/login',
        element: 
        <ProtectedRoutes>
            <Login/>
        </ProtectedRoutes>
    },
    {
        path:'/orders',
        element: 
        <ProtectedRoutes>
            <ListOrder/>
        </ProtectedRoutes>
    },
    {
        path:'/orders/:id',
        element: 
        <ProtectedRoutes>
            <DetailOrders/>
        </ProtectedRoutes>
    },
    {
        path:'/create',
        element: 
        <ProtectedRoutes>
            <CreateOrder />
        </ProtectedRoutes>
    },


];
export default routes;