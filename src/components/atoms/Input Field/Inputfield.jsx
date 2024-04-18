import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ backgroundColor }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch", alignItems: "center" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={backgroundColor && { backgroundColor }} />
    </Box>
  );
}
