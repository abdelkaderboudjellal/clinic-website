import React from "react";
import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledImg = styled("img")();
const CarouselItem = (props) => {
  return (
    <>
      <Paper zindex={0} sx={{ border: "none", boxShadow: "none" }}>
        <Box
          sx={{
            display: "block",
            width: { xs: "100%", md: "80%" },
            mx: "auto",
          }}
        >
          <iframe width="100%" height="400px"  src={props.lienn} />
        </Box>
      </Paper>
    </>
  );
};

export default CarouselItem;
