import React from "react";
import { Grid, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Appbar from "../../components/Appbar";
import AppointmentDialog from "./AppointmentDialog";
import { appointmentsData } from "../../mockData";
import AppointmentTableData from "./AppointmentTableData";

function Appointments() {
  const [appointments, setAppointments] = React.useState(appointmentsData);

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Appointment" />
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

        <Container sx={{ mt: 4, mb: 4 }}>
          <AppointmentDialog
            appointments={appointments}
            setAppointments={setAppointments}
          />
          <Grid
            container
            spacing={2}
            sx={{ marginleft: "10px", marginTop: "40px" }}
          >
            <AppointmentTableData appointments={appointments} />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Appointments;
