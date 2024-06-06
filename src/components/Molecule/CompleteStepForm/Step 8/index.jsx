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

const offFieldData = [
  { title: "Punctuality", score: "46" },
  { title: "Motivational", score: "55" },
  { title: "Manners", score: "22" },
  { title: "Selflessnes", score: "70" },
  { title: "Resilience", score: "60" },
  { title: "Value to Team", score: "40" },
  { title: "Technability", score: "22" },
  { title: "Professionalism", score: "92" },
];

const onFieldData = [
  { title: "Leadership", score: "50" },
  { title: "Detemination to win", score: "40" },
  { title: "Follows Instructions", score: "57" },
  { title: "Positive Attitude", score: "70" },
  { title: "Resilience", score: "52" },
  { title: "Game Management", score: "40" },
  { title: "Positional Awareness", score: "41" },
  { title: "Transition", score: "50" },
];

const Step8 = ({nextStep}) => {
  const [scores, setScores] = useState(onFieldData);
  const [offFieldDatascores, setoffFieldDatascores] = useState(offFieldData);

  const handleSliderChange = (event, index) => {
    console.log("event>>", event, index);
    const newScores = [...scores];
    newScores[index].score = event.target.value;
    setScores(newScores);
  };

  const changeSlider =(event,index)=>{
    const newScores = [...offFieldDatascores];
    newScores[index].score = event.target.value;
    setoffFieldDatascores(newScores);
  }

  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Football/Soccer Coaches Questions
          </Typography>
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              1.Attributes of the field and in training
            </Typography>
            <Grid container spacing={2}>
              {offFieldData.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box mb={2}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Box display="flex" alignItems="center">
                      <SliderSizes
                        indexValue={index}
                        value={item.score}
                        name={item.title}
                        onChangeHandler={changeSlider}
                        color="#01a800"
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              2.Attributes on the field in match situation
            </Typography>
            <Grid container spacing={2}>
              {onFieldData.map((item, index) => (
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

                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
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

export default Step8;
