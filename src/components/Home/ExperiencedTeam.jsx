import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import CardTeam from "./CardTeam";
import { useTranslation } from "react-i18next";

const StyledImg = styled("img")();
const ExperiencedTeam = () => {
  const { t, i18n } = useTranslation(["Home"]);
  const listTeamEN = [
    {
      id: 1,
      name: "David Paulson",
      specialty: "Dental Surgeon",
      phone: "0093-513-244",
      email: "roberto@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-1.jpg",
    },
    {
      id: 2,
      name: "Merri Hoffman",
      specialty: "Dental Implants",
      phone: "0093-513-244",
      email: "merri@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-2.jpg",
    },
    {
      id: 3,
      name: "Kathy Cruse",
      specialty: "Smile Specialist",
      phone: "0093-513-244",
      email: "kathy@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-3.jpg",
    },
  ];
  const listTeamFR = [
    {
      id: 1,
      name: "David Paulson",
      specialty: "DChirurgien-dentiste",
      phone: "0093-513-244",
      email: "roberto@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-1.jpg",
    },
    {
      id: 2,
      name: "Merri Hoffman",
      specialty: "Implants dentaires",
      phone: "0093-513-244",
      email: "merri@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-2.jpg",
    },
    {
      id: 3,
      name: "Kathy Cruse",
      specialty: "Spécialiste du sourire",
      phone: "0093-513-244",
      email: "kathy@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-3.jpg",
    },
  ];
  const listTeamAR = [
    {
      id: 1,
      name: "ديفيد بولسون",
      specialty: "جراح أسنان",
      phone: "0093-513-244",
      email: "roberto@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-1.jpg",
    },
    {
      id: 2,
      name: "ميري هوفمان",
      specialty: "زراعة الأسنان",
      phone: "0093-513-244",
      email: "merri@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-2.jpg",
    },
    {
      id: 3,
      name: "كاثي كروس",
      specialty: "أخصائي الابتسامة",
      phone: "0093-513-244",
      email: "kathy@medwise.com",
      image: "http://wwsthemes.com/themes/medwise/v2.0/images/222-222-3.jpg",
    },
  ];
  let listTeam;
  switch (true) {
    case i18n.language == "en":
      listTeam = listTeamEN;
      break;
    case i18n.language == "fr":
      listTeam = listTeamFR;
      break;
    case i18n.language == "ar":
      listTeam = listTeamAR;
      break;
  }
  const theme = useTheme();
  return (
    <div className="Experienced ">
      <Container maxWidth="lg" sx={{ flexDirection: "column", py: 8 }}>
        <Box
          sx={{
            display: "block",
            mx: "auto",
            width: { md: "70%" },
            textAlign: "center",
          }}
        >
          <Typography component="h1" variant="h4" py="10px" fontWeight="bold" sx={{fontSize:{xs:28,md:35}}}>
            {t("title_Team")}
          </Typography>
          <Typography component="h1" variant="body1" py="10px">
            {t("discriptio_Team")}
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
            gridTemplateColumns: { md: "repeat(3,1fr)" },
            maxWidth: "lg",
            p: 2,
          }}
        >
          {listTeam.map((team) => {
            return (
              <CardTeam
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
    </div>
  );
};

export default ExperiencedTeam;
