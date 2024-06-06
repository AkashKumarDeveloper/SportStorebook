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

const inPossesionData = [
  { title: "Consistency", score: "46" },
  { title: "Composure", score: "55" },
  { title: "Pass selection", score: "22" },
  { title: "Passing Range", score: "70" },
  { title: "Technical ability", score: "60" },
  { title: "Understanding", score: "52" },
  { title: "Concentration", score: "22" },
  { title: "Communication", score: "39" },
];

const outPosseionData = [
  { title: "Positional awareness", score: "50" },
  { title: "Strength in challenges", score: "40" },
  { title: "Game Management", score: "57" },
  { title: "Athleticism and pace", score: "70" },
  { title: "Regain Possession", score: "52" },
  { title: "Recovery runs", score: "22" },
  { title: "Concentration", score: "60" },
  { title: "Communication", score: "52" },
];

const strengthTranstionData = [
  { title: "Transistional Mentality", score: "50" },
  { title: "Organisational ability", score: "40" },
  { title: "Transistion to regaining possesion", score: "57" },
  { title: "Transition to loss of possesion", score: "70" },
  { title: "Awareness of Transistion", score: "52" },
  { title: "Confidence to help oraganise team response", score: "93" },
  { title: "Understanding", score: "41" },
  { title: "Communication", score: "50" },
];

const Step9 = ({nextStep}) => {
  const [scores, setScores] = useState(inPossesionData);
  const [offFieldDatascores, setoffFieldDatascores] = useState(outPosseionData);
  const [strengthTranstionDatas,setStrengthTranstionData] =useState(strengthTranstionData);

  const handleSliderChange = (event, index) => {
    const newScores = [...scores];
    newScores[index].score = event.target.value;
    setScores(newScores);
  };

  const changeSlider = (event, index) => {
    const newScores = [...offFieldDatascores];
    newScores[index].score = event.target.value;
    setoffFieldDatascores(newScores);
  };

  const sliderChange =(event,index)=>{
    const newScores = [...strengthTranstionDatas];
    newScores[index].score = event.target.value;
    setStrengthTranstionData(newScores);
  }

  return (
    <Container maxWidth="md">
      <Card>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            Football/Soccer Coaches Questions and Comments
          </Typography>
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              1.Strength in Possession
            </Typography>
            <Grid container spacing={2}>
              {inPossesionData.map((item, index) => (
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
          <Box>
            <Typography variant="h6" color="primary" gutterBottom>
              2.Strengths out of Possesion
            </Typography>
            <Grid container spacing={2}>
              {outPosseionData.map((item, index) => (
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
              3. Strengths in Transistion
            </Typography>
            <Grid container spacing={2}>
              {strengthTranstionData.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box mb={2}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Box display="flex" alignItems="center">
                      <SliderSizes
                        indexValue={index}
                        value={item.score}
                        name={item.title}
                        onChangeHandler={sliderChange}
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

export default Step9;
