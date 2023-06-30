import React, { Suspense } from "react";
import AllRoutes from "./AllRoutes";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Toaster } from "react-hot-toast";
import Logo from "../assets/Logo.png";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          <img src={Logo} className="w-44" />
        </div>
      }
    >
      <Toaster />
      <Routes>
        {AllRoutes.map((item) => {
          return (
            <Route
              key={item.name}
              // element={item.private ? <PrivateRoute /> : <PublicRoute />}
            >
              <Route
                name={item.name}
                exact={true}
                path={item.path}
                element={item.element}
              />
            </Route>
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default App;
