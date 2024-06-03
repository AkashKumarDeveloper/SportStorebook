import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const Step3 = ({ formData, handleChange }) => {
  return (
    <Box>
      <TextField
        label="Next Match"
        variant="outlined"
        name="nextMatch"
        value={formData.nextMatch}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="League Table"
        variant="outlined"
        name="leagueTable"
        value={formData.leagueTable}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary">
        Save & Finish
      </Button>
    </Box>
  );
};

export default Step3;
