import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchInput from "../../components/SearchInput";
import { useForm } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type FormValues = {
  id: string;
  fullName: string;
  gender: string;
  phone: string;
  age: string;
  appointmentDate: string;
  referredByDoctor: string;
  assignedDoctor: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppointmentDialog({
  appointments,
  setAppointments,
}: any) {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: FormValues) => {
    data.id = appointments.length + 1;
    setAppointments((prevState: any) => [...prevState, data]);
    handleClose();
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <SearchInput />
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Book an Appointment
        </Button>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth="xs"
        fullWidth
        sx={{ height: "100%" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Appointment Details</DialogTitle>

          <DialogContent dividers>
            <TextField
              margin="dense"
              id="fullName"
              label="Full Name"
              type="fullName"
              fullWidth
              variant="outlined"
              {...register("fullName", {
                required: "Name is required",
              })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="gender"
                label="Gender"
                {...register("gender")}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              id="phone"
              label="Phone no"
              type="phone"
              fullWidth
              variant="outlined"
              placeholder="0 123456789"
              {...register("phone", {
                required: "Phone no is required",
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              margin="dense"
              id="age"
              label="Age"
              type="age"
              fullWidth
              variant="outlined"
              placeholder="ex: 18"
              {...register("age", {
                required: "Age is required",
              })}
              error={!!errors.age}
              helperText={errors.age?.message}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Appointment Date"
                  sx={{ width: "100%" }}
                  slotProps={{
                    textField: {
                      helperText: "Date is required",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              margin="dense"
              id="referredByDoctor"
              label="Referred By Doctor"
              type="referredByDoctor"
              fullWidth
              variant="outlined"
              placeholder="ex: Dr. Smith"
              {...register("referredByDoctor", {
                required: "Specialist is required",
              })}
              error={!!errors.referredByDoctor}
              helperText={errors.referredByDoctor?.message}
            />
            <TextField
              margin="dense"
              id="assignedDoctor"
              label="Assigned Doctor"
              type="assignedDoctor"
              fullWidth
              variant="outlined"
              placeholder="ex: Dr. Smith"
              {...register("assignedDoctor", {
                required: "Assigned Doctor is required",
              })}
              error={!!errors.assignedDoctor}
              helperText={errors.assignedDoctor?.message}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
