import React from "react";
import "./InterfaceHome.css";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const DentalTourism = () => {
  const { t, i18n } = useTranslation(["Home"]);
  const [progress, setProgress] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 970 ? 970 : prevProgress + 10
      );
    }, 50);
    
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <>
      <Box className="Dental_Tourism" >
        <Box
          sx={{
            bgcolor: "#03409ca2",
            height: "100%",
            minHeight: "320px",
            py: 12,
          }}
          
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "grid",
              color: "white",
              height: "80%",
              gridTemplateColumns: { md: "repeat(2,1fr)" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                /* display:"flex",flexDirection:"column",justifyContent:"center",
              justifyItems:"center",
              alignItems:"start", */
                textAlign: "start",
                /*   mt:"35px", */
                width: { xs: "100%", md: "80%" },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", py: 1 }}>
                {t("title_Tourism")}
              </Typography>
              <Typography  variant="body1" sx={{ fontWeight: "bold", py: 1 }}>
                {t("dicription_dental")}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", py: 1 }}>
                {t("dicription_dental1")}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  display: "block",
                  border: "1px solid black",
                  color: "white",
                  bgcolor: "black",
                  py: 1,
                  px: 4,
                  mx: { xs: "auto", md: 0 },
                  "&:hover": {
                    bgcolor: "#2e3136",
                    color: "white",
                    border: "1px solid #2e3136",
                  },
                }}
              >
                {t("PlansButton")}
              </Button>
            </Box>
            <Box
              sx={{
                display: "grid",
                textAlign: "left",
                width: { xs: "100%", md: "80%" },
                my: "auto",
                gridTemplateColumns: { sm: "repeat(2,1fr)" },
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    py: 1,
                    width: { xs: "60%", md: "80%" },
                    mx: "auto",
                  }}
                >
                  {progress}+
                  
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    py: 1,
                    width: { xs: "60%", md: "80%" },
                    mx: "auto",
                  }}
                >
                  {t("dicription_dental2")}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    py: 1,
                    width: { xs: "60%", md: "80%" },
                    mx: "auto",
                  }}
                >
                  20+
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    py: 1,
                    width: { xs: "60%", md: "80%" },
                    mx: "auto",
                  }}
                >
                  {t("dicription_dental3")}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default DentalTourism;
