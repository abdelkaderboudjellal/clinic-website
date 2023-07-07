import { Box, Container, Typography } from "@mui/material";
import React from "react";

import CardPhysio from "./CardPhysio";

const Physio = () => {
  const listTeam = [
    {
      id: 1,
      name: "Joint Pains",
      specialty:
        "A low carb high fat diet that brings quick results in less time",

      image: "http://wwsthemes.com/themes/medwise/v2.0/images/490-490-10.jpg",
    },
    {
      id: 2,
      name: "Sports Injury",
      specialty:
        "A low carb high fat diet that brings quick results in less time",

      image: "http://wwsthemes.com/themes/medwise/v2.0/images/490-490-11.jpg",
    },
    {
      id: 3,
      name: "Muscle Fatigue",
      specialty:
        "A low carb high fat diet that brings quick results in less time",

      image: "http://wwsthemes.com/themes/medwise/v2.0/images/490-490-12.jpg",
    },
    {
      id: 4,
      name: "Back Pain",
      specialty:
        "A low carb high fat diet that brings quick results in less time",

      image: "http://wwsthemes.com/themes/medwise/v2.0/images/490-490-13.jpg",
    },
  ];
  return (
    <>
      <Container maxWidth="lg" sx={{ flexDirection: "column", my: 8 }}>
        <Box
          sx={{
            display: "block",
            mx: "auto",
            width: { md: "70%" },
            textAlign: "center",
          }}
        >
          <Typography component="h1" variant="h4" py="10px" fontWeight="bold">
            Physio Departments
          </Typography>
          <Typography component="h1" variant="body1" py="10px">
            There live the blind texts separated they right at the coast of the
            Semantics.
          </Typography>
          <Box
            sx={{
              border: "3px solid #1976D2",
              width: "55px",
              mx: "auto",
              my: 4,
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(4,1fr)",
              md: "repeat(3,1fr)",
              sm: "repeat(2,1fr)",
            },
            maxWidth: "xl",
          }}
        >
          {listTeam.map((team) => {
            return (
              <CardPhysio
                key={team.id}
                name={team.name}
                image={team.image}
                email={team.email}
                phone={team.phone}
                specialty={team.specialty}
              />
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Physio;
