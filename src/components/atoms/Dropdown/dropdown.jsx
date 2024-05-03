import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const DynamicDropdown = ({ options, onSelect, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Select an option' }}
      MenuProps={{ style: { width: 'auto' } }}
    >
      <MenuItem value="" disabled>
        {placeholder}
      </MenuItem>
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default DynamicDropdown;
