import React from "react";
import Nutrition from "./Nutrition";
import Physio from "./Physio";
import Medical from "./Medical";
import NavDepartement from "./NavDepartement";

const Departments = () => {
  return (
    <>
      <NavDepartement/>
      <Nutrition />
      <Physio/>
      <Medical/>
    </>
  );
};

export default Departments;
