import React from "react";
import CardDentalProced from "./CardDentalProced";
import { Box, Typography, Container } from "@mui/material";

import { GiCarSeat } from "react-icons/gi";
import { TbDental } from "react-icons/tb";

import { useTranslation } from "react-i18next";
const DentalProcedures = () => {
  const { t, i18n } = useTranslation("Home");
  const OfferedEN = [
    { id: 1, title: "Whitening", logo: <TbDental size={45} /> },
    { id: 2, title: "Cavity Filling", logo: <GiCarSeat size={45} /> },
    { id: 3, title: "Full Braces", logo: <TbDental size={45} /> },
    { id: 4, title: "Root Canal", logo: <TbDental size={45} /> },
    { id: 5, title: "Implants", logo: <TbDental size={45} /> },
    { id: 6, title: "Capping", logo: <GiCarSeat size={45} /> },
  ];
  const OfferedFR = [
    { id: 1, title: "Blanchiment", logo: <TbDental size={45} /> },
    { id: 2, title: "Remplissage de cavité", logo: <GiCarSeat size={45} /> },
    { id: 3, title: "Broches complètes", logo: <TbDental size={45} /> },
    { id: 4, title: "Canal", logo: <TbDental size={45} /> },
    { id: 5, title: "Implants", logo: <TbDental size={45} /> },
    { id: 6, title: "Plafonnement", logo: <GiCarSeat size={45} /> },
  ];
  const OfferedAR = [
    { id: 1, title: "تبييض", logo: <TbDental size={45} /> },
    { id: 2, title: "ملء تجويف", logo: <GiCarSeat size={45} /> },
    { id: 3, title: "الأقواس الكاملة", logo: <TbDental size={45} /> },
    { id: 4, title: "قناة الجذر", logo: <TbDental size={45} /> },
    { id: 5, title: "يزرع", logo: <TbDental size={45} /> },
    { id: 6, title: "قناة الأسنان", logo: <GiCarSeat size={45} /> },
  ];
  let Offered;
  switch (true) {
    case i18n.language == "en":
      Offered = OfferedEN;
      break;
    case i18n.language == "fr":
      Offered = OfferedFR;
      break;
    case i18n.language == "ar":
      Offered = OfferedAR;
      break;
  }
  return (
    <>
      <Box
        my="2rem"
        sx={{
          flexDirection: "column",
          justifyItems: "center",
          width: "70%",
          mx: "auto",
          textAlign:"center"
        }}
      >
        <Typography variant="h4" sx={{fontSize:{xs:28,md:33},fontWeight:500}}>{t("Offered")}</Typography>
        <Typography variant="body1" color="#9e9e9e" py="2rem">
       ....................
        </Typography>
        <Box
          sx={{
            border: "3px solid #1976D2",
            width: "55px",
            mx: "auto",
          }}
        />
      </Box>
      <Container
        maxWidth="lg"
        sx={{
          py: "1.4rem",
          color: "black",

          display: "grid",
          gridTemplateColumns: { md: "repeat(3, 1fr)" },
        }}
      >
        {Offered.map((item) => {
          return (
            <CardDentalProced
              key={item.id}
              title={item.title}
              logo={item.logo}
            />
          );
        })}
      </Container>
    </>
  );
};

export default DentalProcedures;
