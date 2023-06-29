import { lazy } from "react";
import Products from "../pages/products";
import Tournaments from "../pages/tournament";
import ViewProduct from "../pages/products/ViewProduct";

const Login = lazy(() => import("../pages/auth/Login"));
const Dashboard = lazy(() => import("../pages/dashboard"));

const AllRoutes = [
  {
    name: "Login",
    path: "/",
    element: <Login />,
    private: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    private: true,
  },
  {
    name: "Products",
    path: "/games",
    element: <Products />,
    private: true,
  },

  {
    name: "View Products",
    path: "/games/view/",
    element: <ViewProduct />,
    private: true,
  },

  {
    name: "Tournaments",
    path: "/Tournaments",
    element: <Tournaments />,
    private: true,
  },
];

export default AllRoutes;
