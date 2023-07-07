import React from "react";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
/* const StyledImg = styled("img")(); */
const CarouselItem = (props) => {
  return (
    <Paper
      zindex={0}
      sx={{
        border: "none",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        mx: "auto",
      }}
    >
      <ReactPlayer url={props.lienn} controls={true} />
      {/*  <iframe width="100%" height="400px"  src={props.lienn} /> */}
    </Paper>
  );
};

export default CarouselItem;
