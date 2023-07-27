import { Diversity1Outlined as Diversity1OutlinedIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";

const HeartRateLoader = ({ message }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        "& svg": {
          animation: "heartbeat 1s ease-in-out infinite",
        },
        "@keyframes heartbeat": {
          // Define the keyframes here
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.3)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      }}
    >
      <Diversity1OutlinedIcon
        color="primary"
        sx={{ fontSize: "6rem", mb: 2 }}
      />
      {message && <p style={{ marginTop: 20, fontSize: 18 }}>{message}</p>}
    </Box>
  );
};

export default HeartRateLoader;
