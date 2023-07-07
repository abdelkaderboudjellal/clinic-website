import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const ErrorPage = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          p: { xs: "5%", md: "10%" },
          width: "100%",
          /* height: "800px", */
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#5B87F4",
        }}
      >
        <Stack
          direction="column"
          sx={{
            bgcolor: theme.palette.aek.back,
            borderRadius: 2,
            py: "7%",
          }}
          height="500px"
          width="500px"
          alignItems="center"
        >
          <Typography
            variant="h1"
            sx={{ fontWeight: 700, color: "#504BE6", textAlign: "center",fontFamily:"sans-serif" }}
          >
            404
          </Typography>
          <Stack direction="row" justifyContent="center">
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: "red", textAlign: "center" }}
            >
              Oops!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: theme.palette.aek.tex,
                textAlign: "center",
              }}
            >
              Page not found
            </Typography>
          </Stack>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.aek.tex, textAlign: "center" }}
          >
            The page you’re looking for doesn’t exist
          </Typography>
          <Link to="/">
            <Button sx={{ my: 4 }}>Go Homme</Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default ErrorPage;
