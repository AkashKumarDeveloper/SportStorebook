import React, { Children } from "react";
import Button from "@mui/material/Button";

const ButtonComponent = ({
  width,
  label,
  size,
  borderRadius,
  color,
  labelColor,
  src,
  ...rest
}) => {
  const buttonStyles = {
    width: width === "100%" ? "100%" : "auto",
    borderRadius: borderRadius || "24px",
    backgroundColor: color || "#1976d2",
    color: labelColor || "inherit",
    ...rest,
  };

  return (
    <Button style={buttonStyles} size={size} {...rest}>
      {label}
      {src ? <img src={src} alt="abc" style={{ marginLeft: "10px" }} /> : ""}
    </Button>
  );
};

export default ButtonComponent;
