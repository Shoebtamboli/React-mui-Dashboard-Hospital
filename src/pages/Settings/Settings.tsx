import React from "react";
import {
  Box,
  List,
  ListItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Typography,
  Checkbox,
  Container,
  Paper
} from "@mui/material";
import Appbar from "../../components/Appbar";
import Toolbar from "@mui/material/Toolbar";

import { useThemeStore } from "../../store/themeStore";

export default function Settings() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const {
    theme,
    toggleMode,
    setPrimaryColor,
    setSecondaryColor,
    setBorderRadius
  } = useThemeStore();

  const handlePrimaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrimaryColor(event.target.value);
  };

  const handleSecondaryColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondaryColor(event.target.value);
  };

  const handleBorderRadiusChange = (event: Event, value: number | number[]) => {
    setBorderRadius(value as number);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Settings" />
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            <List sx={{ width: "75%" }}>
              <ListItem component={Paper} elevation={1} sx={{ mb: 2 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Primary Color</FormLabel>

                  <RadioGroup
                    row
                    value={theme.palette.primary.main}
                    onChange={handlePrimaryColorChange}
                  >
                    <FormControlLabel
                      value="#0000FF"
                      control={<Radio />}
                      label="Blue"
                    />
                    <FormControlLabel
                      value="#FF0000"
                      control={<Radio />}
                      label="Red"
                    />
                    <FormControlLabel
                      value="#2C5F2D"
                      control={<Radio />}
                      label="Green"
                    />
                  </RadioGroup>
                </FormControl>
              </ListItem>

              <ListItem component={Paper} elevation={1} sx={{ mb: 2 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Secondary Color</FormLabel>

                  <RadioGroup
                    row
                    value={theme.palette.secondary.main}
                    onChange={handleSecondaryColorChange}
                  >
                    <FormControlLabel
                      value="#0000FF"
                      control={<Radio />}
                      label="Blue"
                    />
                    <FormControlLabel
                      value="#FF0000"
                      control={<Radio />}
                      label="Red"
                    />
                    <FormControlLabel
                      value="#2C5F2D"
                      control={<Radio />}
                      label="Green"
                    />
                  </RadioGroup>
                </FormControl>
              </ListItem>

              <ListItem component={Paper} elevation={1} sx={{ mb: 2 }}>
                <Typography id="border-radius-slider" gutterBottom>
                  Border Radius
                </Typography>
                <Slider
                  value={theme.shape.borderRadius}
                  min={0}
                  max={16}
                  step={1}
                  onChange={handleBorderRadiusChange}
                  valueLabelDisplay="on"
                  aria-labelledby="border-radius-slider"
                />
              </ListItem>
              <ListItem component={Paper} elevation={1} sx={{ mb: 2 }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Mode</FormLabel>
                  <RadioGroup
                    row
                    value={theme.palette.mode}
                    onChange={toggleMode}
                  >
                    <FormControlLabel
                      value="light"
                      control={<Radio />}
                      label="Light"
                    />
                    <FormControlLabel
                      value="dark"
                      control={<Radio />}
                      label="Dark"
                    />
                  </RadioGroup>
                </FormControl>
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
