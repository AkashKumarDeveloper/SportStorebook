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
import RadarChart from "../Radar Chart/Radarchart";

const ScoreBox = styled(Box)({
  display: "inline-block",
  padding: "5px 10px",
  borderRadius: "4px",
  backgroundColor: "#ff9800",
  color: "#fff",
  fontWeight: "bold",
  marginTop: "10px",
});

const defaultLabels = [
  "Arrow left",
  "Mile",
  "Yo yo test",
  "Vertical Jump",
  "Broad jump",
  "505 Agility",
  "40 Meter",
  "Arrow right",
];
const data = [12, 19, 3, 5, 2];

const CustomCardWithRadar = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              border={1}
              borderColor="#e0e0e0"
              borderRadius="8px"
              width="550px"
              height="400px"
            >
              <RadarChart
                labels={defaultLabels}
                data={[58, 78, 42, 58, 38, 60, 58, 30]}
                aspectRatio={2}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
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
                  <ListItemText primary="Arrow left - 55%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mile- 70%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="YoYo Test - 45%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Broad Jump - 55%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="505 Agility - 38%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="40 Meter - 60%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Arrow right- 52%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Arrow left - 25%" />
                </ListItem>
              </List>

              <ScoreBox>Score - 69</ScoreBox>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomCardWithRadar;
