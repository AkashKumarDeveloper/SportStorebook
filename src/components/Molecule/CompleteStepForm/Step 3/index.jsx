import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useFormik, FormikProvider, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  gamesLast24Months: Yup.number().min(1).max(800).required("Required"),
  gamesStarted: Yup.number().min(1).max(800).required("Required"),
  minutesOnField: Yup.number().min(1).max(800).required("Required"),
  goals: Yup.number().min(1).max(36).required("Required"),
  yellowCards: Yup.number().min(1).max(36).required("Required"),
  redCards: Yup.number().min(1).max(36).required("Required"),
  gamesMissed: Yup.number().min(1).max(36).required("Required"),
  avgDistance: Yup.number().min(1).max(36).required("Required"),
});
const initialValues1 = {
  gamesLast24Months: "",
  gamesStarted: "",
  minutesOnField: "",
  goals: "",
  yellowCards: "",
  redCards: "",
  gamesMissed: "",
  avgDistance: "",
};
const Step3 = ({ formData, handleChange, nextStep }) => {
  const formik = useFormik({
    initialValues: initialValues1,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      nextStep();
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Player Data from Tribe/Comet/Veo/Statscore
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Number of Games in the last 24 months"
              variant="outlined"
              name="gamesLast24Months"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 800 } }}
              error={
                formik.touched.gamesLast24Months &&
                !!formik.errors.gamesLast24Months
              }
              helperText={
                formik.touched.gamesLast24Months &&
                formik.errors.gamesLast24Months
              }
            />
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Number of games started"
              variant="outlined"
              name="gamesStarted"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 800 } }}
              error={
                formik.touched.gamesStarted && !!formik.errors.gamesStarted
              }
              helperText={
                formik.touched.gamesStarted && formik.errors.gamesStarted
              }
            />
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Number of minutes on field in last 24 months"
              variant="outlined"
              name="minutesOnField"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 800 } }}
              error={
                formik.touched.minutesOnField && !!formik.errors.minutesOnField
              }
              helperText={
                formik.touched.minutesOnField && formik.errors.minutesOnField
              }
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Number of goals"
              variant="outlined"
              name="goals"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 36 } }}
              error={formik.touched.goals && !!formik.errors.goals}
              helperText={formik.touched.goals && formik.errors.goals}
            />
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Number of yellow cards"
              variant="outlined"
              name="yellowCards"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 36 } }}
              error={formik.touched.yellowCards && !!formik.errors.yellowCards}
              helperText={
                formik.touched.yellowCards && formik.errors.yellowCards
              }
            />
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Number of red cards"
              variant="outlined"
              name="redCards"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 36 } }}
              error={formik.touched.redCards && !!formik.errors.redCards}
              helperText={formik.touched.redCards && formik.errors.redCards}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Games missed from suspension"
              variant="outlined"
              name="gamesMissed"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 36 } }}
              error={formik.touched.gamesMissed && !!formik.errors.gamesMissed}
              helperText={
                formik.touched.gamesMissed && formik.errors.gamesMissed
              }
            />
            <Field
              as={TextField}
              sx={{ width: 265 }}
              label="Average distance covered per game"
              variant="outlined"
              name="avgDistance"
              onChange={formik.handleChange}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 36 } }}
              error={formik.touched.avgDistance && !!formik.errors.avgDistance}
              helperText={
                formik.touched.avgDistance && formik.errors.avgDistance
              }
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
      </Form>
    </FormikProvider>
  );
};

export default Step3;
