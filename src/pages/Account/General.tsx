import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Avatar, Typography, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

export default function General() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Basic info
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={8}>
            <IconButton
              disableRipple
              aria-label="avatar"
              onClick={() => console.log("hi")}
            >
              <Avatar
                alt="Jack Sparrow"
                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                sx={{
                  border: "3px solid lightseagreen",
                  height: "100px",
                  width: "100px",
                  mb: 2
                }}
              />
            </IconButton>
          </Grid>

          <Stack spacing={2}>
            <Stack direction="row" spacing={0.5}>
              <TextField
                id="fullName"
                fullWidth
                label="Full Name"
                defaultValue="John Doe"
              />
              <Button size="small">Save</Button>
            </Stack>
            <Stack direction="row" spacing={0.5}>
              <TextField
                required
                disabled
                id="email"
                fullWidth
                label="Email Address"
                defaultValue="example@example.com"
              />
              <Button size="small">Edit</Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Divider light sx={{ mt: 4, mb: 4 }} />

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Public profile
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <Stack direction="column" spacing={0.5}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Make Contact Info Public
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Means that anyone viewing your profile will be able to see your
                contact details.
              </Typography>
            </Stack>
            <Switch defaultChecked />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Stack direction="column" spacing={0.5}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Available to hire
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Toggling this will let your teammates know that you are
                available for acquiring new projects.
              </Typography>
            </Stack>
            <Switch defaultChecked />
          </Stack>
        </Grid>
      </Grid>

      <Divider light sx={{ mt: 4, mb: 4 }} />

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Delete Account
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Stack direction="column" spacing={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Delete your account and all of your source data. This is
              irreversible.
            </Typography>

            <Button
              variant="outlined"
              color="error"
              sx={{ textTransform: "none", fontWeight: "bold", width: "20%" }}
            >
              Delete account
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Divider light sx={{ mt: 4 }} />
    </>
  );
}
