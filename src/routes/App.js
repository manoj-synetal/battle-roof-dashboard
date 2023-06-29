import React, { Suspense } from "react";
import AllRoutes from "./AllRoutes";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
