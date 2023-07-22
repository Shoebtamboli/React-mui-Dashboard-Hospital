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

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type FormValues = {
  id: string;
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  education: string;
  specialist: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddDoctorDialog({
  mockData,
  doctors,
  setDoctors
}: any) {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: FormValues) => {
    data.id = doctors.length + 1;
    setDoctors((prevState: any) => [...prevState, data]);
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
          Add doctor
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
          <DialogTitle>Add Dcotor</DialogTitle>

          <DialogContent dividers>
            <TextField
              margin="dense"
              id="fullName"
              label="Full Name"
              type="fullName"
              fullWidth
              variant="outlined"
              {...register("fullName", {
                required: "Name is required"
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
                required: "Phone no is required"
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              placeholder="ex: test@test.com"
              {...register("email", {
                required: "Email is required"
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              margin="dense"
              id="education"
              label="Education"
              type="education"
              fullWidth
              variant="outlined"
              placeholder="ex: MBBS, MD"
              {...register("education", {
                required: "Education is required"
              })}
              error={!!errors.education}
              helperText={errors.education?.message}
            />
            <TextField
              margin="dense"
              id="specialist"
              label="Specialist"
              type="specialist"
              fullWidth
              variant="outlined"
              placeholder="ex: Cardiologist, Dentist"
              {...register("specialist", {
                required: "Specialist is required"
              })}
              error={!!errors.specialist}
              helperText={errors.specialist?.message}
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
