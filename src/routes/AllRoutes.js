import { lazy } from "react";
import Products from "../pages/products";
import Tournaments from "../pages/tournament";
import ViewProduct from "../pages/products/ViewProduct";
import Setting from '../pages/setting'
import Support from '../pages/support'
import Transaction from '../pages/transaction'
import Users from '../pages/users/'
import HowToPlay from '../pages/setting/howtoplay'
import Profile from '../pages/setting/profile'


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
  {
    name: "Users",
    path: "/users",
    element: <Users />,
    private: true,
  },
 
  {
    name: "Transaction",
    path: "/transaction",
    element: <Transaction />,
    private: true,
  },
  {
    name: "Support",
    path: "/support",
    element: <Support />,
    private: true,
  },
  {
    name: "Setting",
    path: "/setting",
    element: <Setting />,
    private: true,
  },
  {
    name: "How To Play",
    path: "/setting/howToPlay",
    element: <HowToPlay />,
    private: true,
  },
  {
    name: "Profile",
    path: "/setting/profile",
    element: <Profile />,
    private: true,
  },

];

export default AllRoutes;
