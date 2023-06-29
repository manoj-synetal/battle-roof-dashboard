import React from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";

const Dashboard = () => {
  return (
    <div className="tracking-wider">
      <Heading title="Dashboard" />
    </div>
  );
};

export default Layout(Dashboard);
