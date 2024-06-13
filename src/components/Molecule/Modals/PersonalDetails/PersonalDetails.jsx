import React from "react";
import {
  Box,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  FormControl,
  Modal,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonComponent from "../../../atoms/Button/Button";
import UploadImage from "../../../../Assets/Images/1.png";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 505,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: 2,
  overflow: "overlay",
};

const textFieldStyle = {
  "& .MuiInputBase-root": {
    height: "40px",
  },
};

const validationSchema = Yup.object({
  joiningDate: Yup.date().required("Joining Date is required"),
  dob: Yup.date().required("Date of Birth is required"),
  height: Yup.string().required("Height is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  gender: Yup.string().required("Gender is required"),
  age: Yup.number().required("Age is required").min(0, "Age must be positive"),
  weight: Yup.string().required("Weight is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Pincode must be 6 digits"),
  address: Yup.string().required("Address is required"),
  videoId: Yup.string().required("Video ID is required"),
  image: Yup.mixed()
    .required("Image is required")
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value && value.size <= 1048576
    ), // 1MB
});

const PersonalDetailsCard = ({
  open,
  handleClose,
  handleBack,
  handleContinue,
}) => {
  const formik = useFormik({
    initialValues: {
      joiningDate: "",
      dob: "",
      height: "",
      country: "",
      city: "",
      gender: "",
      age: "",
      weight: "",
      state: "",
      pincode: "",
      address: "",
      videoId: "",
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleContinue();
      console.log("Form Values:", values);
    },
  });

  const handleImageChange = (event) => {
    formik.setFieldValue("image", event.currentTarget.files[0]);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Please provide Personal Details
          </Typography>
          <Divider />
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                border: "2px dashed grey",
                borderRadius: 1,
                textAlign: "center",
                p: 2,
                mt: 2,
                mb: 4,
              }}
            >
              <input
                accept="image/*"
                id="upload-image"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="upload-image">
                <Box
                  component="img"
                  src={UploadImage}
                  alt="Upload Image"
                  sx={{ width: 48, height: 48, cursor: "pointer" }}
                />
                <Typography variant="body1">Upload Image</Typography>
              </label>
              {formik.errors.image && formik.touched.image && (
                <Typography color="error">{formik.errors.image}</Typography>
              )}
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <InputLabel shrink>Joining Date</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  name="joiningDate"
                  value={formik.values.joiningDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.joiningDate &&
                    Boolean(formik.errors.joiningDate)
                  }
                  helperText={
                    formik.touched.joiningDate && formik.errors.joiningDate
                  }
                />
                <InputLabel shrink>Date of Birth</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  name="dob"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                />
                <InputLabel shrink>Height</InputLabel>
                <FormControl fullWidth>
                  <Select
                    name="height"
                    value={formik.values.height}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.height && Boolean(formik.errors.height)
                    }
                    helpertext={formik.touched.height && formik.errors.height}
                  >
                    <MenuItem value={150}>150 cm</MenuItem>
                    <MenuItem value={160}>160 cm</MenuItem>
                    <MenuItem value={170}>170 cm</MenuItem>
                  </Select>
                </FormControl>
                <InputLabel shrink>Country</InputLabel>
                <FormControl fullWidth>
                  <Select
                    sx={textFieldStyle}
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
                <InputLabel shrink>City</InputLabel>
                <FormControl fullWidth>
                  <Select
                    sx={textFieldStyle}
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
                <InputLabel shrink>Gender</InputLabel>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="gender"
                    row
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid grey",
                        borderRadius: 1,
                        p: 1,
                        flexGrow: 1,
                        mr: 1,
                        height: "38px",
                      }}
                    >
                      <Typography variant="body1" sx={{ mr: 1 }}>
                        Male
                      </Typography>
                      <Radio value="male" name="gender" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid grey",
                        borderRadius: 1,
                        p: 1,
                        flexGrow: 1,
                        ml: 1,
                        height: "38px",
                      }}
                    >
                      <Typography variant="body1" sx={{ mr: 1 }}>
                        Female
                      </Typography>
                      <Radio value="female" name="gender" />
                    </Box>
                  </RadioGroup>
                </Box>
                {formik.errors.gender && formik.touched.gender && (
                  <Typography color="error">{formik.errors.gender}</Typography>
                )}
                <InputLabel shrink>Age</InputLabel>
                <TextField
                  sx={textFieldStyle}
                  type="number"
                  fullWidth
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                />
                <InputLabel shrink>Weight</InputLabel>
                <FormControl fullWidth>
                  <Select
                    sx={textFieldStyle}
                    name="weight"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helpertext={formik.touched.weight && formik.errors.weight}
                  >
                    <MenuItem value={50}>50 kg</MenuItem>
                    <MenuItem value={60}>60 kg</MenuItem>
                    <MenuItem value={70}>70 kg</MenuItem>
                  </Select>
                </FormControl>
                <InputLabel shrink>State</InputLabel>
                <FormControl fullWidth>
                  <Select
                    sx={textFieldStyle}
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
                <InputLabel shrink>Pincode</InputLabel>
                <TextField
                  sx={textFieldStyle}
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
            <InputLabel shrink>Address</InputLabel>
            <TextField
              sx={textFieldStyle}
              fullWidth
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <InputLabel shrink>Video ID</InputLabel>
            <TextField
              sx={textFieldStyle}
              fullWidth
              name="videoId"
              value={formik.values.videoId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.videoId && Boolean(formik.errors.videoId)}
              helperText={formik.touched.videoId && formik.errors.videoId}
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

export default PersonalDetailsCard;
