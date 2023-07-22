import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
};

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "80vh" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body2" align="center">
          Enter your email and we will send you a link to reset your password.
        </Typography>
        <Box sx={{ mt: 3, width: "100%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item>
              <TextField
                //autoComplete="email"
                //name="email"
                //required
                fullWidth
                id="email"
                label="Email Address"
                //autoFocus
                {...register("email", {
                  required: "Email is required"
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </form>
          <Grid container justifyContent="center">
            <Grid item>
              <Link
                to={"/login"}
                style={{
                  //textDecoration: "none",
                  color: "inherit"
                }}
              >
                Back to Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
