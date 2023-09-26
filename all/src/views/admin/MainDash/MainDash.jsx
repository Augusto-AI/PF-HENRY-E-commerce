import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import RightSide from "../RigtSide/RightSide";
import "./MainDash.scss";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      <RightSide />
    </div>
  );
};

export default MainDash;
