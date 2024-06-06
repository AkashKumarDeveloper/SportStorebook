import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import SliderSizes from "../.../../../../atoms/Slider/Slider";

const initialData = [
  { title: "Setbacks", score: 46 },
  { title: "Work Ethic", score: 22 },
  { title: "Finishing Tasks", score: 60 },
  { title: "Interests", score: 22 },
  { title: "New Projects", score: 55 },
  { title: "Goal Setting", score: 25 },
  { title: "Focus", score: 40 },
  { title: "Diligence", score: 63 },
];

const Step7 = ({nextStep}) => {
  const [scores, setScores] = useState(initialData);

  // const handleSliderChange = (index, newValue) => {
  //   const newScores = [...scores];
  //   newScores[index].score = newValue.target.value;
  //   // setScores(newScores);
  //   console.log(newScores, "slider");
  // };

  const handleSliderChange = (event, index) => {
    console.log("event>>", event, index);
    const newScores = [...scores];
    newScores[index].score = event.target.value;
    setScores(newScores);
  };

  const handleInputChange = (index, event) => {
    const newScores = [...scores];
    let newValue = event.target.value === "" ? "" : Number(event.target.value);
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    newScores[index].score = newValue;
    setScores(newScores);
    console.log(newScores, "score");
  };

  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Grit Test
          </Typography>
          <Grid container spacing={2}>
            {scores.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box mb={2}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Box display="flex" alignItems="center">
                    <SliderSizes
                      indexValue={index}
                      value={item.score}
                      name={item.title}
                      onChangeHandler={handleSliderChange}
                      color="#01a800"
                    />
                    <TextField
                      label="Add Score"
                      variant="outlined"
                      size="small"
                      margin="dense"
                      style={{ marginLeft: 16 }}
                      value={item.score}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="secondary">
              Assign To Coach
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

export default Step7;
