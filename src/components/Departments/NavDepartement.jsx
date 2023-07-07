import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "../page/Contact.css";
const NavDepartement = () => {
  return (
    <div className="Department ">
      <Box sx={{ bgcolor: "#021f31c5" }}>
        <Container maxWidth="lg">
          <Stack
            height="200px"
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Department
            </Typography>
          </Stack>
        </Container>
        <Box
          sx={{
            bgcolor: "#fdfcfc57",
          }}
        >
          <Container maxWidth="lg">
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ maxWidth: "lg", py: 2, color: "white" }}
            >
              <Link underline="hover" color="white" href="/" fontWeight="500">
                Home
              </Link>
              <Typography color="white" fontWeight="50">
                Department
              </Typography>
            </Breadcrumbs>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default NavDepartement;
