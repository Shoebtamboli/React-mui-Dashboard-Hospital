import * as React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Appbar from "../../components/Appbar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Avatar, Typography, Grid, Box, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LatestAppointments from "../Dashboard/LatestAppointments";
import PieChart from "./PieChart";

const infoData = [
  {
    icon: <EmailIcon />,
    title: "Email",
    value: "test@test.com"
  },
  {
    icon: <PhoneIcon />,
    title: "Contact no",
    value: "+11 123456789"
  },
  {
    icon: <PeopleIcon />,
    title: "Successful Patients",
    value: "200"
  },
  {
    icon: <MedicalServicesIcon />,
    title: "Experience",
    value: "10+ years"
  }
];

const profileData = {
  avatarUrl: "https://i.pravatar.cc/300",
  name: "Dr. John Doe",
  specialization: "Cardiologist",
  email: "john.doe@example.com",
  contactNo: "+1 123-456-7890",
  experience: "10 years",
  patients: "1000+",
  biography:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit eu orci aliquam ultrices. Etiam quis purus euismod, faucibus leo eu, vestibulum odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit eu orci aliquam ultrices. Etiam quis purus euismod, faucibus leo eu, vestibulum odio."
};

export default function Profile() {
  const { avatarUrl, name, specialization, biography } = profileData;

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Profile" />
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 445,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Stack spacing={2} direction="column" alignItems="center">
                  <Stack>
                    <Avatar
                      src={avatarUrl}
                      sx={{
                        height: "100%",
                        width: "100%"
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="h6">{specialization}</Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <Box
                sx={{
                  flexGrow: 0
                }}
              >
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mb: 1
                    }}
                  >
                    <Typography variant="body1" gutterBottom sx={{ m: 1.5 }}>
                      {biography}
                    </Typography>
                  </Paper>
                </Grid>

                <Grid container spacing={2}>
                  {infoData.map((item, index) => (
                    <Grid key={index} item xs={12} md={6} lg={6}>
                      <Paper
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: 150
                        }}
                      >
                        <Box
                          sx={{
                            flexGrow: 1
                          }}
                        >
                          <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                          >
                            <Stack>
                              <IconButton
                                size="large"
                                aria-label="icon"
                                color="secondary"
                              >
                                {item.icon}
                              </IconButton>
                              {item.title && (
                                <Typography
                                  component="h2"
                                  align="center"
                                  variant="h6"
                                  color="primary"
                                  gutterBottom
                                >
                                  {item.title}
                                </Typography>
                              )}
                              <Typography
                                component="p"
                                align="center"
                                variant="h5"
                              >
                                {item.value}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <LatestAppointments />
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Typography
                component="h2"
                align="left"
                variant="h6"
                gutterBottom
                color="primary"
              >
                Chart
              </Typography>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 370
                }}
              >
                <PieChart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
