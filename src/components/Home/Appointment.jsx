import React, { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../page/Contact.css";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
const Appointment = () => {
  const { t } = useTranslation(["Home"]);
  const theme = useTheme();
  const [value, setValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Phone: data.get("Phone"),
      fullName: data.get("fullName"),
      Date: value,
    });
  };
  return (
    <Box
      sx={{
        bgcolor: theme.palette.aek.back,

        py: 8,
      }}
    >
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            /*  marginTop: 8, */
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",

            /* alignItems: "center", */
            /*  border:"2px solid white"  */
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}

            /*  sx={{ mt: 3 }} */
          >
            <Grid container spacing={1} columns={20}>
              <Grid
                item
                xs={20}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    fontSize: { xs: 28, md: 33 },
                    fontWeight: "bold",
                    py: 2,
                   
                  }}
                >
                  {t("appointment")}
                </Typography>
              </Grid>
              <Grid
                item
                xs={20}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "start",
                }}
              >
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label={t("fullName")}
                />
              </Grid>
              <Grid
                item
                xs={20}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="Phone"
                  label={t("Phone")}
                  name="Phone"
                  type="Number"
                  autoComplete="Phone"
                />
              </Grid>
              <Grid
                item
                xs={20}
                lg={5}
                sx={{
                  direction: "ltr",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={["DatePicker"]}
                    sx={{ width: "100%", p: 0 }}
                  >
                    <DatePicker
                      label={t("Date")}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid
                item
                xs={20}
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    /*   mt: { xs: 3, md: 0 },
                    mb: { xs: 3, m: 0 }, */
                    height: { md: 54 },
                  }}
                >
                  {t("Book")}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Appointment;
