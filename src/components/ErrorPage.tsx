import * as React from "react";
import { Button, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        height: "100vh"
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" sx={{ fontSize: "400px" }}>
          4
        </Typography>
        <Box component="img" alt="profile" src={"people.png"} />
        <Typography variant="h1" sx={{ fontSize: "400px" }}>
          4
        </Typography>
      </Stack>

      <Typography variant="h6" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body2" gutterBottom>
        The page you are looking for does not seem to exist
      </Typography>
      <Link
        to="/dashboard"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button variant="contained" sx={{ mt: 4 }}>
          Go to home
        </Button>
      </Link>
    </Stack>
  );
}
