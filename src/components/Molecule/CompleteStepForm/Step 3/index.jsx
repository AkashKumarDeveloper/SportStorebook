import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Step3 = ({ formData, handleChange, nextStep }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Player Data from Tribe/Comet/Veo/Statscore
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <TextField
          sx={{ width: 265 }}
          label="Number of Games in the last 24 months"
          variant="outlined"
          name="nextMatch"
          value={formData.nextMatch}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 800 } }}
        />
        <TextField
          sx={{ width: 265 }}
          label="Number of games started"
          variant="outlined"
          name="nextMatch"
          value={formData.nextMatch}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 800 } }}
        />
        <TextField
          sx={{ width: 265 }}
          label="Number of minutes on field in last 24 months "
          variant="outlined"
          name="nextMatch"
          value={formData.nextMatch}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 800 } }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TextField
          sx={{ width: 265 }}
          label="Number of goals"
          variant="outlined"
          name="actMath"
          value={formData.actMath}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 36 } }}
        />
        <TextField
          sx={{ width: 265 }}
          label="Number of yellow cards"
          variant="outlined"
          name="actReading"
          value={formData.actReading}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 36 } }}
        />
        <TextField
          sx={{ width: 265 }}
          label="Number of red cards"
          variant="outlined"
          name="actScience"
          value={formData.actScience}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 36 } }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TextField
          sx={{ width: 265 }}
          label="Games missed from suspension"
          variant="outlined"
          name="actMath"
          value={formData.actMath}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 36 } }}
        />
        <TextField
          sx={{ width: 265 }}
          label="Average disatnce covered per game"
          variant="outlined"
          name="actReading"
          value={formData.actReading}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 36 } }}
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

export default Step3;
