import React from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Academic Qualifications
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <TextField
          sx={{ width: 265 }}
          label="SAT Score Reading and Writing"
          variant="outlined"
          name="satReading"
          value={formData.satReading}
          onChange={handleChange}
          margin="normal"
          type="number" 
          InputProps={{ inputProps: { min: 1, max: 800 } }}
        />
        <TextField
          sx={{ width: 265 }}
          label="SAT Score Math"
          variant="outlined"
          name="satMath"
          value={formData.satMath}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 800 } }}
        />
        <TextField
          sx={{ width: 265 }}
          label="ACT Score English"
          variant="outlined"
          name="actEnglish"
          value={formData.actEnglish}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 36 } }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TextField
          sx={{ width: 265 }}
          label="ACT Score Mathematics"
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
          label="ACT Score Readings"
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
          label="ACT Score Science"
          variant="outlined"
          name="actScience"
          value={formData.actScience}
          onChange={handleChange}
          margin="normal"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 36 } }}
        />
      </Box>
      <TextField
        label="Grade Point Average"
        variant="outlined"
        name="gpa"
        value={formData.gpa}
        onChange={handleChange}
        margin="normal"
        fullWidth
        type="number"
        InputProps={{ inputProps: { min: 0, max: 4 } }}
      />
      <TextField
        label="NCEA"
        variant="outlined"
        name="ncea"
        value={formData.ncea}
        onChange={handleChange}
        margin="normal"
        select
        fullWidth
      >
        <MenuItem value="Option1">Option 1</MenuItem>
        <MenuItem value="Option2">Option 2</MenuItem>
      </TextField>
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

export default Step1;
