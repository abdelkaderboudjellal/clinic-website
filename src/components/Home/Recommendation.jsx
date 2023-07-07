import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
const StyledImg = styled("img")();
const Recommendation = () => {
  const { t, i18n } = useTranslation(["Home"]);
  const theme = useTheme();
  return (
    <Container maxWidth="lg" sx={{ flexDirection: "column" ,my:8}}>
      <Box sx={{ display: "block", mx: "auto", width: { md: "70%" } ,textAlign:"center"}}>
        <Typography component="h1" variant="h4" py="10px" fontWeight="bold " sx={{fontSize:{xs:28,md:35}}}>
          {t("Associations_Recommendations")}
        </Typography>
        <Typography component="h1" variant="body1" py="10px">
          {t("discription_A_R")}
        </Typography>
        <Box
          sx={{ border: "3px solid #1976D2", width: "55px", mx: "auto", my: 4 }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(4,1fr)", sm: "repeat(2,1fr)" },
          maxWidth: "lg",
        }}
      >
        <Box
          sx={{
            borderRight: { sm: "1px solid #C7CDD2" },
            borderBottom: { xs: "1px solid #C7CDD2" },
          }}
        >
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-8.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "150px", md: "150px" },
            }}
          />
        </Box>
        <Box
          sx={{
            borderRight: { md: "1px solid #C7CDD2" },
            borderBottom: { xs: "1px solid #C7CDD2" },
          }}
        >
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-6.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "300px", md: "150px" },
            }}
          />
        </Box>
        <Box
          sx={{
            borderRight: { sm: "1px solid #C7CDD2" },
            borderBottom: { xs: "1px solid #C7CDD2" },
          }}
        >
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-3.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "300px", md: "150px" },
            }}
          />
        </Box>
        <Box sx={{ borderBottom: { xs: "1px solid #C7CDD2" } }}>
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-4.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "300px", md: "150px" },
            }}
          />
        </Box>
        <Box
          sx={{
            borderRight: { sm: "1px solid #C7CDD2" },
            borderBottom: { xs: "1px solid #C7CDD2", md: "none" },
          }}
        >
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-5.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "300px", md: "150px" },
            }}
          />
        </Box>
        <Box
          sx={{
            borderRight: { md: "1px solid #C7CDD2" },
            borderBottom: { xs: "1px solid #C7CDD2", md: "none" },
          }}
        >
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-7.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "300px", md: "150px" },
            }}
          />
        </Box>
        <Box
          sx={{
            borderRight: { sm: "1px solid #C7CDD2" },
            borderBottom: { xs: "1px solid #C7CDD2", sm: "none" },
          }}
        >
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-2.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "300px", md: "150px" },
            }}
          />
        </Box>
        <Box sx={{}}>
          {" "}
          <StyledImg
            src="http://wwsthemes.com/themes/medwise/v2.0/images/logo-1.png"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "40%",
              width: "80%",
              mx: "auto",
              my: "30%",
              maxWidth: { xs: "300px", md: "150px" },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Recommendation;
