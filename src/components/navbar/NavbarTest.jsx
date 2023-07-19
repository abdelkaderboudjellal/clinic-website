import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "./Navbar.css";
import cookies from "js-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Demo from "./Demo";

import { useTheme } from "@mui/material/styles";

import { SwipeDown, SwipeUp } from "@mui/icons-material";
import { Avatar, Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";

const drawerWidth = 300;

const NavbarTest = (props) => {
  const navegate = useNavigate();
  const [state, setState] = React.useState({
    left: false,

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { t } = useTranslation(["Navbar"]);
  const navItems = [
    { id: 1, name: t("Home"), path: "/" },
    { id: 2, name: t("About"), path: "/About" },
    { id: 3, name: t("Contact"), path: "/Contact" },
  ];
  const navItemDrawer = [
    { id: 1, name: t("Departments"), path: "/Departments" },
    { id: 2, name: t("Department_Detail"), path: "/*" },
    { id: 3, name: t("Department_List"), path: "/*" },
    { id: 4, name: t("More"), path: "/*" },
  ];

  /*   const { window } = props; */
  /*  const [mobileOpen, setMobileOpen] = React.useState(false); */
  const theme = useTheme();
  /*   const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 */
  const [open1, setOpen1] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  let location = useLocation();
  const Navigate = useNavigate();

  let anouther = cookies.get("i18next") == "ar" ? "right" : "left";

  const drawer = (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "10px",
          backgroundColor: "transparent",
          width: drawerWidth,
        }}
      >
        <Box variant="h6" sx={{ my: 2, cursor: "pointer" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://ardentys.com/wp-content/uploads/2017/03/ARDENTYS-IMPLANTS-DENTAIRES-ALGERIE-300.png"
            sx={{ width: 120, height: 40 }}
            /*   sx={{ bgcolor: deepOrange[500] }} */
            variant="square"
            onClick={() => {
              Navigate("/");
            }}
          />
        </Box>
        <IconButton onClick={toggleDrawer(anouther, false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List
        sx={{
          backgroundColor: "transparent",
          display: "colum",
          justifyContent: "center",
          textAlign: "left",
          width: "100%",
        }}
      >
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding /* sx={{
            bgcolor: location.pathname === item.path && "#eeeeee",
          }} */
          >
            <ListItemButton
              component={Link}
              to={`${item.path}`}
              sx={{
                textAlign: "center",
                color: location.pathname === item.path && "#81d4fa",
                "&:hover": { textDecoration: "underline #81d4fa" },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}

        <List sx={{ width: "100%", py: "0px", my: "0px" }}>
          <ListItemButton
            onClick={handleClick1}
            sx={{ textAlign: "center", width: "40%", mx: "auto" }}
          >
            <ListItemText primary={t("services")} />
            {open1 ? <SwipeUp /> : <SwipeDown />}
          </ListItemButton>
          <Collapse in={!open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {navItemDrawer.map((itemDrawer) => {
                return (
                  <ListItemButton
                    key={itemDrawer.id}
                    sx={{
                      textAlign: "center",
                      pl: 4,
                      color: location.pathname === itemDrawer.path && "#4db6ac",
                    }}
                    component={Link}
                    to={itemDrawer.path}
                  >
                    <ListItemText primary={itemDrawer.name} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            position: "static",
            display: "flex",
            justifyContent: "center",

            px: { md: "10%", sm: "0" },
            width: "100%",
            height: { xs: "100px", md: "100%" },
            /* md:{height:"200px"}, */
            backgroundColor: theme.palette.aek.main,
            color: "white",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              onClick={toggleDrawer(anouther, true)}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              variant="h6"
              component="div"
              sx={{
                flexGrow: 0.2,
                display: { xs: "none", md: "block" },
                textAlign: "start",
                cursor: "pointer",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://ardentys.com/wp-content/uploads/2017/03/ARDENTYS-IMPLANTS-DENTAIRES-ALGERIE-300.png"
                sx={{ width: 150, height: 50 }}
                /*   sx={{ bgcolor: deepOrange[500] }} */
                variant="square"
                onClick={() => {
                  Navigate("/");
                }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item) => (
                <Button
                  component={Link}
                  to={`${item.path}`}
                  key={item.id}
                  sx={{
                    px: 2,
                    textDecoration: "none",
                    color:
                      location.pathname === item.path ? "#81d4fa" : "white",
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                /*  component={Link}
                to={"/Programs"} */
                key={"Services"}
                sx={{ textDecoration: "none", color: "white" }}
              >
                <Demo />
              </Button>
              <Button
                variant="outlined"
                sx={{
                  display: { sm: "none" },
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    borderColor: "white",
                    color: "#fff",
                  },
                  px: 1,
                }}
                onClick={() => {
                  navegate("/Login");
                }}
                endIcon={<LockOpenIcon sx={{ mx: 1 }} />}
              >
                {t("Login")}
              </Button>
            </Box>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "white", color: "#fff" },
              }}
              endIcon={<LockOpenIcon sx={{ mx: 1 }} />}
              onClick={() => {
                navegate("/Login");
              }}
            >
              {t("Login")}
            </Button>
          </Toolbar>
        </AppBar>
        {["left", "right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Box
              component="nav"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === "light" ? "#b0b3b6cc" : "#38393acc",
              }}
            >
              <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#f9fcffee" : "#0a0a0aef"
                  },
                }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {drawer}
              </Drawer>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default NavbarTest;
