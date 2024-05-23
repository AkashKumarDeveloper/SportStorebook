import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Card)({
  width: '275px',
  height: '383px',
  padding: '16px',
  boxSizing: 'border-box',
});

const ProgressBox = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CircularProgressWithLabel = (props) => (
  <ProgressBox>
    <CircularProgress variant="determinate" {...props} />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="caption" component="div" color="text.secondary">
        {`${Math.round(props.value)}%`}
      </Typography>
    </Box>
  </ProgressBox>
);

const CompleteProfileLink = styled('div')({
  color: 'red',
  cursor: 'pointer',
  textAlign: 'right',
  marginBottom: '8px',
});

const PersonalInfoCard = () => {
  const handleProfileClick = () => {
    // logic to navigate to another page
    console.log('Navigating to complete profile page...');
  };

  return (
    <CardContainer>
      <CompleteProfileLink onClick={handleProfileClick}>
        Please complete your profile
      </CompleteProfileLink>
      <CardContent>
        <LinearProgress variant="determinate" value={40} />
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
          Completed Profile 40%
        </Typography>
        <Box my={2}>
          <Typography variant="body1">Name: Male</Typography>
          <Typography variant="body1">Email: adamsmith@gmail.com</Typography>
          <Typography variant="body1">Phone: +1-23456-7890</Typography>
          <Typography variant="body1">Sports Name: Football</Typography>
          <Typography variant="body1">Last Assessment: 15-Feb-2024</Typography>
        </Box>
        <CircularProgressWithLabel value={60} />
        <Typography variant="body2" color="textSecondary">
          Overall Rank
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default PersonalInfoCard;
