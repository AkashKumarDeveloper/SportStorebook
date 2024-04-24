import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const DynamicInputField = ({ icon, placeholder, width, height, borderRadius }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const startAdornment = icon ? (
    <InputAdornment position="start">
      {icon}
    </InputAdornment>
  ) : null;

  return (
    <TextField
      variant="outlined"
      placeholder={inputValue ? '' : placeholder}
      style={{ width, height, borderRadius }}
      InputProps={{
        startAdornment: startAdornment,
      }}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default DynamicInputField;
