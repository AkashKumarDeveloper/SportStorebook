import React from 'react';
import { Card, CardContent, Typography, Grid, Box, List, ListItem, ListItemText, Switch, styled } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', Punctuality: 40, Professionalism: 60, Helpfulness: 30, 'Team Player': 40, Resilience: 20, Selflessness: 50, Leadership: 30, Motivational: 10 },
  { name: 'Week 2', Punctuality: 30, Professionalism: 50, Helpfulness: 20, 'Team Player': 30, Resilience: 10, Selflessness: 40, Leadership: 20, Motivational: 20 },
  { name: 'Week 3', Punctuality: 20, Professionalism: 40, Helpfulness: 50, 'Team Player': 60, Resilience: 30, Selflessness: 50, Leadership: 40, Motivational: 40 },
  { name: 'Week 4', Punctuality: 55, Professionalism: 70, Helpfulness: 45, 'Team Player': 55, Resilience: 38, Selflessness: 60, Leadership: 52, Motivational: 25 },
];

const OnOffSwitch = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  marginBottom: '10px',
});

const ScoreBox = styled(Box)({
  display: 'inline-block',
  padding: '5px 10px',
  borderRadius: '4px',
  backgroundColor: '#ff9800',
  color: '#fff',
  fontWeight: 'bold',
  marginTop: '10px',
});

const CustomCard = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box border={1} borderColor="#e0e0e0" borderRadius="8px" width="450px" height="315px" padding="16px">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} ticks={[0, 20, 40, 60, 80]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="Punctuality" stroke="#8884d8" strokeWidth={2} />
                  <Line type="monotone" dataKey="Professionalism" stroke="#82ca9d" strokeWidth={2} />
                  <Line type="monotone" dataKey="Helpfulness" stroke="#ffc658" strokeWidth={2} />
                  <Line type="monotone" dataKey="Team Player" stroke="#ff7300" strokeWidth={2} />
                  <Line type="monotone" dataKey="Resilience" stroke="#888888" strokeWidth={2} />
                  <Line type="monotone" dataKey="Selflessness" stroke="#8dd1e1" strokeWidth={2} />
                  <Line type="monotone" dataKey="Leadership" stroke="#d0ed57" strokeWidth={2} />
                  <Line type="monotone" dataKey="Motivational" stroke="#a4de6c" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box display="flex" alignItems="center">
                <OnOffSwitch>
                  <Typography variant="body2" align="center">ON</Typography>
                  <Typography variant="body2" align="center" color="success">OFF</Typography>
                </OnOffSwitch>
                <Box ml={2}>
                  <Typography variant="h6">Field Report</Typography>
                  <Typography variant="subtitle1">Psychological attributes Off Field</Typography>
                </Box>
              </Box>

              <List dense>
                <ListItem>
                  <ListItemText primary="Punctuality - 55%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Professionalism - 70%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Helpfulness - 45%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Team Player - 55%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resilience - 38%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Selflessness - 60%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Leadership - 52%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Motivational - 25%" />
                </ListItem>
              </List>

              <ScoreBox>Score - 88</ScoreBox>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
