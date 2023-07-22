import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
//import StickyFooter from "./components/StickyFooter";
import { router } from "./router";
//import { themeOptions } from "./themeOptions";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useThemeStore } from "./store/themeStore";

//const Theme = createTheme(themeOptions);

export default function App() {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <React.Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        }
      >
        <RouterProvider router={router} />
        {/* <StickyFooter /> */}
      </React.Suspense>
    </ThemeProvider>
  );
}
