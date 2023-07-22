import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "../../components/Title";
import AppointmentTableData from "../Appointments/AppointmentTableData";
import { appointmentsData } from "../../mockData";
import { useNavigate } from "react-router-dom";

export default function LatestAppointments() {
  const navigate = useNavigate();
  function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
    navigate(`/appointments`);
  }
  return (
    <React.Fragment>
      <Typography
        component="h2"
        align="left"
        variant="h6"
        gutterBottom
        color="primary"
      >
        Recent Appointments
      </Typography>
      <AppointmentTableData appointments={appointmentsData} />
      <Link color="primary" onClick={preventDefault} sx={{ mt: 2 }}>
        See all appointments
      </Link>
    </React.Fragment>
  );
}
