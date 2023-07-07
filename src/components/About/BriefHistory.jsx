import React from "react";
import { Box, Grid, Typography, Container, Stack } from "@mui/material";
import "../page/Contact.css";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
const StyledImg = styled("img")();
const BriefHistory = () => {
  const { t, i18n } = useTranslation(["About"]);
  const theme = useTheme();
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", color: "white", height: "100%" }}
      >
        <Grid
          container
          spacing={2}
          columns={{ xs: 4, sm: 6, md: 12 }}
          sx={{ flexGrow: 1, py: 8, textAlign: "start" }}
        >
          <Grid item xs={4} sm={6} md={6}>
            <Stack spacing={2} my={"10%"}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {t("title_History")}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={theme.palette.aek.tex} sx={{fontSize:{xs:28,md:33}}}
              >
                {t("title_clinique")}
              </Typography>
              <Typography variant="h6" color="#9e9e9e">
                {t("description_clinique")}
              </Typography>
              <Typography variant="body1" color="#9e9e9e">
                {t("description_clinique1")}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sm={6} md={6}>
            <StyledImg
              src="http://wwsthemes.com/themes/medwise/v2.0/images/750-500-2.jpg"
              alt="Photo by Markus Spiske from Pexels"
              sx={{
                display: "block",
                height: 400,
                width: { md: "80%" },
                mx: "auto",
                maxWidth: { xs: "100%", sm: "none" },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BriefHistory;
