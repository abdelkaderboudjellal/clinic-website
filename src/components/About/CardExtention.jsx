import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Button, CardActionArea, CardActions, Avatar } from "@mui/material";
const CardExtention = (props) => {
  const color = props.color;
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          height: 320,
          bgcolor: color,
          border: "none",
          m: 2,
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? color : theme.palette.grey[800],
          minWidth: { xs: "80%", md: "" },
        }}
      >
        <CardActionArea>
          <Avatar
            sx={{
              my: 2,
              width: 82,
              height: 82,

              mx: "auto",
              bgcolor: "#427CC5",
              color: "white",
            }}
          >
            {props.logo}
          </Avatar>
          <CardContent sx={{ textAlign: "center", px: 4 }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              py={2}
              sx={{ fontWeight: "bold" }}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardExtention;
