import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Box,
  Divider,
  Button,
} from "@mui/material";

const PlayerCard = () => {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
            PLAYER SKILLS ASSESSMENTS
          </Typography>
          <Typography variant="subtitle1">
            Standard Score/Percentage Rank Profile
          </Typography>
        </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              src="https://via.placeholder.com/100"
              sx={{ width: 80, height: 80, borderRadius: 2 }}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Box>
              <Typography variant="body1">
                <strong>Player Name :</strong> Adam Smith
              </Typography>
              <Typography variant="body1">
                <strong>Date of Birth :</strong> 28-Jul-1998
              </Typography>
              <Typography variant="body1">
                <strong>Age :</strong> 25
              </Typography>
              <Typography variant="body1">
                <strong>Gender :</strong> Male
              </Typography>
              <Typography variant="body1">
                <strong>Player ID :</strong> JHIAJD6565
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={5}>
            <Box>
              <Typography variant="body1">
                <strong>Total Goals :</strong> 10
              </Typography>
              <Typography variant="body1">
                <strong>Total Matches :</strong> 35
              </Typography>
              <Typography variant="body1">
                <strong>Red Card :</strong> 5
              </Typography>
              <Typography variant="body1">
                <strong>Yellow Card :</strong> 2
              </Typography>
              <Typography variant="body1">
                <strong>Suspensions :</strong> 1
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
