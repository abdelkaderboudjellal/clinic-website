import React from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PatientTestimonials from "./PatientTestimonials";

import { RxQuote } from "react-icons/rx";
const Testimonials = () => {
  const items = [
    {
      name: "Rendli may",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/250-250-2.jpg",
      title: "Ennuim ,Australia",
      text: "I recently found myself under your care for a cardiac issue. While there, accompanied by my wife, we found that the entire staff at Jamaica Hospital was exceedingly professional and efficient, from your E.R. receptionists to the cardiac care team. You should be proud of your outstanding staff and service.",
    },
    {
      name: "Donalnd Harssan",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/250-250-3.jpg",
      title: "Ponta Grossa ,Brazil",
      text: "I recently found myself under your care for a cardiac issue. While there, accompanied by my wife, we found that the entire staff at Jamaica Hospital was exceedingly professional and efficient, from your E.R. receptionists to the cardiac care team. You should be proud of your outstanding staff and service.",
    },
    {
      name: "Micheals jonson",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/250-250-4.jpg",
      title: "Turki ,Filand",
      text: "I recently found myself under your care for a cardiac issue. While there, accompanied by my wife, we found that the entire staff at Jamaica Hospital was exceedingly professional and efficient, from your E.R. receptionists to the cardiac care team. You should be proud of your outstanding staff and service.",
    },
    {
      name: "Micheals jonson",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/250-250-1.jpg",
      title: "Ennuim ,Australia",
      text: "I recently found myself under your care for a cardiac issue. While there, accompanied by my wife, we found that the entire staff at Jamaica Hospital was exceedingly professional and efficient, from your E.R. receptionists to the cardiac care team. You should be proud of your outstanding staff and service.",
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[800],
          pt: 4,
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            justifyItems: "center",
            width: "70%",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: 28, md: 33 } }}
          >
            Patient Testimonials
          </Typography>
          <Typography variant="body1" color="#9e9e9e" py="2rem">
            There live the blind texts separated they right at the coast of the
            Semantics.
          </Typography>
          <Box
            sx={{
              border: "3px solid #1976D2",
              width: "55px",
              mx: "auto",
              mb: 5,
            }}
          />
          {/* <RxQuote size={80} color=" #1976D2" transform="rotate(3.1416rad)" /> */}
        </Box>
        <Carousel
          sx={{ zIndex: 0 }}
          navButtonsAlwaysVisible
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
        >
          {items.map((item, i) => (
            <PatientTestimonials
              key={i}
              name={item.name}
              title={item.title}
              image={item.image}
              text={item.text}
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Testimonials;
