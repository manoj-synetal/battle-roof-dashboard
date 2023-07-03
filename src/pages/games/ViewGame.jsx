import React from "react";
import Layout from "../../layouts";
import Heading from "../../components/Heading";
import { useLocation } from "react-router-dom";

const ViewGame = () => {
  const { state } = useLocation();
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading title={`${state} Game`} />
        <span>Back</span>
      </div>
    </div>
  );
};

export default Layout(ViewGame);
