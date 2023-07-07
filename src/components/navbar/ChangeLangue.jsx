import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";

const StyledImg = styled("img")();
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,

        marginRight: theme.spacing(1.5),
      },
      "&:hover": {
        backgroundColor: theme.palette.aek.main,
      },
    },
  },
}));
const ChangeLangue = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          bgcolor: "transparent",
          color: theme.palette.aek.tex,
          "&:hover": { bgcolor: "transparent" },
        }}
      >
        <TranslateIcon />
        <Typography variant="p" sx={{ fontSize: 14, px: 1 }}>
          {i18n.language == "fr"
            ? "français"
            : i18n.language == "ar"
            ? "العربية"
            : "English"}
        </Typography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("fr");
            window.location.reload();
          }}
          disableRipple
        >
          <StyledImg
            src="https://flagicons.lipis.dev/flags/4x3/fr.svg"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "block",
              height: 20,
              width: 20,

              maxWidth: { xs: "400px", sm: "none" },
              mx: 1,
            }}
          />
          Francais
        </MenuItem>
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("en");
            /* window.location.reload(); */
          }}
          disableRipple
        >
          <StyledImg
            src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "block",
              height: 20,
              width: 20,

              maxWidth: { xs: "400px", sm: "none" },
              mx: 1,
            }}
          />
          English
        </MenuItem>

        <MenuItem
          onClick={() => {
            i18n.changeLanguage("ar");
            window.location.reload();
          }}
          disableRipple
        >
          <StyledImg
            src="https://flagicons.lipis.dev/flags/4x3/dz.svg"
            alt="Photo by Markus Spiske from Pexels"
            sx={{
              display: "block",
              height: 20,
              width: 20,

              maxWidth: { xs: "400px", sm: "none" },
              mx: 1,
            }}
          />
          العربية
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default ChangeLangue;
