import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes({ color }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          color: color || '#01a800', 
          '& .MuiSlider-valueLabel': {
            backgroundColor: color || '#01a800', 
            color: 'white', 
            borderRadius: '4px',
            padding: '14px', 
          },
        }}
      />
    </Box>
  );
}
