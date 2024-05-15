import React from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { green } from '@mui/material/colors';

const GreenEyeButton = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <IconButton style={{ color: green[500] }} onClick={handleClick}>
      <RemoveRedEyeIcon />
    </IconButton>
  );
};

export default GreenEyeButton;