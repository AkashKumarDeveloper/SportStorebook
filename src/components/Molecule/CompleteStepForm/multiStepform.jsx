import React, { useState } from 'react';
import { Container, Card, CardHeader, CardContent, Button, Box, Tabs, Tab } from '@mui/material';
import Step1 from './Step 1/index';
import Step2 from './Step 2/index';
import Step3 from './Step 3/index';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    satReading: '',
    satMath: '',
    actEnglish: '',
    actMath: '',
    actReading: '',
    actScience: '',
    gpa: '',
    ncea: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTabChange = (event, newValue) => {
    setStep(newValue);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <Container maxWidth="md">
      <Card>
        <CardHeader
          title="Multi-Step Form"
          action={
            <Box display="flex" alignItems="center">
              {step > 0 && <Button onClick={prevStep}>Back</Button>}
              <Tabs value={step} onChange={handleTabChange}>
                <Tab label="Step 1" />
                <Tab label="Step 2" />
                <Tab label="Step 3" />
              </Tabs>
            </Box>
          }
        />
        <CardContent>
          {step === 0 && (
            <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
          )}
          {step === 1 && (
            <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} />
          )}
          {step === 2 && (
            <Step3 formData={formData} handleChange={handleChange} />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default MultiStepForm;
