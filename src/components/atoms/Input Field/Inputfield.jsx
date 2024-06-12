import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const DynamicInputField = ({
  icon,
  endIcon,
  placeholder,
  width,
  height,
  borderRadius,
  marginBottom,
  name,
  type = "text",
  value,
  onChange,
}) => {
  const startAdornment = icon ? (
    <InputAdornment position="start">{icon}</InputAdornment>
  ) : null;

  const endAdornment = endIcon ? (
    <InputAdornment position="end">{endIcon}</InputAdornment>
  ) : null;

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      style={{ width, height, borderRadius, marginBottom }}
      InputProps={{
        startAdornment: startAdornment,
        endAdornment: endAdornment,
      }}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
    />
  );
};

export default DynamicInputField;
