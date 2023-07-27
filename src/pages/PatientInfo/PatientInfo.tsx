import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Box,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Appbar from "../../components/Appbar";
import { Link, useParams } from "react-router-dom";

const PatientInfoSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .required("Required")
    .matches(/^\d+$/, "Phone number must contain only digits"),
  email: Yup.string().email("Invalid email").required("Required"),
  age: Yup.number().required("Required").positive("Age must be positive"),
  bloodGroup: Yup.string().required("Required"),
  referredByDoctor: Yup.string().required("Required"),
  referredByDoctorEmail: Yup.string().email("Invalid email"),
  referredByDoctorPhoneNumber: Yup.string().matches(
    /^\d+$/,
    "Phone number must contain only digits"
  ),
  diseases: Yup.string().required("Required"),
  patientHistory: Yup.string(),
});

const PatientInfo = ({ patients }: any) => {
  const { id } = useParams<{ id: string }>();
  const patient = patients?.find(
    (patient: any) => patient.id === parseInt(id || "", 10)
  );

  const initialValues = {
    firstName: patient.firstName,
    lastName: patient.lastName,
    address: patient.address,
    phoneNumber: patient.phoneNumber,
    email: patient.email,
    age: patient.age,
    bloodGroup: patient.bloodGroup,
    referredByDoctor: patient.referredByDoctor,
    referredByDoctorEmail: patient.referredByDoctorEmail,
    referredByDoctorPhoneNumber: patient.referredByDoctorPhoneNumber,
    diseases: patient.diseases,
    patientHistory: patient.patientHistory,
  };
  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log(values);
    //resetForm();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Patient Information" />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Grid
              container
              spacing={2}
              sx={{ marginleft: "10px", padding: "20px" }}
            >
              <IconButton component={Link} to="/patient-list" color="inherit">
                <ArrowBackIcon />
              </IconButton>
              <Grid item xs={12}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={PatientInfoSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Field
                            as={TextField}
                            name="firstName"
                            label="First Name"
                            fullWidth
                            error={errors.firstName && touched.firstName}
                            helperText={touched.firstName && errors.firstName}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            as={TextField}
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            error={errors.lastName && touched.lastName}
                            helperText={touched.lastName && errors.lastName}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="address"
                            label="Address"
                            fullWidth
                            error={errors.address && touched.address}
                            helperText={touched.address && errors.address}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            as={TextField}
                            name="phoneNumber"
                            label="Phone Number"
                            fullWidth
                            error={errors.phoneNumber && touched.phoneNumber}
                            helperText={
                              touched.phoneNumber && errors.phoneNumber
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            error={errors.email && touched.email}
                            helperText={touched.email && errors.email}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field
                            as={TextField}
                            name="age"
                            label="Age"
                            fullWidth
                            error={touched.age && Boolean(errors.age)}
                            helperText={touched.age && errors.age}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <InputLabel
                            id="blood-group-label"
                            sx={{ align: "left" }}
                          >
                            Blood Group
                          </InputLabel>
                          <Select
                            name="bloodGroup"
                            labelId="blood-group-label"
                            // value={values.bloodGroup}
                            // onChange={handleChange}
                            error={
                              touched.bloodGroup && Boolean(errors.bloodGroup)
                            }
                            fullWidth
                          >
                            <MenuItem value="">Select blood group</MenuItem>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                          </Select>
                          {touched.bloodGroup && errors.bloodGroup && (
                            <Box mt={1} color="red">
                              {Object.values(errors.bloodGroup).map(
                                (error: any, index) => (
                                  <div key={index}>{error}</div>
                                )
                              )}
                            </Box>
                          )}
                        </Grid>

                        <Divider />

                        <Grid item xs={12}>
                          <Typography variant="h6" align="left">
                            Referred by Doctor:
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="referredByDoctor"
                            label="Doctor's Name"
                            fullWidth
                            error={
                              errors.referredByDoctor &&
                              touched.referredByDoctor
                            }
                            helperText={
                              touched.referredByDoctor &&
                              errors.referredByDoctor
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            name="doctorEmail"
                            // value={values.doctorEmail}
                            // onChange={handleChange}
                            label="Doctor's Email"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            name="doctorPhone"
                            // value={values.doctorPhone}
                            // onChange={handleChange}
                            label="Doctor's Phone"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Diseases"
                            name="diseases"
                            // value={values.diseases}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Patient History"
                            name="patientHistory"
                            // value={values.patientHistory}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Attachments"
                            name="attachments"
                            // value={values.attachments}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Handled By"
                            name="handledBy"
                            // value={values.handledBy}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <Grid container justifyContent="flex-end">
                        <Grid item xs={1} sm={1}>
                          <Button
                            component={Link}
                            to="/patient-list"
                            color="inherit"
                          >
                            Cancel
                          </Button>
                        </Grid>
                        <Grid item xs={1} sm={1}>
                          <Button type="submit" variant="contained">
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default PatientInfo;
