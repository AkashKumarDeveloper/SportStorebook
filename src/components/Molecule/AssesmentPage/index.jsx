// src/MainDashboard.jsx
import React from "react";
import { Box, Grid, Card } from "@mui/material";
import AssessmentTable from "../../atoms/AssesmentTable/Assesment";
import PastAssessments from "../../atoms/PastAssesments/pastAssesments";
import SportsProfile from "../../atoms/Sportsprofile/sportsprofile";

const AssesmentPage = () => {
  return (
    <Box sx={{ width: "80vw", marginLeft: 30 }} p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <Box p={2}>
              <AssessmentTable />
            </Box>
            <Box p={2} mt={2}>
              <PastAssessments />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <SportsProfile />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssesmentPage;
