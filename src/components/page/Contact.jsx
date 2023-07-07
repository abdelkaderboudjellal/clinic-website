import React from "react";
import { Box, Typography, Button, Container, Stack, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./Contact.css";

import { LocalPhone, Videocam } from "@mui/icons-material";
import ContactAddress from "../Contact/ContactAddress";
import TabsContact from "../Contact/TabsContact";
import NavContat from "../Contact/NavContat";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t, i18n } = useTranslation(["Contact"]);
  const contacts = [
    {
      id: 1,
      city: t("Medea"),
      address: t("Address_Medea"),
      phone: "213-562-5625",
      email: "medwise@example.com",
    },
    {
      id: 2,
      city: t("Blida"),
      address: t("Address_Blida"),
      phone: "213-562-5625",
      email: "medwise@example.com",
    },
    {
      id: 3,
      city: t("Alger"),
      address: t("Address_Alger"),
      phone: "213-562-5625",
      email: "medwise@example.com",
    },
  ];
  const theme = useTheme();
  const colors = theme.palette.aek.back;
  return (
    <Box className="contact">
      <NavContat titlepage={t("contact")} />
      <Box sx={{ bgcolor: colors }}>
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: colors,
            py: "100px",
            color: "black",
            /* minWidth: "420px", */
          }}
        >
          <Box
            className="cardPaper"
            elevation={3}
            sx={{
              /*   width: "60%",
            height: "400px",
            mx: "auto", */
              p: "2%",
              textAlign: "start",
              /* minWidth: "420px" */
            }}
          >
            <Box
              sx={{
                textAlign: "start",
                flexDirection: "colum",
                justifyContent: "space-between",
                width: { md: "80%" },
                color: "black",
              }}
            >
              <Typography variant="h4" sx={{ py: ".6rem" ,fontSize:{xs:28,md:33}}}>
                {t("title_Hospital")}
              </Typography>
              <Typography variant="body1" sx={{ py: ".6rem" }}>
                {t("Desccription")}.
              </Typography>
              <Typography variant="body1" sx={{ py: ".6rem" }}>
                {t("Desccription1")}.
              </Typography>
            </Box>
            <Button sx={{ color: theme.palette.aek.main }}>
              <LocalPhone sx={{ m: 2 }} />
              <Typography sx={{ fontWeight: "bold" ,fontSize:{xs:16,md:33}}}>
                {t("Helpline")} : 1800-534-123
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              py: 5,
              display: "grid",
              gridTemplateColumns: { md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
            }}
          >
            {contacts.map((contact) => {
              return (
                <ContactAddress
                  key={contact.id}
                  city={contact.city}
                  address={contact.address}
                  phone={contact.phone}
                  email={contact.email}
                />
              );
            })}
          </Box>
     
            <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              py: 5,
              px: 2,
              bgcolor: theme.palette.aek.main,
              borderRadius: 12,
              textAlign: "center",
              color: theme.palette.text.secondary,
              justifyContent: "center", alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ py: ".6rem", color: "white",fontSize:{xs:28,md:33} }}>
              {t("Online_video")}
            </Typography>
            <Button
              variant="contained"
              sx={{ display: "block", maxWidth: "200px", mx: "auto" }}
              startIcon={<Videocam />}
            >
              Videocam
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ py: 15, bgcolor: "#021f31c5" }}>
        <Stack sx={{ maxWidth: "md", mx: "auto" }}>
          <Typography variant="h5" sx={{ color: "#29B6F6", fontWeight: 800 }}>
            {t("The_Common_Disease")}
          </Typography>
          <Typography variant="h3" sx={{ color: "white", fontWeight: 800,fontSize:{xs:28,md:38} }}>
            {t("The_Common_Disease_description")}
          </Typography>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ borderRadius: 0, my: 2, px: 4, py: 1 }}
            >
              {t("CONTACT_US")}
            </Button>
            <Button
              variant="outlined"
              sx={{
                my: 2,
                mx: 1,
                color: "white",
                fontWeight: 800,
                border: "1px solid white ",
                borderRadius: 0,
                px: 4,
                py: 1,
                "&:hover": {
                  border: "1px solid white ",
                  color: "black",
                  bgcolor: "white",
                },
              }}
            >
              {t("CASE_STUDIS")}
            </Button>
          </Stack>
        </Stack>
      </Box>
      <TabsContact />
    </Box>
  );
};

export default Contact;
