import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (Wcomponent) => {
  return function Component() {
    const [toggle, setToggle] = useState(true);

    // handleToggle
    const handleToggle = () => setToggle(!toggle);
    return (
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div
          className={`w-80 md:w-1/5 ${
            !toggle ? "md:hidden left-0" : "-left-full"
          } bg-secondary md:static absolute transition-all duration-100 top-0 z-50 md:z-auto  h-full overflow-y-auto p-4`}
        >
          <Sidebar handleToggle={handleToggle} toggle={toggle} />
        </div>

        {/* Component & Header */}
        <main className={`w-full p-2.5 ${!toggle ? "w-full" : " md:w-4/5"}`}>
          <Header handleToggle={handleToggle} toggle={toggle} />
          <div className="h-full mt-2">
            <Wcomponent />
          </div>
        </main>
      </div>
    );
  };
};

export default Layout;
