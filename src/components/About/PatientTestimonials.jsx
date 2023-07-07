import React from "react";
import {
  CardActionArea,
  Avatar,
  Box,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";

import Card from "@mui/material/Card";
import { RxQuote } from "react-icons/rx";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FormatQuote } from "@mui/icons-material";

const PatientTestimonials = (props) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", mx: "auto", pb: 2 }}>
      <Card
        variant="outlined"
        sx={{
          mb: 2,
          bgcolor: "transparent",
          "&:focus": { bgcolor: "transparent" },
          border: "none",
          px: { xs: "0", md: "10%", lg: "20%" },
        }}
      >
        <Box sx={{ display: "flex" }}>
          {/*    <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              justifyItems: "start",
              px: 2,
            }}
          >
            <RxQuote size={80} color=" #1976D2" transform="rotate(3.1416rad)" />
          </Box> */}
          <CardActionArea
          /* sx={{ bgcolor: "transparent", "&:focus": { bgcolor: "transparent" } }} */
          >
            <Avatar
              src={props.image}
              sx={{
                mb: 2,
                width: 100,
                height: 100,
                mx: "auto",
              }}
            ></Avatar>
            <Stack sx={{ textAlign: "center" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Volkhov,serif",
                  /*  fontStyle: 'italic' */
                }}
              >
                {props.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#9e9e9e",
                  fontFamily: "Volkhov,serif",
                  /* fontStyle: 'italic' */
                }}
              >
                {props.title}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    justifyItems: "start",
                    px: 2,
                  }}
                >
                  <FormatQuote
                    sx={{
                      fontSize:{xs:30,md:60},
                      transform: "rotate(180deg)",
                      color: " #1976D2",
                    }}
                  />
                </Box>
                <Typography
                  className="TabPanel"
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    fontFamily: "Volkhov,serif",
                    fontStyle: "italic!important",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: { xs: 16, md: 24 },
                  }}
                >
                  {props.text}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    justifyItems: "end",
                    px: 2,
                  }}
                >
                  <FormatQuote
                    sx={{
                      fontSize:{xs:30,md:60},
                      transform: "rotate(0deg)",
                      color: " #1976D2",
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          </CardActionArea>
          {/*    <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              justifyItems: "end",
              px: 2,
            }}
          >
            <RxQuote size={80} color=" #1976D2" transform="rotate(3.1416rad)" />
          </Box> */}
        </Box>
      </Card>
    </Box>
  );
};

export default PatientTestimonials;
