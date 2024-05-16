import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const DynamicInputField = ({
  icon,
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

  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      style={{ width, height, borderRadius, marginBottom }}
      InputProps={{
        startAdornment: startAdornment,
      }}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
    />
  );
};

export default DynamicInputField;
