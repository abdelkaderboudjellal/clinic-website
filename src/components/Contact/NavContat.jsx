import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
/* import Link from "react-router-dom"; */
import "../page/Contact.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavContat = ({titlepage}) => {
  const { t, i18n } = useTranslation(["Contact"]);
  return (
    <div className="Department ">
      <Box sx={{ bgcolor: "#021f31c5" }}>
        <Container maxWidth="lg">
          <Stack
            height="200px"
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ color: "white", fontWeight: "bold",fontSize:{xs:28,md:40} }}
            >
              {titlepage}
            </Typography>
          </Stack>
        </Container>
        <Box
          sx={{
            bgcolor: "#fdfcfc57",
          }}
        >
          <Container maxWidth="lg">
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ maxWidth: "lg", py: 2, color: "white" }}
            >
              <Link underline="hover"  style={{color:"white"}} to="/" fontWeight="500">
              {t("home")}
              </Link>
              <Typography color="white" fontWeight="50">
             {titlepage}
              </Typography>
            </Breadcrumbs>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default NavContat;
