import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Avatar, Typography, Box, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomizedTabs from "./CustomizedTabs";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TimelineDot from "@mui/lab/TimelineDot";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const loginData = [
  {
    loginType: "Credential login",
    dateAndTime: "10:07 AM 06/28/2023",
    ipAddress: "95.130.17.84",
    client: "Chrome, Mac OS 10.15.7"
  },
  {
    loginType: "Credential login",
    dateAndTime: "07:47 AM 06/28/2023",
    ipAddress: "95.130.17.84",
    client: "Chrome, Mac OS 10.15.7"
  }
];
export default function Security() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Change password
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={0.5}>
              <TextField
                id="password"
                fullWidth
                type="password"
                label="Password"
                defaultValue="John Doe"
                disabled
              />
              <Button size="small">Edit</Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Divider light sx={{ mt: 4, mb: 4 }} />

      <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
        Multi Factor Authentication
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={0} sx={{ p: 2 }}>
            <Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <TimelineDot color="error" />
                <Typography variant="body1" color="error" gutterBottom>
                  Off
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Authenticator App
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
              >
                Use an authenticator app to generate one time security codes.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{ width: "25%", mt: 4 }}
              >
                Set Up
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} sx={{ p: 2 }}>
            <Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <TimelineDot color="error" />
                <Typography variant="body1" color="error" gutterBottom>
                  Off
                </Typography>
              </Stack>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Text Message
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
              >
                Use your mobile phone to receive security codes via SMS.
              </Typography>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{ width: "25%", mt: 4 }}
              >
                Set Up
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Divider light sx={{ mt: 4, mb: 4 }} />

      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Login history
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        Your recent login activity
      </Typography>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              textTransform: "uppercase"
            }}
          >
            <TableRow>
              <TableCell>Login Type</TableCell>
              <TableCell>IP address</TableCell>
              <TableCell>Client</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loginData.map((row: any, index: any) => (
              <TableRow
                key={index}
                //sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.loginType}
                  {row.dateAndTime}
                </TableCell>
                <TableCell>{row.ipAddress}</TableCell>
                <TableCell>{row.client}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
