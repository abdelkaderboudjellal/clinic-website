import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { BsFillAlarmFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Stack,
} from "@mui/material";

import { grey } from "@mui/material/colors";
const CardNutrition = (props) => {
  return (
    <>
      <Card
        sx={{ width: { xm: "100%" }, m: 1, border: "none", boxShadow: "none" }}
      >
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #C6CACF",
              borderRadius: "100%",
              width: 250,
              height: 250,
              padding: 1,
              mx: "auto",
            }}
          >
            <Avatar
              sx={{ display: "block", mx: "auto", height: 230, width: 230 }}
              alt={props.name}
              src={props.image}
            />
          </Box>
          <CardContent sx={{}}>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              fontWeight="bold"
              textAlign="center"
            >
              {props.name}
            </Typography>
            <Typography variant="h6" py="4px" px="10%" color="text.secondary">
              {props.specialty}
            </Typography>
            <Stack justifyContent="center" py="1rem" px="5%">
              <Stack spacing={2} direction="row">
                <BsFillAlarmFill size={28} color="text.secondary" />
                <Typography variant="h6" fontFamily="Lato,sans-serif">
                  3 week program
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row">
                <RxLapTimer size={28} color="text.secondary" />
                <Typography variant="h6" fontFamily="Lato,sans-serif">
                  1-2 Kgs/week
                </Typography>
              </Stack>
              <Stack spacing={2} direction="row">
                <MdRestaurantMenu size={28} color="text.secondary" />
                <Typography variant="h6" fontFamily="Lato,sans-serif">
                  Easy Diet
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              bgcolor: grey[200],
              color: "black",
              px: 6,
              py: 2,
              fontSize: 18,
              "&:hover": { bgcolor: grey[400] },
            }}
          >
            VIEW DIET
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardNutrition;
