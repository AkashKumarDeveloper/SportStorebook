import React, { useState } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import Step1 from "./Step 1/index";
import Step2 from "./Step 2/index";
import Step3 from "./Step 3/index";
import Step4 from "./Step 4/index";
import Step5 from "./Step 5/index";
import Step6 from "./Step 6/index";
import Step7 from "./Step 7/index";
import Step8 from "./Step 8/index";
import Step9 from "./Step 9/index";
import FinalStep from "../../atoms/ProfileCompletion/index";
import ProfilePage from "../../Molecule/ProfilePage/ProfilePage";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [showProfilePage, setShowProfilePage] = useState(false);
  const [formData, setFormData] = useState({
    satReading: "",
    satMath: "",
    actEnglish: "",
    actMath: "",
    actReading: "",
    actScience: "",
    gpa: "",
    ncea: "",
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

  const handleGoToProfile = () => {
    setShowProfilePage(true);
  };

  return (
    <Container maxWidth="md">
      {showProfilePage ? (
        <ProfilePage />
      ) : (
        <Card>
          <CardHeader
            action={
              <Box display="flex" alignItems="center">
                {step !== 9 && (
                  <>
                    {step > 0 && <Button onClick={prevStep}>Back</Button>}
                    <Tabs value={step} onChange={handleTabChange}>
                      <Tab label="Step 1" />
                      <Tab label="Step 2" />
                      <Tab label="Step 3" />
                      <Tab label="Step 4" />
                      <Tab label="Step 5" />
                      <Tab label="Step 6" />
                      <Tab label="Step 7" />
                      <Tab label="Step 8" />
                      <Tab label="Step 9" />
                    </Tabs>
                  </>
                )}
              </Box>
            }
          />
          <CardContent>
            {step === 0 && (
              <Step1
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 1 && (
              <Step2
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <Step3
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 3 && (
              <Step4
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 4 && (
              <Step5
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 5 && (
              <Step6
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 6 && (
              <Step7
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 7 && (
              <Step8
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 8 && (
              <Step9
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />
            )}
            {step === 9 && <FinalStep onGoToProfile={handleGoToProfile} />}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default MultiStepForm;
