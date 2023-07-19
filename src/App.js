import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FooterNavbar from "./components/navbar/FooterNavbar";
import { createContext, useState } from "react";
import { Box, LinearProgress, ListSubheader, Tooltip } from "@mui/material";
import ScrollBack from "./components/page/ScrollBack";
import Fab from "@mui/material/Fab";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/page/Footer";
import Departments from "./components/Departments/Departments";
import { FaArrowUp } from "react-icons/fa";
import ErrorPage from "./components/page/ErrorPage";
import { useEffect } from "react";
import cookies from "js-cookie";
import NavbarTest from "./components/navbar/NavbarTest";
import Login from "./components/Login/Login";
import { Loader } from "@mantine/core";
import SingUp from "./components/Login/SingUp";
const ColorModeContext = createContext({ toggleColorMode: () => {} });
const languages = [
  {
    code: "fr",
    name: "Français",
  },
  {
    code: "en",
    name: "English",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
  },
];
function App({ props }) {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation(["Navbar"]);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    typography: {
      fontFamily: ["Cairo", "sans-serif"].join(","),
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            aek: {
              back: "white",
              tex: "#424242",
              main: "#29b6f6",
            },
            switchs: {
              back: "black",
            },
          }
        : {
            aek: {
              back: "black",
              tex: "#bdbdbd",
              main: "#29b6f6",
            },
            switchs: {
              back: "yellow",
            },
          }),
    },
  });

  const Loading = (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 600,
        }}
      >
        <Loader color="indigo" size="xl" variant="dots" />
      </Box>
    </Box>
  );

  return (
    <Suspense fallback={Loading}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Box id="back-to-top-anchor" />

        <ListSubheader sx={{ width: "100%", padding: "0", margin: "0" }}>
          <FooterNavbar setMode={setMode} />
        </ListSubheader>
        <ListSubheader sx={{ width: "100%", padding: "0", margin: "0" }}>
          <NavbarTest />
        </ListSubheader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Departments" element={<Departments />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SingUp" element={<SingUp />} />
        </Routes>
        <Footer />
        <ScrollBack {...props}>
          <Tooltip title="scroll to top">
            <Fab
              size="medium"
              aria-label="scroll back to top"
              sx={{
                bgcolor: "#29b6f6",
                "&:hover": { bgcolor: "#81d4fa" },
                zIndex: "9999",
              }}
            >
              <FaArrowUp size={25} fontWeight={800} color="white" />
            </Fab>
          </Tooltip>
        </ScrollBack>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
