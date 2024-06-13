import React from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  satReading: Yup.number().min(1).max(800).required("Required"),
  satMath: Yup.number().min(1).max(800).required("Required"),
  actEnglish: Yup.number().min(1).max(36).required("Required"),
  actMath: Yup.number().min(1).max(36).required("Required"),
  actReading: Yup.number().min(1).max(36).required("Required"),
  actScience: Yup.number().min(1).max(36).required("Required"),
  gpa: Yup.number().min(0).max(4).required("Required"),
  ncea: Yup.string().required("Required"),
});

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        nextStep();
      }}
    >
      {({ errors, touched, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Academic Qualifications
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Field
                as={TextField}
                sx={{ width: 265 }}
                label="SAT Score Reading and Writing"
                variant="outlined"
                name="satReading"
                onChange={handleChange}
                margin="normal"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 800 } }}
                error={touched.satReading && !!errors.satReading}
                helperText={touched.satReading && errors.satReading}
              />
              <Field
                as={TextField}
                sx={{ width: 265 }}
                label="SAT Score Math"
                variant="outlined"
                name="satMath"
                onChange={handleChange}
                margin="normal"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 800 } }}
                error={touched.satMath && !!errors.satMath}
                helperText={touched.satMath && errors.satMath}
              />
              <Field
                as={TextField}
                sx={{ width: 265 }}
                label="ACT Score English"
                variant="outlined"
                name="actEnglish"
                onChange={handleChange}
                margin="normal"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 36 } }}
                error={touched.actEnglish && !!errors.actEnglish}
                helperText={touched.actEnglish && errors.actEnglish}
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Field
                as={TextField}
                sx={{ width: 265 }}
                label="ACT Score Mathematics"
                variant="outlined"
                name="actMath"
                onChange={handleChange}
                margin="normal"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 36 } }}
                error={touched.actMath && !!errors.actMath}
                helperText={touched.actMath && errors.actMath}
              />
              <Field
                as={TextField}
                sx={{ width: 265 }}
                label="ACT Score Readings"
                variant="outlined"
                name="actReading"
                onChange={handleChange}
                margin="normal"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 36 } }}
                error={touched.actReading && !!errors.actReading}
                helperText={touched.actReading && errors.actReading}
              />
              <Field
                as={TextField}
                sx={{ width: 265 }}
                label="ACT Score Science"
                variant="outlined"
                name="actScience"
                onChange={handleChange}
                margin="normal"
                type="number"
                InputProps={{ inputProps: { min: 1, max: 36 } }}
                error={touched.actScience && !!errors.actScience}
                helperText={touched.actScience && errors.actScience}
              />
            </Box>
            <Field
              as={TextField}
              label="Grade Point Average"
              variant="outlined"
              name="gpa"
              onChange={handleChange}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 4 } }}
              error={touched.gpa && !!errors.gpa}
              helperText={touched.gpa && errors.gpa}
            />
            <Field
              as={TextField}
              label="NCEA"
              variant="outlined"
              name="ncea"
              onChange={handleChange}
              margin="normal"
              select
              fullWidth
              error={touched.ncea && !!errors.ncea}
              helperText={touched.ncea && errors.ncea}
            >
              <MenuItem value="Option1">Option 1</MenuItem>
              <MenuItem value="Option2">Option 2</MenuItem>
            </Field>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Save & Continue
              </Button>
              <Button variant="contained" color="secondary">
                Assign to Coach
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
