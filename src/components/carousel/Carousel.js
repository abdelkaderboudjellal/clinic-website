import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CarouselItem from "./CarouselItem";
const Carousel1 = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      lienn:
        "https://www.youtube.com/watch?v=fK2nv-gItsA",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      lienn:
        "https://www.youtube.com/watch?v=0RDWfMTzzF0",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      lienn:
        "https://www.youtube.com/watch?v=tFamW1_CJqM",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      lienn:
        "https://www.youtube.com/watch?v=gMycqoQrlBs",
    },
  ];
  return (
    < >
    
      <Carousel sx={{ zIndex:0}}
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} item={item} lienn={item.lienn} />
        ))}
      </Carousel>
    </>
  );
};

export default Carousel1;
