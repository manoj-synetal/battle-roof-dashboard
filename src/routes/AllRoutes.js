import { lazy } from "react";
import Products from "../pages/products";
import Orders from "../pages/orders";
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
    path: "/products",
    element: <Products />,
    private: true,
  },

  {
    name: "View Products",
    path: "/product/view/",
    element: <ViewProduct />,
    private: true,
  },

  {
    name: "Orders",
    path: "/orders",
    element: <Orders />,
    private: true,
  },
];

export default AllRoutes;
