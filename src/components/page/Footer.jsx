import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button } from "@mui/material";
import { Call, Email } from "@mui/icons-material";
import "./Contact.css";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation(["Footer"]);
  return (
    <div className="Footer">
      <Box
        component="footer"
        sx={{
          p: { xs: 4, sm: 8 },
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#b0b3b6cc" : "#38393acc",
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Grid container sx={{ justifyItems: "center" }} columns={13}>
            <Grid item xs={12} sm={6} md={4} mx="4px">
              <Typography variant="h6" color="text.primary" gutterBottom>
                {t("title_About")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("title_BondofTrust")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("title_History")}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {t("contact")}
              </Typography>
              <Typography variant="body2" color="text.secondary" px={1}>
                {t("address")}
              </Typography>

              <Box
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  justifyItems: "start",
                  alignItems: "start",
                  px: 1,

                  /*    border: "none",
                color: theme.palette.aek.tex,
                "&:hover": { border: "none" }, */
                }}
              >
                <Email /> :
                <Link
                  sx={{
                    color: "text.secondary",
                    textDecoration: "underline black",
                    pl: 2,
                  }}
                  href="mailto:kaderboudj94@gmail.com"
                >
                  kaderboudj94@gmail.com
                </Link>
              </Box>
              <Box
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  justifyItems: "start",
                  alignItems: "start",
                  px: 1,
                }}
              >
                <Call /> :
                <Link
                  sx={{
                    color: "text.secondary",
                    textDecoration: "underline black",
                    pl: 2,
                  }}
                  href="tel:+213659066090"
                >
                   0659066090
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {t("Follow")}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  display: "grid",
                  gridTemplateColumns: " repeat(4, 1fr)",
                  mx: "auto",
                }}
              >
                <Link href="https://www.instagram.com/abdelkader_boudjellal/">
                  <InstagramIcon fontSize="large" sx={{ color: "#E1306C" }} />
                </Link>
                <Link href="https://www.facebook.com/abdelkaderboudjellal09/">
                  <FacebookIcon color="primary" fontSize="large" />
                </Link>
                <Link href="https://twitter.com/BoudjellalAek">
                  <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
                </Link>
                <Link href="https://www.linkedin.com/in/abdelkader-boudjellal-29098813b/">
                  <LinkedInIcon fontSize="large" color="primary" />
                </Link>
                {/*       <YouTubeIcon fontSize="large" sx={{ color: "#FF0000" }} />

                <PinterestIcon fontSize="large" sx={{ color: "#E60023" }} /> */}
              </Stack>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {t("Copyright")}
              <Link color="inherit" href="mailto:kaderboudj94@gmail.com">
                Abdelkader
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
