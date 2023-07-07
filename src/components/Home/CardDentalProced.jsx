import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Button, CardActionArea, CardActions, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
const CardDentalProced = (props) => {
  const {t,i18n}=useTranslation("Home")
  return (
    <>
      <Card variant="outlined" sx={{ m: 2 }} >
        <CardActionArea>
          <Avatar
            sx={{
              my: 2,
              width: 82,
              height: 82,
              bgcolor: "rgb(230,244,255)",
              color: "#0091ea",
              mx: "auto",
              "&:hover": { bgcolor: "#0288d1", color: "white" },
            }}
          >
            {props.logo}
          </Avatar>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            { t("Discription")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            sx={{
              display: "block",
              mx: "auto",
              "&:hover": {
                textDecoration: "underline #0288d1",
                bgcolor: "white",
              },
            }}
          >
            {t("MoreB")}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardDentalProced;
