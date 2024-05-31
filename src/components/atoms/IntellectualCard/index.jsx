import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import PolarAreaChart from "../Polarchart/Polar";

const ScoreBox = styled(Box)({
  display: "inline-block",
  padding: "5px 10px",
  borderRadius: "4px",
  backgroundColor: "#ff9800",
  color: "#fff",
  fontWeight: "bold",
  marginTop: "10px",
});

const dataLabels = [
  "Arrow left",
  "Mile",
  "Yo yo test",
  "Vertical Jump",
  "Broad jump",
  "505 Agility",
  "40 Meter",
  "Arrow right",
];
const data = {
  datasets: [
    {
      data: [12, 19, 3, 5, 2],
    },
  ],
};

const CustomCardWithPolar = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box display="flex" alignItems="center">
                <Box ml={2}>
                  <Typography variant="h6">Physical Report</Typography>
                  <Typography variant="subtitle1">
                    Physical Assesment Overview
                  </Typography>
                </Box>
              </Box>

              <List dense>
                <ListItem>
                  <ListItemText primary="Problem Solving - 15%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Persistence- 30%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Spatial awarness - 42%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Visual Auditory - 62%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Visual Matching- 30%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Pattern Recognition - 75%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Working Memory- 45%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Cognitive Efficiency - 30%" />
                </ListItem>
              </List>

              <ScoreBox>Score - 78</ScoreBox>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              border={1}
              borderColor="#e0e0e0"
              borderRadius="8px"
              width="550px"
              height="400px"
            >
              <PolarAreaChart data={data} aspectRatio={2} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomCardWithPolar;
