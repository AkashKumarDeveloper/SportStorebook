import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Step2 = ({ formData, handleChange, nextStep }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Sport Specific Football/Soccer Details</Typography>
      <Box display="flex" justifyContent="space-between">
        <TextField
          label="Primary Role"
          variant="outlined"
          name="primaryRole"
          value={formData.primaryRole}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Secondary Role"
          variant="outlined"
          name="secondaryRole"
          value={formData.secondaryRole}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Primary Position"
          variant="outlined"
          name="primaryPosition"
          value={formData.primaryPosition}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TextField
          label="Secondary Position"
          variant="outlined"
          name="secondaryPosition"
          value={formData.secondaryPosition}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Profile Video Link"
          variant="outlined"
          name="profileVideoLink"
          value={formData.profileVideoLink}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <input
          accept="video/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={(e) => handleChange({ target: { name: 'profileVideo', value: e.target.files[0] } })}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span">
            Upload Video
          </Button>
        </label>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button variant="contained" color="primary" onClick={nextStep}>
          Save & Continue
        </Button>
        <Button variant="contained" color="secondary">
          Assign to Coach
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
