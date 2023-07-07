import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,

} from "@mui/material";


const CardMedical = (props) => {
  return (
    <div>
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
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              bgcolor: 'transparent',
              color: "#427CC5",
              border:"1px solid #427CC5",
              px: 6,
              py: 2,
              fontSize: 18,
              "&:hover": { bgcolor: "#427CC5",color:"white" },
            }}
          >
            VIEW DIET
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CardMedical
