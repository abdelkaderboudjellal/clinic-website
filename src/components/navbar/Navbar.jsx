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
import { Link, useLocation, useNavigate } from "react-router-dom";

import Demo from "./Demo";

import { useTheme } from "@mui/material/styles";

import { SwipeDown, SwipeUp } from "@mui/icons-material";
import { Avatar, Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";

const drawerWidth = 350;

const Navbar = (props) => {
  const { t, i18n } = useTranslation(["Navbar"]);

  const navItems = [
    { name: t("Home"), path: "/" },
    { name: t("About"), path: "/About" },
    { name: t("Contact"), path: "/Contact" },
  ];
  const navItemDrawer = [
    { name: t("Departments"), path: "/Departments" },
    { name: t("Department_Detail"), path: "/*" },
    { name: t("Department_List"), path: "/*" },
    { name: t("More"), path: "/*" },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [open1, setOpen1] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  let location = useLocation();
  const Navigate = useNavigate();
  const drawer = (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "10px",
          backgroundColor: "transparent",
        }}
      >
        <Box
          variant="h6"
          onClick={() => {
            Navigate("/");
          }}
          sx={{ my: 2, cursor: "pointer" }}
        >
          <Avatar
            alt="Remy Sharp"
            sx={{ bgcolor: "#00796b", width: 60, height: 60 }}
            src="https://aleeshriners.org/wp-content/uploads/2018/11/ShrinersHospitalLogoTransparent.png"
          />
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      <List
        sx={{
          backgroundColor: "transparent",
          display: "colum",
          justifyContent: "left",
          textAlign: "start",
          width: "100%",
        }}
      >
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding /* sx={{
            bgcolor: location.pathname === item.path && "#eeeeee",
          }} */
          >
            <ListItemButton
              component={Link}
              to={`${item.path}`}
              sx={{
                textAlign: "start",
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
            sx={{ textAlign: "start", width: "40%" }}
          >
            <ListItemText primary={t("services")} />
            {open1 ? <SwipeUp /> : <SwipeDown />}
          </ListItemButton>
          <Collapse in={!open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {navItemDrawer.map((itemDrawer) => {
                return (
                  <ListItemButton
                    key={itemDrawer.name}
                    sx={{
                      textAlign: "start",
                      px: 4,
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="appBar">
      <Box sx={{ width: "100%", minWidth: "420px" }}>
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
              onClick={handleDrawerToggle}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                textAlign: "start",
                cursor: "pointer",
              }}
              onClick={() => {
                Navigate("/");
              }}
            >
              <Avatar
                alt="Remy Sharp"
                sx={{ bgcolor: "#00796b", width: 60, height: 60 }}
                src="https://aleeshriners.org/wp-content/uploads/2018/11/ShrinersHospitalLogoTransparent.png"
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  component={Link}
                  to={`${item.path}`}
                  key={item}
                  sx={{
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
                }}
                endIcon={<LockOpenIcon />}
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
              endIcon={<LockOpenIcon />}
            >
              {t("Login")}
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
