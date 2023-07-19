import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "../../App.css";
import IconButton from "@mui/material/IconButton";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

import { Call, Email } from "@mui/icons-material";
import Switchs from "../Contact/Switch";
import { Link } from "@mui/material";
import ChangeLangue from "./ChangeLangue";

export default function FooterNavbar({ setMode }) {
  const [checke, setChecke] = React.useState(
    localStorage.getItem("currentMode") === "dark" ? false : true
  );
  const theme = useTheme();
  /*   const colorMode = React.useContext(ColorModeContext); */
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem(
          "currentMode",
          theme.palette.mode === "light" ? "dark" : "light"
        );
        setChecke(
          localStorage.getItem("currentMode") === "dark" ? false : true
        );
      },
    }),
    [theme.palette.mode]
  );
  return (
    <>
      <AppBar
        position="static"
        sx={{
          px: { md: "2%", sm: "0" },
          flexGrow: 1,
          backgroundColor: theme.palette.aek.back,
          color: theme.palette.aek.tex,
          boxShadow: "none",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: { md: "flex" },
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ChangeLangue />

            <Switchs checke={checke} onClick={colorMode.toggleColorMode} />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 0.1,
            }}
          >
            <Box
              variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
                fontSize: ".8rem",
              }}
            >
              <Link
                sx={{
                  color: theme.palette.aek.tex,
                  textDecoration: "underline black",
                  px: 2,
                }}
                href="mailto:kaderboudj94@gmail.com"
              >
                {" "}
                kaderboudj94@gmail.com
              </Link>
              <Email />
            </Box>
            <Box
              variant="outlined"
              sx={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignItems: "center",
                fontSize: ".8rem",
                px: 1,
              }}
            >
              <Link
                sx={{
                  color: "text.secondary",
                  textDecoration: "underline black",
                  px: 2,
                }}
                href="tel:+213659066090"
              >
                0659066090
              </Link>
              <Call />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
