import React from "react";
import { Email, LocalPhone, Phone, Place } from "@mui/icons-material";
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
const ContactAddress = ( contact ) => {
    const theme = useTheme();
  return (
    <Box sx={{ color:theme.palette.aek.tex,textAlign: "start" ,borderRight:{md:"1px solid #e0e0e0"},mr:{xs:0,sm:6}, my:{ xs:4,md:0}}}>
      <Typography variant="h4" sx={{fontSize:{xs:28,md:33}}}>{contact.city}</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Place />
            </ListItemIcon>
            <ListItemText primary={contact.address} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary={contact.phone} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={contact.email} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default ContactAddress;
