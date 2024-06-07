import React from "react";
import { Grid, Box } from "@mui/material";
import CarouselComponent from "../../atoms/Carousel";
import PlayerTable from "../../atoms/Table/table";
import PersonalInfoCard from "../../atoms/playerInformation/playerinformation";
import CoachDetails from "../../atoms/Coach";
import AboutTeamCard from "../../atoms/AboutTeam/aboutteam";

const Dashboardpage = () => {
  return (
    <Box sx={{ width: "80vw", marginLeft: 30, flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2} md={12}>
        <Grid item xs={12} md={8}>
          <CarouselComponent />
          <PlayerTable />
        </Grid>
        <Grid item xs={12} md={4} container spacing={2}>
          <Grid item xs={12}>
            <PersonalInfoCard />
            <CoachDetails />
            <AboutTeamCard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboardpage;
