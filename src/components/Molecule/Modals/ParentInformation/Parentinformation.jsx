import React from "react";
import {
  Box,
  Button,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Divider,
  FormControl,
  Modal,
} from "@mui/material";
import ButtonComponent from "../../../atoms/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const labelStyle = {
  marginBottom: "4px",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 622,
  height: 529,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  overflow: "auto",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNo: Yup.string().required("Phone No is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Pincode must be 6 digits"),
  address: Yup.string().required("Address is required"),
});

const ParentInformationCard = ({
  open,
  handleClose,
  handleBack,
  handleContinue,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      country: "",
      city: "",
      state: "",
      pincode: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // If form is valid, continue
      handleContinue();

      console.log("formik.isValid", formik.errors);
      if (formik.isValid) {
        console.log("Form Values:", values);
      }
    },
  });
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Parent/Guardian Information (Primary Contact)
          </Typography>
          <Divider />
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 2, mb: 4 }}>
              <Grid item xs={6}>
                <InputLabel shrink sx={labelStyle}>
                  First Name
                </InputLabel>
                <TextField
                  fullWidth
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <InputLabel shrink sx={labelStyle}>
                  Email
                </InputLabel>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <InputLabel shrink sx={labelStyle}>
                  Country
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    fullWidth
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helpertext={formik.touched.country && formik.errors.country}
                  >
                    <MenuItem value="usa">USA</MenuItem>
                    <MenuItem value="india">India</MenuItem>
                    <MenuItem value="australia">Australia</MenuItem>
                  </Select>
                </FormControl>
                <InputLabel shrink sx={labelStyle}>
                  City
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    fullWidth
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helpertext={formik.touched.city && formik.errors.city}
                  >
                    <MenuItem value="ny">New York</MenuItem>
                    <MenuItem value="delhi">Delhi</MenuItem>
                    <MenuItem value="sydney">Sydney</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel shrink sx={labelStyle}>
                  Last Name
                </InputLabel>
                <TextField
                  fullWidth
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <InputLabel shrink sx={labelStyle}>
                  Phone No
                </InputLabel>
                <TextField
                  fullWidth
                  name="phoneNo"
                  value={formik.values.phoneNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneNo && Boolean(formik.errors.phoneNo)
                  }
                  helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                />
                <InputLabel shrink sx={labelStyle}>
                  State
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    fullWidth
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helpertext={formik.touched.state && formik.errors.state}
                  >
                    <MenuItem value="ny">New York</MenuItem>
                    <MenuItem value="dl">Delhi</MenuItem>
                    <MenuItem value="nsw">New South Wales</MenuItem>
                  </Select>
                </FormControl>
                <InputLabel shrink sx={labelStyle}>
                  Pincode
                </InputLabel>
                <TextField
                  fullWidth
                  name="pincode"
                  value={formik.values.pincode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.pincode && Boolean(formik.errors.pincode)
                  }
                  helperText={formik.touched.pincode && formik.errors.pincode}
                />
              </Grid>
            </Grid>
            <InputLabel shrink sx={labelStyle}>
              Address
            </InputLabel>
            <TextField
              fullWidth
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
                gap: "10px",
              }}
            >
              <ButtonComponent
                label="Back"
                size="large"
                color="#011A1E"
                labelColor="#fff"
                onClick={handleBack}
              />
              <ButtonComponent
                label="Save & Continue"
                size="large"
                color="#01A800"
                labelColor="#fff"
                type="submit"
              />
            </Box>
          </form>
        </CardContent>
      </Box>
    </Modal>
  );
};

export default ParentInformationCard;
