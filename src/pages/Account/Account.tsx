import * as React from "react";
import Appbar from "../../components/Appbar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import CustomizedTabs from "./CustomizedTabs";

export default function Profile() {
  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Account" />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
        <Toolbar />

        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <CustomizedTabs />
        </Container>
      </Box>
    </Box>
  );
}
