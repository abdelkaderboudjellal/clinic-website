import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActionArea, CardMedia } from "@mui/material";
import { Call, Email } from "@mui/icons-material";
const CardTeam = (props) => {
  return (
    <>
      <Card sx={{ width: { xm: "100%" }, mx:{xs:0,sm: 2},my:{xs:2,md:0} }}>
        <CardMedia>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #C6CACF",
              borderRadius: "100%",
              width: 220,
              height: 220,
              padding: 1,
              mx: "auto",
            }}
          >
            <Avatar
              sx={{
                display: "block",
                mx: "auto",
                height: 200,
                width: 200,
              }}
              alt={props.name}
              src={props.image}
            />
          </Box>
          <CardContent sx={{textAlign:"center"}}>
            <Typography
              gutterBottom
              variant="body1"
              component="h1"
              fontWeight="bold"
            >
              {props.name}
            </Typography>
            <Typography variant="body2" py="4px" color="text.secondary">
              {props.specialty}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "flex ",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Call sx={{ fontSize: 20, color: "#29B6F6", mx: 1 }} />
              {props.phone}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "flex ",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Email sx={{ fontSize: 20, color: "#29B6F6", mx: 1 }} />
              {props.email}
            </Typography>
          </CardContent>
        </CardMedia>
      </Card>
    </>
  );
};

export default CardTeam;
