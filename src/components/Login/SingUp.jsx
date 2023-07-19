import React from "react";
import { AiFillLock } from "react-icons/ai";
import ErrorPage from "../page/ErrorPage";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import ChangeLangue from "../navbar/ChangeLangue";

const SingUp = () => {
  const theme = useTheme();
  const { t } = useTranslation(["Login", "Navbar"]);
  const navigate = useNavigate();
  const url = "https://products-jtax.onrender.com//user?email";
  const [data, setData] = useState([]);
  const updatedata = () => {
    const data = getValues();
    fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(getValues()),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setData(json.data));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  /*   console.log(getValues()); */
  return (
    <div className="login">
      <Box component="main" sx={{ bgcolor:  "#00000069", py: 25 }}>
        <CssBaseline />
        <Container
          maxWidth="xs"
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 2,
            py: 4,
            my: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "white" : "#38393acc",
          }}
        >
          {" "}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={0}
            width="100%"
          >
            <ChangeLangue />
          </Stack>
          <Avatar sx={{ bgcolor: "#2AB672", py: 1, width: 85, height: 85 }}>
            <AiFillLock size={52} />
          </Avatar>
          <Typography component="h1" variant="h5" py={2}>
            {t("Register")}
          </Typography>
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              updatedata();
              setData(JSON.stringify(data));
              navigate("/*");
            })}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  color="success"
                  autoComplete="firstName"
                  name="First Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label={t("First_name")}
                  autoFocus
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: t("message_firstName"),
                    },
                  })}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.firstName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  color="success"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label={t("Last_name")}
                  name="lastName"
                  autoComplete="lname"
                  {...register("lastName", {
                    required: { value: true, message: t("message_LastName") },
                  })}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.lastName?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="success"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label={t("Email")}
                  name="email"
                  autoComplete="email"
                  {...register("email", {
                    required: { value: true, message: t("message_email") },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("Valid_Email"),

                      emailAvailable: async (fieldValue) => {
                        const response = await fetch(
                          `https://products-jtax.onrender.com/email=${fieldValue}`
                        );
                        const data = await response.json();
                        return data.length === 0 || t("exists_email");
                      },
                    },
                  })}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.email?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  dir="ltr"
                  color="success"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label={t("password")}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: { value: true, message: t("message_password") },
                    minLength: {
                      value: 8,
                      message: t("message_password_long"),
                    },
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  dir="ltr"
                  color="success"
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordConfirm"
                  label={t("Confirm_password")}
                  type={showPassword ? "text" : "password"}
                  id="passwordConfirm"
                  autoComplete="current-password"
                  {...register("passwordConfirm", {
                    required: {
                      value: true,
                      message: t("message_Confirm_password"),
                    },
                    minLength: {
                      value: 8,
                      message: t("message_password_long"),
                    },
                    validate: (match) => {
                      const password = getValues("password");
                      return match === password || t("password_validate");
                    },
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography
                  component="p"
                  sx={{ color: "red", textAlign: "start" }}
                >
                  {errors.passwordConfirm?.message}
                </Typography>
              </Grid>
              <Grid item xs={12}>
               
              </Grid>
            </Grid>
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#2AB672",
                "&:hover": { bgcolor: "#2AB672" },
              }}
            >
              {t("Register")}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/Login" variant="body2" style={{color:theme.palette.aek.main}}>
                  {t("have_account")}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default SingUp;
