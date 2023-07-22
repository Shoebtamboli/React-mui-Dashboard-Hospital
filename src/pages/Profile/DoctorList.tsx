import * as React from "react";
import Paper from "@mui/material/Paper";
import Appbar from "../../components/Appbar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { Avatar, Grid, Box } from "@mui/material";
import { mockDoctorsData } from "../../mockData";
import AddDoctorDialog from "./AddDoctorDialog";

export default function DoctorList() {
  const [doctors, setDoctors] = React.useState(mockDoctorsData);

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Doctor List" />
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
          <AddDoctorDialog
            mockData={mockDoctorsData}
            doctors={doctors}
            setDoctors={setDoctors}
          />
          <Grid
            container
            spacing={2}
            sx={{ marginleft: "10px", marginTop: "40px" }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="patient table">
                <TableHead>
                  <TableRow>
                    {/* <TableCell align="center">#</TableCell> */}
                    <TableCell></TableCell>
                    <TableCell>DOCTOR NAME</TableCell>
                    <TableCell>SPECIALIST</TableCell>
                    <TableCell>SEX</TableCell>
                    <TableCell>PHONE NO</TableCell>
                    <TableCell>EDUCATION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {doctors.length > 0 &&
                    doctors.map((doctor: any, index: any) => (
                      <TableRow
                        key={index}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {/* <TableCell align="center">{doctor.id}</TableCell> */}
                        <TableCell align="right">
                          <Avatar
                            src={"https://i.pravatar.cc/300"}
                            sx={{
                              height: "25%"
                            }}
                          />
                        </TableCell>
                        <TableCell>{doctor.fullName}</TableCell>
                        <TableCell>{doctor.specialist}</TableCell>
                        <TableCell>{doctor.gender}</TableCell>
                        <TableCell>{doctor.phone}</TableCell>
                        <TableCell>{doctor.education}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
