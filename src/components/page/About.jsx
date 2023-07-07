import React from "react";
import BondOfTrust from "../About/BondOfTrust";
import BriefHistory from "../About/BriefHistory";

import Testimonials from "../About/Testimonials";
import Extention from "../About/Extention";
import Recommendation from "../Home/Recommendation.jsx";
import NavAbout from "../About/NavAbout";

const About = () => {
  return (
    <>
      <NavAbout />
      <BriefHistory />
      <Extention />
      <BondOfTrust />
      <Testimonials />
      <Recommendation />
    </>
  );
};

export default About;
