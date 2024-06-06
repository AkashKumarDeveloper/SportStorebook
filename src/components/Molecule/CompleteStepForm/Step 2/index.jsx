import React from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

const Step2 = ({ formData, handleChange, nextStep }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Sport Specific Football/Soccer Details
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <TextField
          select
          label="Primary Role"
          variant="outlined"
          name="primaryRole"
          value={formData.primaryRole}
          onChange={handleChange}
          margin="normal"
          fullWidth
        >
          <MenuItem value="Role1">Defender</MenuItem>
          <MenuItem value="Role2">Striker</MenuItem>
        </TextField>
        <TextField
          select
          label="Secondary Role"
          variant="outlined"
          name="secondaryRole"
          value={formData.secondaryRole}
          onChange={handleChange}
          margin="normal"
          fullWidth
        >
          <MenuItem value="Role1">Defender</MenuItem>
          <MenuItem value="Role2">Striker</MenuItem>
        </TextField>
        <TextField
          select
          label="Primary Position"
          variant="outlined"
          name="primaryPosition"
          value={formData.primaryPosition}
          onChange={handleChange}
          margin="normal"
          fullWidth
        >
          <MenuItem value="Position1">Center Back</MenuItem>
          <MenuItem value="Position2">Center Right</MenuItem>
        </TextField>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TextField
          select
          label="Secondary Position"
          variant="outlined"
          name="secondaryPosition"
          value={formData.secondaryPosition}
          onChange={handleChange}
          margin="normal"
          fullWidth
        >
          <MenuItem value="Position1">Back Left</MenuItem>
          <MenuItem value="Position2">Midfield</MenuItem>
        </TextField>
        <TextField
          label="Profile Video Link"
          variant="outlined"
          name="profileVideoLink"
          value={formData.profileVideoLink}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Choose File "
          variant="outlined"
          name="profileVideoLink"
          value={formData.profileVideoLink}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
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
