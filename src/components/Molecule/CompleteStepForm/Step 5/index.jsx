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

const Step5 = ({ formData, handleChange, nextStep, prevStep }) => {
  const [value, setValue] = useState({
    verticalJump: "",
    speed: "",
    maximalStrength: "",
    Agility: "",
    arrowheadAgility: "",
    balance: "",
    aerobicfitness: "",
    sit: "",
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    console.log("name>>>",name,"value>>>",value)
    setValue({
      ...value,
      [name]: value,
    });
    handleChange(event);
  };
  const val = [
    { title: "Vertical Jump" },
    { title: "Speed" },
    { title: "Maximal Strength" },
    { title: "505 Agility" },
    { title: "Arrrowhead Agility" },
    { title: "Balance" },
    { title: "Aerobic Fitness YO-YO Test" },
    { title: "Sit and Reach Flexiblity" },
  ];

  return (
    <Container maxWidth="md">
      <Card>
        <CardHeader title="Physical Tests" />
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
                justifyContent="space-between"
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
              <Divider/>
            </Box>
          ))}
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" onClick={prevStep}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={nextStep}>
              Save & Continue
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Step5;

