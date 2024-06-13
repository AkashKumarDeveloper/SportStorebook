import React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordEyeButton = ({ onClick, isPasswordVisible }) => (
  <IconButton onClick={onClick} edge="end">
    {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
  </IconButton>
);

export default PasswordEyeButton;