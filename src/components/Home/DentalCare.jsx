import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const DentalCare = () => {
  const { t, i18n } = useTranslation(["Home"]);
  return (
    <Box className="DentalCare">
      <Box sx={{ bgcolor: "#066bee7e", height: "100%", mt: 12 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            color: "white",
            height: "100%",
            justifyContent: "space-between"
          }}
        >
          <Box
            sx={{
              textAlign: "start",
              width: { xs: "100%", md: "50%" },
              my: "auto",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", py: 2,fontSize:{xs:28,md:35} }}>
              {t("Plans")}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                border: "2px solid white",
                color: "white",
                py: 1,
                px: 4,
                "&:hover": { bgcolor: "white", color: "black" },
              }}
            >
              {t("PlansButton")}
            </Button>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img
              height={400}
              className="imageDante"
              src={
                "http://wwsthemes.com/themes/medwise/v2.0/images/500-580-1.png"
              }
              alt=""
              loading="lazy"
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DentalCare;
