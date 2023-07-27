import * as React from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import General from "./General";
import Billing from "./Billing";
import Notifications from "./Notifications";
import Security from "./Security";
import Team from "./Team";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <TabList
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 60,
    width: "100%",
    backgroundColor: "#635ee7"
  }
});

interface StyledTabProps {
  label: string;
  value: string; // Added value prop here
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  //color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#000"
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)"
  }
}));

export default function CustomizedTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabs onChange={handleChange} aria-label="lab API tabs example" value={value} >
            <StyledTab label="General" value="1" />
            <StyledTab label="Billing" value="2" />
            <StyledTab label="Team" value="3" />
            <StyledTab label="Notification" value="4" />
            <StyledTab label="Security" value="5" />
          </StyledTabs>
        </Box>
        <TabPanel sx={{ width: "100%" }} value="1">
          <General />
        </TabPanel>
        <TabPanel value="2">
          <Billing />
        </TabPanel>
        <TabPanel value="3">
          <Team />
        </TabPanel>
        <TabPanel sx={{ width: "100%" }} value="4">
          <Notifications />
        </TabPanel>
        <TabPanel sx={{ width: "100%" }} value="5">
          <Security />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
