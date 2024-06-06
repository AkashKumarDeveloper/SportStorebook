import React, { useState } from "react";
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
  Tabs,
  Tab,
  Container,
  Divider,
} from "@mui/material";
import { element } from "prop-types";

const Step6 = ({ formData, handleChange, nextStep }) => {
  const [value, setValue] = useState({
    patternRecognition: "",
    problemSolving: "",
    sequencing: "",
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setValue({
      ...value,
      [name]: value,
    });
    handleChange(event);
  };

  const val = [
    { title: "Pattern Recognition" },
    { title: "Problem Solving" },
    { title: "Sequencing" },
  ];

  return (
    <Container maxWidth="md">
      <Card>
        <CardHeader title="Cognitive Ability" />
        <CardContent>
          {val.map((element, index) => (
            <Box mb={2} key={index}>
              <Typography variant="h6" color="primary">
                {element.title}
              </Typography>
              <RadioGroup
                row
                name={element.title}
                value={value[element.title]}
                onChange={handleRadioChange}
                display="flex"
                justify-content="space-between"
              >
                <Box display="flex" justifyContent="space-between" width="100%">
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
            </Box>
          ))}
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained">Back</Button>
            <Button variant="contained" color="primary" onClick={nextStep}>
              Save & Continue
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Step6;