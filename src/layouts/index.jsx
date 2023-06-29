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
          className={`w-80 ${
            !toggle ? "md:hidden left-0" : "-left-full"
          } bg-white md:static absolute border-r transition-all duration-100 top-0 z-50 md:z-auto  h-full overflow-y-auto p-4`}
        >
          <Sidebar handleToggle={handleToggle} toggle={toggle} />
        </div>

        {/* Component & Header */}
        <main className="w-full">
          <Header handleToggle={handleToggle} toggle={toggle} />
          <div className="p-4 bg-color h-full">
            <Wcomponent />
          </div>
        </main>
      </div>
    );
  };
};

export default Layout;
