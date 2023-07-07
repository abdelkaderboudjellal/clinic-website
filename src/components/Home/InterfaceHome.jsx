import React from "react";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";

import "./InterfaceHome.css";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DriveEta, VerifiedUser } from "@mui/icons-material";
const InterfaceHome = () => {
  const { t } = useTranslation(["Home"]);
  const theme = useTheme();
  return (
    <div className="InterfaceHome">
      <Stack direction="row">
        <Box
          sx={{
            bgcolor: "red",
            color: "white",
            height: "100%",
            boxShadow: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              px: 4,
              py: 2,
              width: 150,
              textAlign: "center",
            }}
          >
            {t("News")}
          </Typography>
        </Box>
        <marquee
          className="marq"
          width="100%"
          bgcolor={theme.palette.aek.back}
          behavior="alternate"
          loop="infinite"
        >
          {" "}
          {t("Excepteur")}
        </marquee>
      </Stack>
      <Box height="100%">
        <Container
          maxWidth="xl"
          sx={{ display: "flex", color: "black", py: { xs: 2, sm: 8 } }}
        >
          <Box
            sx={{
              textAlign: "start",
              width: { xs: "100%", md: "50%" },
              ml: { xs: "0", md: "50%" },
              bgcolor: { xs: "#eaeff18e", md: "transparent" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: 22, md: 28 },
                fontWeight: "bold",
                color: "#2196f3",
              }}
            >
              {t("title")}
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: 28, md: 33 }, fontWeight: "bold" }}
            >
              {t("GetSmile")}
            </Typography>
            <Typography variant="body1">{t("Excepteur")}</Typography>
            <List sx={{ maxWidth: "350px" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      bgcolor: "#2196f3",
                      p: 2,
                      borderRadius: "100%",
                      mx: 2,
                    }}
                  >
                    <VerifiedUser sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={t("icon1")} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      bgcolor: "#2196f3",
                      p: 2,
                      borderRadius: "100%",
                      mx: 2,
                    }}
                  >
                    <DriveEta sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={t("icon2")} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          {/*  <Box sx={{ display: { md: "block" }, width: { md: "50%" } }}></Box> */}
        </Container>
      </Box>
    </div>
  );
};

export default InterfaceHome;
