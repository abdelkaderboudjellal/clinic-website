import { Box } from "@mui/material";
import React from "react";
import InterfaceHome from "../Home/InterfaceHome";
import DentalProcedures from "../Home/DentalProcedures";
import DentalCare from "../Home/DentalCare";
import Dentistry from "../Home/Dentistry";
import Appointment from "../Home/Appointment";
import Carousel from "../carousel/Carousel";
import Recommendation from "../Home/Recommendation.jsx";
import DentalTourism from "../Home/DentalTourism";
import ExperiencedTeam from "../Home/ExperiencedTeam";

const Home = () => {
  return (
    <main className="main" >
      <InterfaceHome />
      <Appointment />
      <DentalProcedures />
      <DentalCare />
      <Dentistry />
      <Carousel />
      <Recommendation />
      <DentalTourism />
      <ExperiencedTeam />
    </main>
  );
};

export default Home;
