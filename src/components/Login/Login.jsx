import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
/* import ButtonLogin from "./ButtonLogin"; */
import { useForm } from "react-hook-form";
/* import { type } from "@testing-library/user-event/dist/type"; */
import "../page/Contact.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IconButton, InputAdornment, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChangeLangue from "../navbar/ChangeLangue";
import { BiHide, BiShowAlt } from "react-icons/bi";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t } = useTranslation(["Login", "Navbar"]);
  const theme = useTheme();
  /*   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }; */

  const navigate = useNavigate();
  const url = "http://localhost:9000/user?email";
  const [users, setUsers] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const data = () => {
    const url1 = "http://localhost:9000/user";
   /*  fetch(`${url1}`)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setUsers(users);
      }); */
  };
  useEffect(() => {
    data();
  }, []);
  const [messageAll, setMessageAll] = useState(false);
  /*   const [email, setEmail] = useState();
  const [password, setPassword] = useState(); */
  const [acces, setAcces] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <Box
        component="main"
        /*   maxWidth="xs" */
        sx={{ bgcolor: "#3b3c3dbd", py: 25 }}
      >
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
            alignItems: "start",
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#b0b3b6d8" : "#38393acc",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={0}
          >
            <ChangeLangue />
          </Stack>
          <Typography
            component="h1"
            variant="h5"
            width="100%"
            textAlign="center"
          >
            {t("Sign_in")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => {
         /*      users.map((user) => {
                if (
                  user.email === data.email &&
                  user.password === data.password
                ) {
                  console.log(user.email);
                  console.log(user.password);
                  setAcces(!acces);
                  navigate("/*");
                } else {
                }
              }); */
              setMessageAll(!messageAll);
            })}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              color="success"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("Email")}
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: { value: true, message: t("message_email") },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t("Valid_Email"),
                },
                emailAvailable: async (fieldValue) => {
                  const res = await fetch(`${url}=${fieldValue}`);
                  const data = await res.json();
                  return data.length == 0 || t("exists_email");
                },
              })}
            />
            <Typography component="p" sx={{ color: "red", textAlign: "start" }}>
              {errors.email?.message}
            </Typography>
            <TextField
              dir="ltr"
              color="success"
              margin="normal"
              required
              fullWidth
              name="password"
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
              label={t("password")}
            />
            <Typography component="p" sx={{ color: "red", textAlign: "start" }}>
              {errors.password?.message}{" "}
              {messageAll && t("error_email_password")}
            </Typography>
            <FormControlLabel
              control={<Checkbox value="remember" color="success" />}
              label={t("Remember")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#2AB672",
                "&:hover": { bgcolor: "#2AB672" },
              }}
            >
              {t("Navbar:Login")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {t("Forgot_password?")}
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SingUp" variant="body2">
                  {t("messageSingUp")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
