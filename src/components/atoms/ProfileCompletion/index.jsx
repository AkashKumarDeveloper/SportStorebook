import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const FinalStep = ({ onGoToProfile }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom>
        Thanks for completing your profile
      </Typography>
      <Typography variant="body1" gutterBottom>
        "Thank you for updating your profile. Please navigate to your
        profile section to review and track your progress."
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onGoToProfile}
      >
        Go To Profile
      </Button>
    </Box>
  );
};

export default FinalStep;
