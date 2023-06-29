import { lazy } from "react";

const Users = lazy(() => import("../pages/users/"));
const Products = lazy(() => import("../pages/games"));
const Setting = lazy(() => import("../pages/setting"));
const Support = lazy(() => import("../pages/support"));
const Login = lazy(() => import("../pages/auth/Login"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Profile = lazy(() => import("../pages/setting/profile"));
const Tournaments = lazy(() => import("../pages/tournament"));
const Transaction = lazy(() => import("../pages/transaction"));
const ViewGame = lazy(() => import("../pages/games/ViewGame"));
const HowToPlay = lazy(() => import("../pages/setting/howtoplay"));

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
    element: <ViewGame />,
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
