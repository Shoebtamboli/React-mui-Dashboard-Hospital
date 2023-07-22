import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import HeartRateLoader from "../../components/HeartRateLoader";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function SignInSide() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
      navigate(`/dashboard`);
    }, 3000);
  };

  return (
    <>
      {loading ? (
        <HeartRateLoader message={"Get well soon!"} />
      ) : (
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(../../../doctor.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box sx={{ mt: 1 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    margin="normal"
                    //required
                    fullWidth
                    id="email"
                    label="Email Address"
                    //name="email"
                    //autoComplete="email"
                    //autoFocus
                    value="test@test.com"
                    {...register("email", {
                      required: "Email is required"
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                  <TextField
                    margin="normal"
                    //required
                    fullWidth
                    //name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value="1234"
                    //autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required"
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <Button onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      )
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </form>
                <Grid container>
                  <Grid item xs>
                    <Link
                      to={"/forgot"}
                      style={{
                        textDecoration: "none",
                        color: "inherit"
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to={"/signup"}
                      style={{
                        textDecoration: "none",
                        color: "inherit"
                      }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }} light variant="middle">
                  OR
                </Divider>
                <Button
                  fullWidth
                  startIcon={<GoogleIcon />}
                  variant="outlined"
                  sx={{
                    mt: 2
                  }}
                >
                  Continue with google
                </Button>

                <Button
                  fullWidth
                  startIcon={<FacebookIcon />}
                  variant="outlined"
                  sx={{
                    mt: 2
                  }}
                >
                  Continue with facebook
                </Button>

                <Typography align="center" variant="subtitle2" sx={{ mt: 2 }}>
                  By continuing, you agree to{" "}
                  <span style={{ color: "green" }}>Terms of Service</span> and
                  <span style={{ color: "green" }}> Privacy Policy</span>.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}
