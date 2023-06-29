import React from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";

const Dashboard = () => {
  return (
    <div className="tracking-wider">
      <Heading title="Dashboard" />
      {/* <section className="border p-3 rounded bg-white mt-4"></section> */}
    </div>
  );
};

export default Layout(Dashboard);
