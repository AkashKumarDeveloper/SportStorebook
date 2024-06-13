import React from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  primaryRole: Yup.string().required("Primary Role is required"),
  secondaryRole: Yup.string().required("Secondary Role is required"),
  primaryPosition: Yup.string().required("Primary Position is required"),
  secondaryPosition: Yup.string().required("Secondary Position is required"),
  profileVideoLink: Yup.string().url("Invalid URL").required("Profile Video Link is required"),
});

const Step2 = ({ formData, handleChange, nextStep }) => {
  const formik = useFormik({
    initialValues: {
      primaryRole: formData.primaryRole || "",
      secondaryRole: formData.secondaryRole || "",
      primaryPosition: formData.primaryPosition || "",
      secondaryPosition: formData.secondaryPosition || "",
      profileVideoLink: formData.profileVideoLink || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleChange({ target: { name: "primaryRole", value: values.primaryRole } });
      handleChange({ target: { name: "secondaryRole", value: values.secondaryRole } });
      handleChange({ target: { name: "primaryPosition", value: values.primaryPosition } });
      handleChange({ target: { name: "secondaryPosition", value: values.secondaryPosition } });
      handleChange({ target: { name: "profileVideoLink", value: values.profileVideoLink } });
      nextStep();
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Sport Specific Football/Soccer Details
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <TextField
          select
          label="Primary Role"
          variant="outlined"
          name="primaryRole"
          value={formik.values.primaryRole}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="normal"
          fullWidth
          error={formik.touched.primaryRole && Boolean(formik.errors.primaryRole)}
          helperText={formik.touched.primaryRole && formik.errors.primaryRole}
        >
          <MenuItem value="Role1">Defender</MenuItem>
          <MenuItem value="Role2">Striker</MenuItem>
        </TextField>
        <TextField
          select
          label="Secondary Role"
          variant="outlined"
          name="secondaryRole"
          value={formik.values.secondaryRole}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="normal"
          fullWidth
          error={formik.touched.secondaryRole && Boolean(formik.errors.secondaryRole)}
          helperText={formik.touched.secondaryRole && formik.errors.secondaryRole}
        >
          <MenuItem value="Role1">Defender</MenuItem>
          <MenuItem value="Role2">Striker</MenuItem>
        </TextField>
        <TextField
          select
          label="Primary Position"
          variant="outlined"
          name="primaryPosition"
          value={formik.values.primaryPosition}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="normal"
          fullWidth
          error={formik.touched.primaryPosition && Boolean(formik.errors.primaryPosition)}
          helperText={formik.touched.primaryPosition && formik.errors.primaryPosition}
        >
          <MenuItem value="Position1">Center Back</MenuItem>
          <MenuItem value="Position2">Center Right</MenuItem>
        </TextField>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TextField
          select
          label="Secondary Position"
          variant="outlined"
          name="secondaryPosition"
          value={formik.values.secondaryPosition}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="normal"
          fullWidth
          error={formik.touched.secondaryPosition && Boolean(formik.errors.secondaryPosition)}
          helperText={formik.touched.secondaryPosition && formik.errors.secondaryPosition}
        >
          <MenuItem value="Position1">Back Left</MenuItem>
          <MenuItem value="Position2">Midfield</MenuItem>
        </TextField>
        <TextField
          label="Profile Video Link"
          variant="outlined"
          name="profileVideoLink"
          value={formik.values.profileVideoLink}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="normal"
          fullWidth
          error={formik.touched.profileVideoLink && Boolean(formik.errors.profileVideoLink)}
          helperText={formik.touched.profileVideoLink && formik.errors.profileVideoLink}
        />
        <TextField
          label="Choose File"
          variant="outlined"
          name="profileVideoFile"
          type="file"
          onChange={(event) => formik.setFieldValue("profileVideoFile", event.currentTarget.files[0])}
          margin="normal"
          fullWidth
        />
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Save & Continue
        </Button>
        <Button variant="contained" color="secondary">
          Assign to Coach
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
