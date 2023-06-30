import React from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";

const Users = () => {
  return (
    <div className="tracking-wider h-full">
      <Heading title="Users" />
    </div>
  );
};

export default Layout(Users);
