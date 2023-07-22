import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Avatar, Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomizedTabs from "./CustomizedTabs";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import Chip from "@mui/material/Chip";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Team() {
  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Invite members
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            You currently pay for 2 Editor Seats.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="email"
            fullWidth
            label="Email address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Send Invite
          </Button>
        </Grid>
      </Grid>

      <Divider light sx={{ mt: 4, mb: 4 }} />

      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography
            variant="body2"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Member
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="body2"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            Role
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        component={Paper}
        elevation={0}
        sx={{ p: 1, mt: 1 }}
      >
        <Grid item xs={6}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar
              alt="Jack Sparrow"
              src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Stack>
              <Typography>John Doe</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                john.doe@example.com
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Chip label="Owner" size="small" color="primary" variant="filled" />
        </Grid>
        <Grid item xs={2}>
          <IconButton disableRipple aria-label="avatar">
            <MoreHorizIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        component={Paper}
        elevation={0}
        sx={{ p: 1, mt: 1 }}
      >
        <Grid item xs={6}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar
              alt="Jack Sparrow"
              src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Stack>
              <Typography>John Doe</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                john.doe@example.com
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Chip label="Standard" size="small" variant="filled" />
        </Grid>
        <Grid item xs={2}>
          <IconButton disableRipple aria-label="avatar">
            <MoreHorizIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
