// src/App.js
import React from "react";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { Typography, Box, Grid } from "@mui/material";
import SoccerPlayer from "../.../../../../Assets/Images/medium-shot-man-holding-football_23-2150465440.jpg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  avatar: {
    width: 150,
    height: 150,
  },
  mapContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    maxWidth: 800,
    marginTop: 20,
  },
  branch: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  strength: {
    color: "green",
  },
  weakness: {
    color: "red",
  },
  line: {
    position: "absolute",
    height: 2,
    backgroundColor: "black",
    zIndex: -1,
  },
});

const Apply = () => {
  const classes = useStyles();

  const strengths = [
    { text: "Sustained Attention", x: "10%", y: "10%" },
    { text: "Fast Speed", x: "10%", y: "50%" },
    { text: "Logic", x: "10%", y: "90%" },
    { text: "Thinking Ability", x: "90%", y: "10%" },
  ];

  const weaknesses = [
    { text: "Team Work", x: "90%", y: "30%" },
    { text: "Verbal Ability", x: "90%", y: "50%" },
    { text: "Cognitive Efficiency", x: "90%", y: "70%" },
    { text: "Working Memory", x: "50%", y: "90%" },
  ];

  const renderBranches = (items, styleClass) => {
    return items.map((item, index) => (
      <Box
        key={index}
        className={`${classes.branch} ${styleClass}`}
        style={{ left: item.x, top: item.y }}
      >
        <Typography variant="body1">{item.text}</Typography>
      </Box>
    ));
  };

  return (
    <div className={classes.root}>
      <Avatar src={SoccerPlayer} className={classes.avatar} />
      <Typography variant="h6">Concept Map</Typography>
      <div className={classes.mapContainer}>
        {renderBranches(strengths, classes.strength)}
        {renderBranches(weaknesses, classes.weakness)}
      </div>
    </div>
  );
};

export default Apply;
