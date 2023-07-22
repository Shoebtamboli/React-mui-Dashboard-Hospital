//import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& svg": {
      animation: "$heartbeat 1s ease-in-out infinite"
    }
  },
  "@keyframes heartbeat": {
    "0%": {
      transform: "scale(1)"
    },
    "50%": {
      transform: "scale(1.3)"
    },
    "100%": {
      transform: "scale(1)"
    }
  }
}));

const HeartRateLoader = ({ message }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Diversity1OutlinedIcon
        color="primary"
        sx={{ fontSize: "6rem", mb: 2 }}
      />
      {message && <p style={{ marginTop: 20, fontSize: 18 }}>{message}</p>}
    </div>
  );
};

export default HeartRateLoader;
