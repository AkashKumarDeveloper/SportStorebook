// src/App.js
import React from 'react';
import { Container, Grid, Typography, Paper, Box, Avatar } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
});

const useStyles = makeStyles(() => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 'auto',
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  strength: {
    color: 'green',
  },
  weakness: {
    color: 'red',
  },
  field: {
    position: 'relative',
    height: '200px',
    backgroundColor: '#4CAF50',
    marginTop: theme.spacing(2),
  },
  player: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));

function Player() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Avatar alt="Player" src="/path-to-image.jpg" className={classes.avatar} />
              <Typography variant="h5">Player Name</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={`${classes.paper} ${classes.strength}`}>
              <Typography variant="h6">Strength Points</Typography>
              <ul>
                <li>Thinking Ability</li>
                <li>Sustained Attention</li>
                <li>Fast Speed</li>
                <li>Logic</li>
                <li>Working Memory</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={`${classes.paper} ${classes.weakness}`}>
              <Typography variant="h6">Weak Points</Typography>
              <ul>
                <li>Team Work</li>
                <li>Verbal Ability</li>
                <li>Cognitive Efficiency</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <Box className={classes.field}>
          <SportsSoccerIcon className={classes.player} fontSize="large" />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Player;
