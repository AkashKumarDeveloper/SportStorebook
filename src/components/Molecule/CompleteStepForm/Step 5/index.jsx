import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  verticalJump: Yup.string().required("Required"),
  speed: Yup.string().required("Required"),
  maximalStrength: Yup.string().required("Required"),
  Agility: Yup.string().required("Required"),
  arrowheadAgility: Yup.string().required("Required"),
  balance: Yup.string().required("Required"),
  aerobicfitness: Yup.string().required("Required"),
  sit: Yup.string().required("Required"),
});

const initialValues1 = {
  verticalJump: "",
  speed: "",
  maximalStrength: "",
  Agility: "",
  arrowheadAgility: "",
  balance: "",
  aerobicfitness: "",
  sit: "",
};

const Step5 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <Formik
      initialValues={initialValues1}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        nextStep();
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Container maxWidth="md">
            <Card>
              <CardHeader title="Physical Tests" />
              <CardContent>
                {[
                  { title: "verticalJump" },
                  { title: "speed" },
                  { title: "maximalStrength" },
                  { title: "Agility" },
                  { title: "arrowheadAgility" },
                  { title: "balance" },
                  { title: "aerobicfitness" },
                  { title: "sit" },
                ].map((element, index) => (
                  <Box mb={2} key={index}>
                    <Typography variant="h6" color="primary">
                      {element.title.replace(/([A-Z])/g, " $1").trim()}
                    </Typography>
                    <Field name={element.title}>
                      {({ field }) => (
                        <RadioGroup
                          row
                          {...field}
                          value={field.value}
                          onChange={handleChange}
                        >
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            width="100%"
                          >
                            <FormControlLabel
                              value="Low Average"
                              control={<Radio color="primary" />}
                              label="Low Average"
                            />
                            <FormControlLabel
                              value="High Average"
                              control={<Radio color="primary" />}
                              label="High Average"
                            />
                            <FormControlLabel
                              value="Very Superior"
                              control={<Radio color="primary" />}
                              label="Very Superior"
                            />
                          </Box>
                        </RadioGroup>
                      )}
                    </Field>
                    <ErrorMessage name={element.title}>
                      {(msg) => <Typography color="error">{msg}</Typography>}
                    </ErrorMessage>
                    <Divider />
                  </Box>
                ))}
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Button variant="contained" onClick={prevStep}>
                    Back
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    Save & Continue
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Step5;
