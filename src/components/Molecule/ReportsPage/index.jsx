// src/App.js
import React from 'react';
import { Box, Grid } from '@mui/material';
import PlayerCard from '../../atoms/PlayerSkillAssesment/index';
import OverallRankCard from '../../atoms/Overall Rank/index';
import CustomCard from '../../atoms/';
import CustomCardWithRadar from './CustomCardWithRadar';
import CustomCardWithPolar from './CustomCardWithPolar';
import Appy from './Appy';

const ReportsPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <PlayerCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <OverallRankCard />
        </Grid>
        <Grid item xs={12}>
          <CustomCard />
        </Grid>
        <Grid item xs={12}>
          <CustomCardWithRadar />
        </Grid>
        <Grid item xs={12}>
          <CustomCardWithPolar />
        </Grid>
        <Grid item xs={12}>
          <Appy />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;
