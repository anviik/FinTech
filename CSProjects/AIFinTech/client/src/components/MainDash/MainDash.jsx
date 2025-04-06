import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>*Company Name* Stock Analysis</h1>
      <Table />
      <Cards />
    </div>
  );
};

export default MainDash;
