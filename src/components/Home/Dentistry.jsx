import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
const StyledImg = styled("img")();
const Dentistry = () => {
  const { t, i18n } = useTranslation(["Home"]);
  const theme = useTheme();
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          color: "white",
          height: "100%",
          flexGrow: 1,
          py: 8,
          textAlign: "left",
        }}
      >
        <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 12 }}>
          <Grid item xs={4} sm={6} md={6}>
            {/*    <img
                height={400}
                src={
                  "http://wwsthemes.com/themes/medwise/v2.0/images/600-533-1.jpg"
                }
                alt=""
                loading="lazy"
              /> */}
            <StyledImg
              src="http://wwsthemes.com/themes/medwise/v2.0/images/600-533-1.jpg"
              alt="Photo by Markus Spiske from Pexels"
              sx={{
                display: "block",
                height: 450,
                width: "100%",
                mx: "auto",
                maxWidth: { xs: "400px", sm: "none" },
              }}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sm={6}
            md={6}
            sx={{ textAlign: "start", py: "8px" }}
          >
            {/*  <Box my="4px" textAlign="start"> */}
            <Typography
              variant="h4"
              color={theme.palette.aek.tex}
              sx={{ fontSize: { xs: 28, md: 33 } }}
            >
              {t("title_dentistry")}
            </Typography>
            <Typography variant="body1" color="#9e9e9e" py="4px">
              {t("discription_dentistry")}
            </Typography>
            <Typography variant="body1" color="#9e9e9e" py="4px">
              {t("discription_dentistry1")}
            </Typography>
            {/*   </Box> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dentistry;
