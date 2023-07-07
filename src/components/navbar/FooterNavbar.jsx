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
    <Box 
      sx={{
        flexGrow: 1,
        px: { md: "2%", sm: "0" },
      }}
    >
      <AppBar
        position="static"
        sx={{
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
            {/*    <ButtonGroup variant="text"  color="inherit">
              <Button
                className="btn-4"
               
              >
                Fr
              </Button>
              <Button>
                En
              </Button>
            </ButtonGroup> */}
            <ChangeLangue />
            {/*   <IconButton
              sx={{ ml: 1,border:`1px solid ${theme.palette.aek.tex}` }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Sun sx={{ color: theme.palette.aek.tex}} />
              ) : (
                <Moon />
              )}
            </IconButton> */}
            {/* <Box sx={{margin:"4px",borderRadius:"10px",border:`1px solid ${theme.palette.aek.tex}`,bgcolor:"#e0f2f1"}}> */}

            <Switchs checke={checke} onClick={colorMode.toggleColorMode} />
          </Box>
          {/* </Box> */}
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

                /*    border: "none",
                color: theme.palette.aek.tex,
                "&:hover": { border: "none" }, */
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
    </Box>
  );
}
