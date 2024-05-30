// src/App.js
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    margin: '20px auto',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
  },
  listItem: {
    paddingLeft: 0,
  },
  listItemIcon: {
    minWidth: 30,
    color: '#FF5722',
  },
  listItemText: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
});

const Appy = () => {
  const classes = useStyles();

  const details = [
    "Game-Changing Arsenal: Delving into a Footballer’s Strength, Power, and Speed.",
    "Beyond the Ball: An In-Depth Exploration of a Football Player’s Abilities.",
    "Unleashing Potential: The All-Encompassing Player Information Page.",
    "From Strength to Speed: A Holistic Overview of Footballer Attributes.",
    "More than Stats: The Intricacies of a Footballer’s Strength, Power, and Speed.",
    "In the Limelight: A Detailed Look at a Football Player’s Athletic Proficiency.",
    "Powerhouse on the Field: Understanding the Dynamics of a Football Star.",
  ];

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>Comprehensive Detail</Typography>
        <img src="path-to-image.png" alt="Football Player" className={classes.image} />
        <List>
          {details.map((detail, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <SportsSoccerIcon />
              </ListItemIcon>
              <ListItemText
                primary={detail}
                primaryTypographyProps={{ className: classes.listItemText }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Appy;
