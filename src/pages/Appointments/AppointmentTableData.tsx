import React from "react";
import { Paper, Chip } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

function AppointmentTableData({ appointments }: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="patient table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell>FULL NAME</TableCell>
            <TableCell>GENDER</TableCell>
            <TableCell>Phone no</TableCell>
            <TableCell>AGE</TableCell>
            <TableCell>REFERRED BY DR.</TableCell>
            <TableCell>APPOINTMENT DATE</TableCell>
            <TableCell>ASSIGNED DR.</TableCell>
            <TableCell>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.length > 0 &&
            appointments.map((appointment: any, index: any) => (
              <TableRow
                key={index}
                // component={Link}
                // to={`/patient-detail/${appointment.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <TableCell align="center">{appointment.id}</TableCell>
                <TableCell>{appointment.fullName}</TableCell>
                <TableCell>{appointment.gender}</TableCell>
                <TableCell>{appointment.phone}</TableCell>
                <TableCell>{appointment.age}</TableCell>
                <TableCell>{appointment.referredByDoctor}</TableCell>
                <TableCell>{appointment.appointmentDate}</TableCell>
                <TableCell>{appointment.assignedDoctor}</TableCell>
                <TableCell>
                  <Chip
                    label={appointment.status}
                    variant="outlined"
                    color={appointment.status === "open" ? "success" : "error"}
                    sx={{ textTransform: "uppercase" }}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointmentTableData;
