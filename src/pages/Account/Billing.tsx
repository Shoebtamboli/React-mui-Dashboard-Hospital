import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Avatar, Typography, Box, Stack, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import LayersIcon from "@mui/icons-material/Layers";
import EditIcon from "@mui/icons-material/Edit";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const invoiceData = [
  {
    date: "29 May 2023",
    total: "$4.99",
    invoice: "View invoice"
  },
  {
    date: "29 May 2023",
    total: "$4.99",
    invoice: "View invoice"
  },
  {
    date: "29 May 2023",
    total: "$4.99",
    invoice: "View invoice"
  }
];

const plans = [
  {
    icon: <LayersIcon sx={{ mb: 3 }} />,
    price: "$0.00",
    type: "startup",
    selected: false
  },
  {
    icon: <LayersIcon sx={{ mb: 3 }} />,
    price: "$4.99",
    type: "standard",
    selected: true
  },
  {
    icon: <LayersIcon sx={{ mb: 3 }} />,
    price: "$29.99",
    type: "Business",
    selected: false
  }
];

const billingDetails = [
  { title: "Billing name", value: "John Doe" },
  { title: "Card number", value: "**** 1111" },
  { title: "Country", value: "Germany" },
  { title: "Zip / Postal code", value: "667123" }
];

function Item({ index, on, set, plan }: any) {
  const handleClick = () => {
    if (on) set(null);
    else set(index);
  };

  return (
    <Box
      component={Paper}
      onClick={handleClick}
      sx={{
        border: on && "1px solid lightseagreen",
        p: 2,
        cursor: "pointer",
        borderRadius: 1
      }}
    >
      {plan.icon}
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {plan.price}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          /mo
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0.5}
        sx={{ mb: 2 }}
      >
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "uppercase", fontWeight: "bold" }}
        >
          {plan.type}
        </Typography>
        {plan.selected && (
          <Typography
            variant="subtitle2"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Using now
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

export default function Billing() {
  const [highlight, setHighlight] = React.useState<any>(1);

  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Change Plan
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        You can upgrade and downgrade whenever you want
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {plans.map((plan: any, index: any) => (
          <Grid item xs={4}>
            <Item
              plan={plan}
              key={index}
              index={index}
              on={highlight === index}
              set={setHighlight}
            />
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Billing details
        </Typography>
        <Button startIcon={<EditIcon />} sx={{ textTransform: "none" }}>
          Edit
        </Button>
      </Stack>
      {/* <Box sx={{ mt: 4 }}>
        {billingDetails.map((detail: any, index: any) => (
          <Grid key={index} spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <Typography
                variant="subtitle2"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                {detail.title}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="text.secondary">
                {detail.value}
              </Typography>
            </Grid>
          </Grid>
        ))} */}

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          mt: 1,
          mb: 1,
          borderRadius: 1,
          p: 1
        }}
      >
        {billingDetails.map((detail: any, index: any) => (
          <ListItem key={index} disableGutters alignItems="flex-start" dense>
            <ListItemText primary={detail.title} />
            <ListItemText secondary={detail.value} />
          </ListItem>
        ))}
      </List>

      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        We cannot refund once you purchased a subscription, but you can always{" "}
        <span style={{ color: "blue" }}>Cancel</span>
      </Typography>

      <Typography variant="body1" sx={{ fontWeight: "bold", mt: 4 }}>
        Invoice history
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        You can view and download all your previous invoices here. If you’ve
        just made a payment, it may take a few hours for it to appear in the
        table below.
      </Typography>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              textTransform: "uppercase"
            }}
          >
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Total (Incl. Tax)</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceData.map((row: any, index: any) => (
              <TableRow
                key={index}
                //sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                  <Link sx={{ cursor: "pointer" }}>{row.invoice}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
