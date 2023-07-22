import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Appbar from "../../components/Appbar";
import Stack from "@mui/material/Stack";
import Column from "./Column";

function Kanban() {
  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Kanban" />
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
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Column state="PLANNED" />
            <Column state="ONGOING" />
            <Column state="VALIDATION" />
            <Column state="COMPLETED" />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Kanban;
